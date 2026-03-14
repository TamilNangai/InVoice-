import { useState } from "react"
import Bill from "@/Components/Invoice/Bill"
import Header from "@/Components/Nav/Header"
import CustomerForm from "@/Components/Form/Customerform"
import ProductForm from "@/Components/Form/Productform"
import PriceForm from "@/Components/Form/Priceform"
import Buttons from "@/Components/Button/Buttons"
import vectora from "@/assets/Vectora.png"
import { saveInvoice } from "@/utils/SaveInvoice"


type Product = {
  productName: string
  sub?: string
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

  product: Product[]

  price: {
    total: number
    due: number
    paid: number
    duedate: string
    paymentMethod: string
  }

  discount: number
}

const Product_invoice = () => {

  const [invoiceData, setInvoiceData] = useState<InvoiceData>({
    customer: {
      customer: "",
      email: "",
      office: "",
      gst: "",
      phone: "",
      address: ""
    },

    product: [
      {
        productName: "",
        sub: "",
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

  /* ---------------- SUBTOTAL ---------------- */

  const subtotal = invoiceData.product.reduce((acc, item) => {
    return acc + (Number(item.price) || 0)
  }, 0)

  /* ---------------- GST ---------------- */

  const gstTotal = invoiceData.product.reduce((acc, item) => {

    const price = Number(item.price) || 0
    const tax = Number(item.tax) || 0

    const gst = (price * tax) / 100

    return acc + gst

  }, 0)

  /* ---------------- DISCOUNT ---------------- */

  const discount = Number(invoiceData.discount || 0)

  /* ---------------- TOTAL ---------------- */

  const totalAmount = subtotal + gstTotal - discount

  /* ---------------- PAID ---------------- */

  const paidAmount = Number(invoiceData.price.paid || 0)

  /* ---------------- DUE ---------------- */

  const dueAmount = totalAmount - paidAmount


  /* ---------------- SAVE + PRINT ---------------- */

  const handlePrintAndSave = async () => {

    await saveInvoice({
      invoiceType: "product",

      customer: invoiceData.customer,

      service: invoiceData.product.map(p => ({
        serviceName: p.productName,
        price: p.price,
        tax: p.tax
      })),

      price: {
        ...invoiceData.price,
        total: totalAmount,
        due: dueAmount
      }
    })

    window.print()
  }

  const rows = invoiceData.product.map((item, index) => ({
    title: item.productName,
    subtitle: `Prd:${String(index + 1).padStart(4, "0")}`,
    sub: item.sub,
    amount: item.price
  }))

  
  return (

    <div className="w-[1500px]">

      {/* HEADER */}

      <div>

        <Header
          h1="Product Invoice"
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

        {/* LEFT SIDE */}

        <div className="w-[50%] space-y-7 p-4">

          <CustomerForm
            data={invoiceData.customer}
            setData={(data) =>
              setInvoiceData(prev => ({
                ...prev,
                customer: data
              }))
            }
          />

          <ProductForm
            data={invoiceData.product}
            setData={(data) =>
              setInvoiceData(prev => ({ ...prev, product: data }))
            }
            title="Product Details"
            nameLabel="Product Name"
            addButton="+ Add Product Line"
            showSub={true}
          />



          <PriceForm
            data={{
              ...invoiceData.price,
              total: totalAmount,
              due: dueAmount
            }}
            setData={(data) =>
              setInvoiceData(prev => ({
                ...prev,
                price: data
              }))
            }
          />

        </div>


        {/* RIGHT SIDE BILL */}

        <div className="w-[50%] p-4">

          <Bill
            type="product"

            rows={rows}

            button={
              <Buttons
                src1=""
                src2=""
                h1="Product Invoice"
                h2=""
              />
            }

            name={invoiceData.customer.customer}
            email={invoiceData.customer.email}
            phone={Number(invoiceData.customer.phone)}
            college={invoiceData.customer.office}

            invoiceid="INV-2026-001"
            date={new Date().toLocaleDateString()}
            duedate={invoiceData.price.duedate}

            boxdate={new Date().toLocaleDateString()}
            boxduedate={invoiceData.price.duedate}
            boxreference="Po-12345"

            detailhead="Product Details"

            subamount11={subtotal}
            subamount12={discount}
            subamount13={gstTotal}

            subamount21={totalAmount}
            subamount22={paidAmount}
            subamount23={dueAmount}

            taxPercent={invoiceData.product[0]?.tax}
            paymentMethod={invoiceData.price.paymentMethod}

            conditionPara="Payment is due within 7 days of invoice issuance, Fees are non-refundable once the internship program has commenced."

            onPrint={handlePrintAndSave}
          />

        </div>

      </section>

    </div>
  )
}

export default Product_invoice
