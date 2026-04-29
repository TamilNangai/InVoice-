import { useState, useRef, useEffect } from "react"
import Bill from "@/Components/Invoice/Bill"
import Header from "@/Components/Nav/Header"
import CustomerForm from "@/Components/Form/Customerform"
import ProductForm from "@/Components/Form/Productform"
import PriceForm from "@/Components/Form/Priceform"
import Buttons from "@/Components/Button/Buttons"
import vectora from "@/assets/Vectora.png"
import { generateInvoiceId } from "@/utils/generateInvoiceId"
import { validateForm, validateServiceInvoice } from "@/utils/useInvoiceValidation"
import { saveAndPrint } from "@/utils/saveAndPrint"
import { getSettings } from "@/utils/getSettings"
import { showSuccess, showConfirm } from "@/utils/alert";

type Service = {
  serviceName: string
  price: number
  tax: number
}

type InvoiceData = {
  customer: {
    customer: string
    email: string
    office: string
    gst: string
    phone: string
    address: string
  }

  service: Service[]

  price: {
    total: number
    due: number
    paid: number
    duedate: string
    paymentMethod: string
  }

  discount: number
}

/* ✅ Load draft */
const getInitialInvoiceData = (): InvoiceData => {
  const saved = localStorage.getItem("service_invoice_data")
  if (saved) return JSON.parse(saved)

  return {
    customer: {
      customer: "",
      email: "",
      office: "",
      gst: "",
      phone: "",
      address: ""
    },
    service: [
      {
        serviceName: "",
        price: 0,
        tax: 0
      }
    ],
    price: {
      total: 0,
      due: 0,
      paid: 0,
      duedate: "",
      paymentMethod: ""
    },
    discount: 0
  }
}

const Service_invoice = () => {

  /* ✅ Load invoice ID */
  const [invoiceId, setInvoiceId] = useState(() => {
    return localStorage.getItem("service_invoice_id") || generateInvoiceId()
  })

  const [company, setCompany] = useState<any>(null)

  const [invoiceData, setInvoiceData] = useState<InvoiceData>(getInitialInvoiceData)

  /* ✅ Auto save draft */
  useEffect(() => {
    localStorage.setItem("service_invoice_data", JSON.stringify(invoiceData))
    localStorage.setItem("service_invoice_id", invoiceId)
  }, [invoiceData, invoiceId])

  /* ================= FETCH COMPANY ================= */

  useEffect(() => {
    const fetchCompany = async () => {
      const data = await getSettings()
      setCompany(data)
    }
    fetchCompany()
  }, [])

  /* ================= CLEAR DRAFT ================= */

  const handleClearDraft = () => {
    localStorage.removeItem("service_invoice_data")
    localStorage.removeItem("service_invoice_id")

    setInvoiceId(generateInvoiceId())
    setInvoiceData(getInitialInvoiceData())
  }

  /* ================= CALCULATIONS ================= */

  const subtotal = invoiceData.service.reduce((acc, item) => {
    return acc + (Number(item.price) || 0)
  }, 0)

  const gstTotal = invoiceData.service.reduce((acc, item) => {
    const price = Number(item.price) || 0
    const tax = Number(item.tax) || 0
    return acc + (price * tax) / 100
  }, 0)

  const effectiveTaxPercent =
    Math.round(subtotal > 0 ? (gstTotal / subtotal) * 100 : 0)

  const discount = Number(invoiceData.discount || 0)

  const totalAmount = Math.round(subtotal + gstTotal - discount)

  const paidAmount = Number(invoiceData.price.paid || 0)

  const dueAmount = Math.max(totalAmount - paidAmount, 0)

  /* ================= SAVE + PRINT ================= */

  const billRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null)

  const handlePrintAndSave = async () => {

    const validServices = invoiceData.service.filter(
      s => s.serviceName && s.price > 0
    )

    const confirm = await showConfirm("Do you want to save this invoice?");
    if (!confirm.isConfirmed) return;

    if (!validateForm(formRef.current)) return

    const valid = await validateServiceInvoice(
      invoiceData,
      totalAmount
    )

    if (!valid) return

    await saveAndPrint({
      invoiceId,
      invoiceType: "service",
      customer: invoiceData.customer,
      service: validServices,
      price: {
        ...invoiceData.price,
        total: totalAmount,
        due: dueAmount
      }
    });

    await showSuccess("Invoice saved successfully");

    /* ✅ Clear draft after save */
    localStorage.removeItem("service_invoice_data")
    localStorage.removeItem("service_invoice_id")

    setInvoiceId(generateInvoiceId())
    setInvoiceData(getInitialInvoiceData())
    formRef.current?.reset()
  }

  if (company === null)
    return (
      <div className="flex items-center justify-center min-h-screen min-w-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );

  return (
    <div className="w-full h-screen ">
      <div className="flex items-center justify-between bg-[#DFDFDF99] px-4">

        <Header
          h1=" Service Invoice"
          para={`#${invoiceId}`}
        />

        <div className="flex items-end">
          {/* ✅ Clear Draft Button */}
          <div onClick={handleClearDraft} className="px-4 py-2 text-black rounded-md ml-2">
            <Buttons h1="Clear Draft" variant="secondary" />
          </div>

          <div className="px-4 py-2 text-black rounded-md ml-2">
            <Buttons
              h1="Issue Invoice"
              variant="secondary"
              src2={vectora}
            />
          </div>
        </div>
      </div>

      <form
        className="grid grid-cols-2 w-full h-full"
        ref={formRef}
      >

        {/* LEFT SIDE */}
        <div className="w-[100%] space-y-7 p-4 grid">

          <CustomerForm
            data={invoiceData.customer}
            setData={(data) =>
              setInvoiceData(prev => ({ ...prev, customer: data }))
            }
          />

          <ProductForm
            data={invoiceData.service.map(s => ({
              productName: s.serviceName,
              price: s.price,
              tax: s.tax
            }))}

            setData={(data) =>
              setInvoiceData(prev => ({
                ...prev,
                service: data.map(item => ({
                  serviceName: item.productName,
                  price: item.price,
                  tax: item.tax
                }))
              }))
            }

            title="Service Details"
            nameLabel="Service Name"
            addButton="+ Add Service Line"
          />

          <PriceForm
            data={{
              ...invoiceData.price,
              total: totalAmount,
              due: dueAmount
            }}
            setData={(data) =>
              setInvoiceData(prev => ({ ...prev, price: data }))
            }
          />

        </div>

        {/* RIGHT SIDE BILL */}
        <div className="w-[100%] h-full grid p-4">

          <Bill
            type="service"
            ref={billRef}

            companyName={company.companyName}
            companyEmail={company.companyEmail}
            companyPhone={company.companyPhone}
            companyAddress={company.companyAddress}

            rows={invoiceData.service.map(item => ({
              title: item.serviceName,
              subtitle: "Service",
              amount: item.price
            }))}

            boxdate={new Date().toLocaleDateString()}
            boxduedate={invoiceData.price.duedate}
            boxreference="Po-12345"

            button={<Buttons h1="Service Invoice" variant="primary" />}
            name={invoiceData.customer.customer}
            email={invoiceData.customer.email}
            phone={Number(invoiceData.customer.phone)}
            college={invoiceData.customer.office}

            invoiceid={invoiceId}
            date={new Date().toLocaleDateString()}
            duedate={invoiceData.price.duedate}

            detailhead="Service Details"

            subamount11={subtotal}
            subamount12={discount}
            subamount13={gstTotal}

            subamount21={totalAmount}
            subamount22={paidAmount}
            subamount23={dueAmount}

            taxPercent={effectiveTaxPercent}
            paymentMethod={invoiceData.price.paymentMethod}

            conditionPara="Thank you for your business. Please remit payment within 30 days."

            onPrint={handlePrintAndSave}
          />

        </div>

      </form>
    </div>
  )
}

export default Service_invoice