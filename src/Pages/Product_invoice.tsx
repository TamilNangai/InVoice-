import { useState, useRef, useEffect } from "react"
import Bill from "@/Components/Invoice/Bill"
import Header from "@/Components/Nav/Header"
import CustomerForm from "@/Components/Form/Customerform"
import ProductForm from "@/Components/Form/Productform"
import PriceForm from "@/Components/Form/Priceform"
import Buttons from "@/Components/Button/Buttons"
import vectora from "@/assets/Vectora.png"
import { saveInvoice } from "@/utils/SaveInvoice"
import { validateForm } from "@/utils/useInvoiceValidation"
import { generateInvoiceId } from "@/utils/generateInvoiceId"
import { saveAndPrint } from "@/utils/saveAndPrint";
import { getSettings } from "@/utils/getSettings"


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


  /* ---------------- FETCH COMPANY ---------------- */

  useEffect(() => {

    const fetchCompany = async () => {

      const data = await getSettings()

      console.log("Company Data:", data)

      setCompany(data)

    }

    fetchCompany()

  }, [])



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

  const discount = Number(invoiceData.discount || 0)

  const totalAmount = subtotal + gstTotal - discount

  const paidAmount = Number(invoiceData.price.paid || 0)

  const dueAmount = totalAmount - paidAmount


  /* ---------------- SAVE + PRINT ---------------- */
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

    if (!emailRegex.test(email)) {
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

    /* PRODUCT VALIDATION */

    const invalidProduct = invoiceData.product.some(
      p =>
        !p.productName ||
        !p.sub ||
        p.price <= 0 ||
        isNaN(p.price) ||
        p.tax < 0 ||
        p.tax > 100 ||
        isNaN(p.tax)
    )

    if (invalidProduct) {
      alert("Please fill all product details correctly.")
      return
    }

    /* FILTER EMPTY ROWS */

    const validProducts = invoiceData.product.filter(
      p => p.productName && p.price > 0
    )

    /* PRICE VALIDATION */

    const { paid, duedate, paymentMethod } = invoiceData.price

    if (!duedate || !paymentMethod || isNaN(paid)) {
      alert("Please fill all price details correctly.")
      return
    }
    if (paid <= 0) {
      alert("Please fill the paid Amount correctly.")
      return
    }

    const today = new Date().toISOString().split("T")[0]

    if (duedate <= today) {
      alert("Due date must be a future date")
      return
    }

   

      // product: invoiceData.product,

      

    await saveAndPrint(
      {
        invoiceId,
        invoiceType: "product",
        customer: invoiceData.customer,
        product: validProducts,
        price: {
          ...invoiceData.price,
          total: totalAmount,
          due: dueAmount
        }
      },
    billRef
  )
  }


  const rows = invoiceData.product.map((item, index) => ({

    title: item.productName,
    subtitle: `Prd:${String(index + 1).padStart(4, "0")}`,
    sub: item.sub,
    amount: item.price

  }))


  if (!company) return <div>Loading...</div>



  return (

    <div className="w-full h-screen overflow-auto">
      <div className="flex items-center justify-between bg-[#DFDFDF99] px-4">
      <Header
        h1="Product Invoice"
        para={`#${invoiceId}`}
      />

     
      <div className="">
        <Buttons
          h1="Issue Invoice"
          h2="Save Draft"
          src2={vectora}
          src1=""
        />
      </div>
</div>

      <form
        className="grid grid-cols-2 w-full h-full"
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

        {/* LEFT SIDE */}

        <div className="w-[100%] space-y-7 p-4 grid">

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
              setInvoiceData(prev => ({
                ...prev,
                product: data
              }))
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

        <div className="w-[100%] h-full grid p-4">


          <Bill
            ref={billRef}
            type="product"

            companyName={company.companyName}
            companyEmail={company.companyEmail}
            companyPhone={company.companyPhone}
            companyAddress={company.companyAddress}

            rows={rows}

            button={<Buttons src1="" src2="" h1="Product Invoice" h2="" />}

            name={invoiceData.customer.customer}
            email={invoiceData.customer.email}
            phone={Number(invoiceData.customer.phone)}
            college={invoiceData.customer.office}

            invoiceid={invoiceId}

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

            taxPercent={invoiceData.product[0]?.tax || 0}

            paymentMethod={invoiceData.price.paymentMethod}

            conditionPara="Payment is due within 7 days of invoice issuance."

            onPrint={handlePrintAndSave}

          />

        </div>

      </form>

    </div>
  )
}

export default Product_invoice