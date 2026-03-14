import { useState } from "react"
import Bill from "@/Components/Invoice/Bill"
import Header from "@/Components/Nav/Header"
import CustomerForm from "@/Components/Form/Customerform"
import ProductForm from "@/Components/Form/Productform"
import PriceForm from "@/Components/Form/Priceform"
import Buttons from "@/Components/Button/Buttons"
import vectora from "@/assets/Vectora.png"
import { saveInvoice } from "@/utils/SaveInvoice"

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


  /* ================= DISCOUNT ================= */

  const discount = Number(invoiceData.discount || 0)


  /* ================= TOTAL ================= */

  const totalAmount = subtotal + gstTotal - discount


  /* ================= PAID ================= */

  const paidAmount = Number(invoiceData.price.paid || 0)


  /* ================= DUE ================= */

  const dueAmount = totalAmount - paidAmount


  /* ================= SAVE + PRINT ================= */

  const handlePrintAndSave = async () => {

    await saveInvoice({
      invoiceType: "service",
      customer: invoiceData.customer,
      service: invoiceData.service,
      price: {
        ...invoiceData.price,
        total: totalAmount,
        due: dueAmount
      }
    })

    window.print()

  }


  return (

    <div className="w-[1500px]">

      <div>

        <Header
          h1="New Service Invoice"
          para="#INV-2026-001"
        />

        <div className="absolute right-10 top-4">
          <Buttons
            h1="Issue Invoice"
            h2="Save Draft"
            src2={vectora}
            src1=""
          />
        </div>

      </div>


      <section className="flex">

        {/* LEFT SIDE FORMS */}

        <div className="w-[50%] space-y-7 p-4">

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

        <div className="w-[50%] p-4">

          <Bill
            type="service"

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

            invoiceid="INV-2026-001"
            date={new Date().toLocaleDateString()}
            duedate={invoiceData.price.duedate}

            detailhead="Service Details"

            subamount11={subtotal}
            subamount12={discount}
            subamount13={gstTotal}

            subamount21={totalAmount}
            subamount22={paidAmount}
            subamount23={dueAmount}

            taxPercent={invoiceData.service[0]?.tax}
            paymentMethod={invoiceData.price.paymentMethod}

            conditionPara="Thank you for your business. Please remit payment within 30 days."

            onPrint={handlePrintAndSave}
          />

        </div>

      </section>

    </div>

  )

}

export default Service_invoice
