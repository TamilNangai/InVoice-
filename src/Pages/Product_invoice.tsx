import { useState } from "react"
import Header from "@/Components/Nav/Header"
import Customerform from "@/Components/Form/Customerform"
import Productform from "@/Components/Form/Productform"
import Priceform from "@/Components/Form/Priceform"
import Bill from "@/Components/Invoice/Bill"
import Buttons from "@/Components/Button/Buttons"
import vectora from "@/assets/Vectora.png"
import { saveInvoice } from "@/utils/SaveInvoice"

type Product = {
  productName: string
  sub: string
  price: number
  tax: number
}


type Customer = {
  customer: string
  email: string
  phone: string
  office: string
  gst: string
  address: string
}

type Price = {
  total: string
  due: string
  paid: string
  duedate: string
  paymentMethod: string
}

type InvoiceData = {
  customer: Customer
  product: Product[]
  price: Price
}

const Product_invoice = () => {

  const [invoiceData, setInvoiceData] = useState<InvoiceData>({
    customer: {
      customer: "",
      email: "",
      phone: "",
      office: "",
      gst: "",
      address: ""
    },

    product: [
      {
        productName: "",
        sub: "1M",
        price: 0,
        tax: 18
      },
       {
        productName: "",
        sub: "2M",
        price: 0,
        tax: 18
      }
    ],

    price: {
      total: "",
      due: "",
      paid: "",
      duedate: "",
      paymentMethod: ""
    }
  })


  const handlePrintAndSave = async () => {

    console.log("Invoice Data:", invoiceData)

    await saveInvoice({
      invoiceType: "product",
      customer: invoiceData.customer,
      product: invoiceData.product,
      price: invoiceData.price
    })

    window.print()
  }


  return (
    <section className="w-[1500px]">

      <aside>

        <Header
          h1="Products Invoice"
          para="Manage your product catalog and service offerings."
        />

        <div className="absolute right-10 top-4">
          <Buttons
            h1="Issue Invoice"
            h2="Save Draft"
            src2={vectora}
            src1=""
          />
        </div>

      </aside>


      <section className="flex">

        {/* LEFT SIDE */}

        <div className="w-[50%] space-y-7 p-4">

          <Customerform
            data={invoiceData.customer}
            setData={(data: Customer) =>
              setInvoiceData(prev => ({
                ...prev,
                customers: data
              }))
            }
          />

          <Productform
            data={invoiceData.product}
            setData={(data: Product[]) =>
              setInvoiceData(prev => ({
                ...prev,
                product: data
              }))
            }
          />

          <Priceform
            data={invoiceData.price}
            setData={(data: Price) =>
              setInvoiceData(prev => ({
                ...prev,
                price: data
              }))
            }
          />

        </div>


        {/* RIGHT SIDE */}

        <div className="w-[50%] p-4">

          <Bill
            data={invoiceData}
            onPrint={handlePrintAndSave}
            button={<Buttons src1="" src2="" h1="Product Invoice" h2="" />}

            name={invoiceData.customer.customer}
            email={invoiceData.customer.email}
            phone={Number(invoiceData.customer.phone)}
            address={invoiceData.customer.address}
            college={invoiceData.customer.office}

            invoiceid="INV-2026-001"
            date={new Date().toLocaleDateString()}
            duedate={invoiceData.price.duedate}

            boxinvoicedate={new Date().toLocaleDateString()}
            boxduedate={invoiceData.price.duedate}
            boxref="PO-12345"

            detailhead="Product Details"

            head11={invoiceData.product[0]?.productName || ""}
            head12="PRD-001"
            amount1={invoiceData.product[0]?.price || 0}

            head21={invoiceData.product[1]?.productName || ""}
            head22="PRD-002"
            amount2={invoiceData.product[1]?.price || 0}

            count1={invoiceData.product[0]?.sub || ""}
            count2={invoiceData.product[1]?.sub || ""}

            subamount11={Number(invoiceData.price.total)}
            subamount12={0}
            subamount13={Number(invoiceData.customer.gst)}

            subamount21={Number(invoiceData.price.total)}
            subamount22={Number(invoiceData.price.paid)}
            subamount23={Number(invoiceData.price.due)}

            conditionPara="Payment is due within 7 days of invoice issuance."
          />

        </div>

      </section>

    </section>
  )
}

export default Product_invoice
