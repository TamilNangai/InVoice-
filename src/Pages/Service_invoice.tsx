import { useState, useRef, useEffect } from "react"
import Bill from "@/Components/Invoice/Bill"
import Header from "@/Components/Nav/Header"
import CustomerForm from "@/Components/Form/Customerform"
import ProductForm from "@/Components/Form/Productform"
import PriceForm from "@/Components/Form/Priceform"
import Buttons from "@/Components/Button/Buttons"
import vectora from "@/assets/Vectora.png"
import { generateInvoiceId } from "@/utils/generateInvoiceId"
import { validateForm } from "@/utils/useInvoiceValidation"
import { saveAndPrint } from "@/utils/saveAndPrint"
import { getSettings } from "@/utils/getSettings"
import { showError, showSuccess, showConfirm } from "@/utils/alert";



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

const Service_invoice = () => {

  const [invoiceId] = useState(generateInvoiceId())

  const [company, setCompany] = useState<any>(null)

  const [invoiceData, setInvoiceData] = useState<InvoiceData>({
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
  })


  /* ================= FETCH COMPANY ================= */

  useEffect(() => {

    const fetchCompany = async () => {

      const data = await getSettings()

      console.log("Company Data:", data)

      setCompany(data)

    }

    fetchCompany()

  }, [])



  /* ================= SUBTOTAL ================= */

  const subtotal = invoiceData.service.reduce((acc, item) => {
    return acc + (Number(item.price) || 0)
  }, 0)


  /* ================= GST ================= */

  const gstTotal = invoiceData.service.reduce((acc, item) => {

    const price = Number(item.price) || 0
    const tax = Number(item.tax) || 0

    const gst = (price * tax) / 100

    return acc + gst

  }, 0)


  const discount = Number(invoiceData.discount || 0)

  const totalAmount = subtotal + gstTotal - discount

  const paidAmount = Number(invoiceData.price.paid || 0)

  const dueAmount = totalAmount - paidAmount


  /* ================= SAVE + PRINT ================= */

  const billRef = useRef<HTMLDivElement>(null);

  const formRef = useRef<HTMLFormElement>(null)

  const handlePrintAndSave = async () => {

    if (!validateForm(formRef.current)) return

    const { customer, email, office, phone, address } = invoiceData.customer

    if (!/^[0-9]{10}$/.test(phone)) {
      await showError("Phone number must be 10 digits")
      return
    }


    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/

    if (!emailRegex.test(invoiceData.customer.email)) {
      await showError("Please enter a valid email address")
      return
    }

    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{3}$/

    const gst = invoiceData.customer.gst

    if (gst?.trim() && !gstRegex.test(gst)) {
      await showError("Invalid GST number")
      return
    }




    if (!customer || !email || !office || !phone || !address) {
      await showError("Please fill all customer details.")
      return
    }

    const invalidService = invoiceData.service.some(
      s =>
        !s.serviceName ||
        s.price <= 0 ||
        isNaN(s.price) ||
        s.tax < 0 ||
        s.tax > 100 ||
        isNaN(s.tax)
    )

    if (invalidService) {
      await showError("Please fill all service details correctly.")
      return
    }

    const validServices = invoiceData.service.filter(
      s => s.serviceName && s.price > 0
    )

    const { paid, duedate, paymentMethod } = invoiceData.price

    if (!duedate || !paymentMethod || !paid || isNaN(paid)) {
      await showError("Please fill all price details correctly.")
      return
    }
    if (paid<=0) {
      await showError("Please fill the paid Amount correctly.")
      return
    }
    const today = new Date().toISOString().split("T")[0]

    if (duedate <= today) {
      await showError("Due date must be a future date")
      return
    }

    const confirm = await showConfirm("Do you want to save this invoice?");

    if (!confirm.isConfirmed) return; 

    
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
  },
            billRef
          );

    await showSuccess("Invoice saved successfully");

  }



  if (!company) return <div>Loading...</div>



  return (

    <div className="w-full h-screen ">
      <div className="flex items-center justify-between bg-[#DFDFDF99] px-4">
      <Header
        h1="New Service Invoice"
        para={`#${invoiceId}`}
      />

      <div className="">
        <Buttons
          h1="Issue Invoice"
          h2="Save Draft"
          src2={vectora}
          src1=""
          type="submit"
        />
      </div>
      </div>



      <form
         className="grid grid-cols-2 w-full h-full"
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault()
          handlePrintAndSave()
        }}
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

            button={<Buttons src1="" src2="" h1="Service Invoice" h2="" />}

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

            taxPercent={invoiceData.service[0]?.tax || 0}
            paymentMethod={invoiceData.price.paymentMethod}

            conditionPara="Thank you for your business. Please remit payment within 30 days."

            // onPrint={() => formRef.current?.requestSubmit()}
            onPrint={handlePrintAndSave}

          />

        </div>

      </form>

    </div>

  )

}

export default Service_invoice