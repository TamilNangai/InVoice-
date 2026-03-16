import { useState, useRef } from "react"
import Bill from "@/Components/Invoice/Bill"
import Header from "@/Components/Nav/Header"
import CustomerForm from "@/Components/Form/Customerform"
import ProductForm from "@/Components/Form/Productform"
import PriceForm from "@/Components/Form/Priceform"
import Buttons from "@/Components/Button/Buttons"
import vectora from "@/assets/Vectora.png"
import { saveInvoice } from "@/utils/SaveInvoice"
import { generateInvoiceId } from "@/utils/generateInvoiceId"
import { validateForm } from "@/utils/useInvoiceValidation"
import { saveAndPrint } from "@/utils/saveAndPrint"


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

  const billRef = useRef<HTMLDivElement>(null);

  const formRef = useRef<HTMLFormElement>(null)

  const handlePrintAndSave = async () => {

    if (!validateForm(formRef.current)) return

    /* CUSTOMER VALIDATION */

    const { customer, email, office, phone, address } = invoiceData.customer

    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Phone number must be 10 digits")
      return
    }


    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/

    if (!emailRegex.test(invoiceData.customer.email)) {
      alert("Please enter a valid email address")
      return
    }

    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{3}$/

    const gst = invoiceData.customer.gst

    if (gst?.trim() && !gstRegex.test(gst)) {
      alert("Invalid GST number")
      return
    }




    if (!customer || !email || !office || !phone || !address) {
      alert("Please fill all customer details.")
      return
    }

    /* SERVICE VALIDATION */

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
      alert("Please fill all service details correctly.")
      return
    }

    /* FILTER EMPTY ROWS */

    const validServices = invoiceData.service.filter(
      s => s.serviceName && s.price > 0
    )

    /* PRICE VALIDATION */

    const { paid, duedate, paymentMethod } = invoiceData.price

    if (!duedate || !paymentMethod || !paid || isNaN(paid)) {
      alert("Please fill all price details correctly.")
      return
    }
    if (paid<=0) {
      alert("Please fill the paid Amount correctly.")
      return
    }
    const today = new Date().toISOString().split("T")[0]

    if (duedate <= today) {
      alert("Due date must be a future date")
      return
    }


    /* SAVE */

    await saveInvoice({
      invoiceId,
      invoiceType: "service",
      customer: invoiceData.customer,
      service: validServices,
      price: {
        ...invoiceData.price,
        total: totalAmount,
        due: dueAmount
      }
    }
    );

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
  }




  return (

    <div className="w-[1500px]">

      <div>

        <Header
          h1="New Service Invoice"
          para={`#${invoiceId}`}

        />

        <div className="absolute right-10 top-4">
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
        className="flex"
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault()

          if (!formRef.current?.checkValidity()) {
            formRef.current?.reportValidity()
            return
          }

          handlePrintAndSave()
        }}
      >



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
            ref={billRef}
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
