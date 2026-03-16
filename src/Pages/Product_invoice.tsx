// import { useState } from "react"
// import Header from "@/Components/Nav/Header"
// import Customerform from "@/Components/Form/Customerform"
// import Productform from "@/Components/Form/Productform"
// import Priceform from "@/Components/Form/Priceform"
// import Bill from "@/Components/Invoice/Bill"
// import Buttons from "@/Components/Button/Buttons"
// import vectora from "@/assets/Vectora.png"
// import { saveInvoice } from "@/utils/SaveInvoice"

// type Product = {
//   productName: string
//   sub: string
//   price: number
//   tax: number
// }


// type Customer = {
//   customer: string
//   email: string
//   phone: string
//   office: string
//   gst: string
//   address: string
// }

// type Price = {
//   total: string
//   due: string
//   paid: string
//   duedate: string
//   paymentMethod: string
// }

// type InvoiceData = {
//   customer: Customer
//   product: Product
//   price: Price
// }


// const Product_invoice = () => {

//   const [invoiceData, setInvoiceData] = useState<InvoiceData>({
//     customer: {
//       customer: "",
//       email: "",
//       phone: "",
//       office: "",
//       gst: "",
//       address: ""
//     },

//     product:
//     {
//       productName: "",
//       sub: "",
//       price: 0,
//       tax: 18
//     },



//     price: {
//       total: "",
//       due: "",
//       paid: "",
//       duedate: "",
//       paymentMethod: ""
//     }
//   })


//   const handlePrintAndSave = async () => {

//     console.log("Invoice Data:", invoiceData)

//     await saveInvoice({
//       invoiceType: "product",
//       customer: invoiceData.customer,
//       product: invoiceData.product,
//       price: invoiceData.price
//     })

//     window.print()
//   }


//   return (
//     <section className="w-[1500px]">

//       <aside>

//         <Header
//           h1="Products Invoice"
//           para="Manage your product catalog and service offerings."
//         />

//         <div className="absolute right-10 top-4">
//           <Buttons
//             h1="Issue Invoice"
//             h2="Save Draft"
//             src2={vectora}
//             src1=""
//           />
//         </div>

//       </aside>


//       <section className="flex">

//         {/* LEFT SIDE */}

//         <div className="w-[50%] space-y-7 p-4">

//           <Customerform
//             data={invoiceData.customer}
//             setData={(data: Customer) =>
//               setInvoiceData(prev => ({
//                 ...prev,
//                 customers: data
//               }))
//             }
//           />

//           {/* <Productform
//             data={invoiceData.product}
//             setData={(data: Product[]) =>
//               setInvoiceData(prev => ({
//                 ...prev,
//                 product: data
//               }))
//             }
//           /> */}

//           <Priceform
//             data={invoiceData.price}
//             setData={(data: Price) =>
//               setInvoiceData(prev => ({
//                 ...prev,
//                 price: data
//               }))
//             }
//           />

//         </div>


//         {/* RIGHT SIDE */}

//         <div className="w-[50%] p-4">

//           <Bill
//             data={invoiceData}
//             onPrint={handlePrintAndSave}
//             button={<Buttons src1="" src2="" h1="Product Invoice" h2="" />}

//             companyAddress=""
//             companyEmail=""
//             companyName=""
//             companyPhone=""

//             name={invoiceData.customer.customer}
//             email={invoiceData.customer.email}
//             phone={Number(invoiceData.customer.phone)}
//             address={invoiceData.customer.address}
//             college={invoiceData.customer.office}

//             invoiceid="INV-2026-001"
//             date={new Date().toLocaleDateString()}
//             duedate={invoiceData.price.duedate}

//             boxinvoicedate={new Date().toLocaleDateString()}
//             boxduedate={invoiceData.price.duedate}
//             boxref="PO-12345"

//             detailhead="Product Details"

//             head11={invoiceData.product?.productName || ""}
//             head12="PRD-001"
//             amount1={invoiceData.product?.price || 0}

//             head21={invoiceData.product?.productName || ""}
//             head22="PRD-002"
//             amount2={invoiceData.product?.price || 0}

//             count1={invoiceData.product?.sub || ""}
//             count2={invoiceData.product?.sub || ""}

//             subamount11={Number(invoiceData.price.total)}
//             subamount12={0}
//             subamount13={Number(invoiceData.customer.gst)}

//             subamount21={Number(invoiceData.price.total)}
//             subamount22={Number(invoiceData.price.paid)}
//             subamount23={Number(invoiceData.price.due)}

//             conditionPara="Payment is due within 7 days of invoice issuance."
//           />

//         </div>

//       </section>

//     </section>
//   )
// }

// export default Product_invoice

// import { useState } from "react"
// import Bill from "@/Components/Invoice/Bill"
// import Header from "@/Components/Nav/Header"
// import CustomerForm from "@/Components/Form/Customerform"
// import ProductForm from "@/Components/Form/Productform"
// import PriceForm from "@/Components/Form/Priceform"
// import Buttons from "@/Components/Button/Buttons"
// import vectora from "@/assets/Vectora.png"
// import { saveInvoice } from "@/utils/SaveInvoice"


// type Product = {
//   productName: string
//   sub?: string
//   price: number
//   tax: number
// }


// type InvoiceData = {
//   customer: {
//     customer: string
//     email: string
//     office: string
//     gst: string
//     phone: string
//     address: string
//   }

//   product: Product[]

//   price: {
//     total: number
//     due: number
//     paid: number
//     duedate: string
//     paymentMethod: string
//   }

//   discount: number
// }

// const Product_invoice = () => {

//   const [invoiceData, setInvoiceData] = useState<InvoiceData>({
//     customer: {
//       customer: "",
//       email: "",
//       office: "",
//       gst: "",
//       phone: "",
//       address: ""
//     },

//     product: [
//       {
//         productName: "",
//         sub: "",
//         price: 0,
//         tax: 0
//       }
//     ],
      
  

//     price: {
//       total: 0,
//       due: 0,
//       paid: 0,
//       duedate: "",
//       paymentMethod: ""
//     },

//     discount: 0
//   })

//   /* ---------------- SUBTOTAL ---------------- */

//   const subtotal = invoiceData.product.reduce((acc, item) => {
//     return acc + (Number(item.price) || 0)
//   }, 0)

//   /* ---------------- GST ---------------- */

//   const gstTotal = invoiceData.product.reduce((acc, item) => {

//     const price = Number(item.price) || 0
//     const tax = Number(item.tax) || 0

//     const gst = (price * tax) / 100

//     return acc + gst

//   }, 0)

//   /* ---------------- DISCOUNT ---------------- */

//   const discount = Number(invoiceData.discount || 0)

//   /* ---------------- TOTAL ---------------- */

//   const totalAmount = subtotal + gstTotal - discount

//   /* ---------------- PAID ---------------- */

//   const paidAmount = Number(invoiceData.price.paid || 0)

//   /* ---------------- DUE ---------------- */

//   const dueAmount = totalAmount - paidAmount


//   /* ---------------- SAVE + PRINT ---------------- */

//   const handlePrintAndSave = async () => {

//     await saveInvoice({
//       invoiceType: "product",

//       customer: invoiceData.customer,


//       product: invoiceData.product.map(p => ({
//         productName: p.productName,
//         sub: p.sub,
//         price: p.price,
//         tax: p.tax
//       })),

//       price: {
//         ...invoiceData.price,
//         total: totalAmount,
//         due: dueAmount
//       }
//     })

//     window.print()
//   }

//   const rows = invoiceData.product.map((item, index) => ({
//     title: item.productName,
//     subtitle: `Prd:${String(index + 1).padStart(4, "0")}`,
//     sub: item.sub,
//     amount: item.price
//   }))

  
//   return (

//     <div className="w-[1500px]">

//       {/* HEADER */}

//       <div>

//         <Header
//           h1="Product Invoice"
//           para="#INV-2026-001"
//         />

//         <div className="absolute right-10 top-4">
//           <Buttons
//             h1="Issue Invoice"
//             h2="Save Draft"
//             src2={vectora}
//             src1=""
//           />
//         </div>

//       </div>


//       <section className="flex">

//         {/* LEFT SIDE */}

//         <div className="w-[50%] space-y-7 p-4">

//           <CustomerForm
//             data={invoiceData.customer}
//             setData={(data) =>
//               setInvoiceData(prev => ({
//                 ...prev,
//                 customer: data
//               }))
//             }
//           />

//           <ProductForm
//             data={invoiceData.product}
//             setData={(data) =>
//               setInvoiceData(prev => ({ ...prev, product: data }))
//             }
//             title="Product Details"
//             nameLabel="Product Name"
//             addButton="+ Add Product Line"
//             showSub={true}
//           />



//           <PriceForm
//             data={{
//               ...invoiceData.price,
//               total: totalAmount,
//               due: dueAmount
//             }}
//             setData={(data) =>
//               setInvoiceData(prev => ({
//                 ...prev,
//                 price: data
//               }))
//             }
//           />

//         </div>


//         {/* RIGHT SIDE BILL */}

//         <div className="w-[50%] p-4">

//           <Bill
//             type="product"

//             rows={rows}

//             button={
//               <Buttons
//                 src1=""
//                 src2=""
//                 h1="Product Invoice"
//                 h2=""
//               />
//             }

//             name={invoiceData.customer.customer}
//             email={invoiceData.customer.email}
//             phone={Number(invoiceData.customer.phone)}
//             college={invoiceData.customer.office}

//             invoiceid="INV-2026-001"
//             date={new Date().toLocaleDateString()}
//             duedate={invoiceData.price.duedate}

//             boxdate={new Date().toLocaleDateString()}
//             boxduedate={invoiceData.price.duedate}
//             boxreference="Po-12345"

//             detailhead="Product Details"

//             subamount11={subtotal}
//             subamount12={discount}
//             subamount13={gstTotal}

//             subamount21={totalAmount}
//             subamount22={paidAmount}
//             subamount23={dueAmount}

//             taxPercent={invoiceData.product[0]?.tax}
//             paymentMethod={invoiceData.price.paymentMethod}

//             conditionPara="Payment is due within 7 days of invoice issuance, Fees are non-refundable once the internship program has commenced."

//             onPrint={handlePrintAndSave}
//           />

//         </div>

//       </section>

//     </div>
//   )
// }

// export default Product_invoice


import { useState, useEffect } from "react"
import Bill from "@/Components/Invoice/Bill"
import Header from "@/Components/Nav/Header"
import CustomerForm from "@/Components/Form/Customerform"
import ProductForm from "@/Components/Form/Productform"
import PriceForm from "@/Components/Form/Priceform"
import Buttons from "@/Components/Button/Buttons"
import vectora from "@/assets/Vectora.png"

import { saveInvoice } from "@/utils/SaveInvoice"
import { generateInvoiceId } from "@/utils/generateInvoiceId"
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

  const handlePrintAndSave = async () => {

    await saveInvoice({

      invoiceId,   // ✅ REQUIRED

      invoiceType: "product",

      customer: invoiceData.customer,

      product: invoiceData.product,

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


  if (!company) return <div>Loading...</div>



  return (

    <div className="w-[1500px]">

      <Header
        h1="Product Invoice"
        para={`#${invoiceId}`}
      />

      <div className="absolute right-10 top-4">
        <Buttons
          h1="Issue Invoice"
          h2="Save Draft"
          src2={vectora}
          src1=""
        />
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

        <div className="w-[50%] p-4">

          <Bill
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

      </section>

    </div>
  )
}

export default Product_invoice