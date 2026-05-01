// import { useState, useRef, useEffect } from "react"
// // import React from "react"
// import Bill from "@/Components/Invoice/Bill"
// import Header from "@/Components/Nav/Header"
// import CustomerForm from "@/Components/Form/Customerform"
// import ProductForm from "@/Components/Form/Productform"
// import PriceForm from "@/Components/Form/Priceform"
// import Buttons from "@/Components/Button/Buttons"
// import vectora from "@/assets/Vectora.png"
// import { validateForm, validateProductInvoice } from "@/utils/useInvoiceValidation"
// import { generateInvoiceId } from "@/utils/generateInvoiceId"
// import { saveAndPrint } from "@/utils/saveAndPrint";
// import { getSettings } from "@/utils/getSettings"
// import {  showSuccess, showConfirm } from "@/utils/alert";

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
//   const [invoiceId, setInvoiceId] = useState(generateInvoiceId())
//   const [company, setCompany] = useState<any>(null)
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



//   useEffect(() => {
//     const fetchCompany = async () => {
//       const data = await getSettings()


//       setCompany(data)
//     }
//     fetchCompany()
//   }, [])

//   const subtotal = invoiceData.product.reduce((acc, item) => {
//     return acc + (Number(item.price) || 0)
//   }, 0)

//   const gstTotal = invoiceData.product.reduce((acc, item) => {
//     const price = Number(item.price) || 0
//     const tax = Number(item.tax) || 0
//     const gst = (price * tax) / 100
//     return acc + gst
//   }, 0)

// useEffect(() => {
//   localStorage.setItem("product_invoice_data", JSON.stringify(invoiceData))
//   localStorage.setItem("product_invoice_id", invoiceId)
// }, [invoiceData, invoiceId])
// useEffect(() => {
//   const savedData = localStorage.getItem("product_invoice_data")
//   const savedId = localStorage.getItem("product_invoice_id")

//   if (savedData) {
//     setInvoiceData(JSON.parse(savedData))
//   }

//   if (savedId) {
//     setInvoiceId(savedId)
//   }
// }, [])
//   const effectiveTaxPercent =
//     Math.round(subtotal > 0 ? (gstTotal / subtotal) * 100 : 0)
//   const discount = Number(invoiceData.discount || 0)
//   const totalAmount = Math.round(subtotal + gstTotal - discount)
//   const paidAmount = Number(invoiceData.price.paid || 0)
//   const dueAmount = Math.max(totalAmount - paidAmount, 0)

//   const billRef = useRef<HTMLDivElement>(null);
//   const formRef = useRef<HTMLFormElement>(null)

//   const handlePrintAndSave = async () => {

//     if (!validateForm(formRef.current)) return


//     const validProducts = invoiceData.product.filter(
//       p => p.productName && p.price > 0
//     )

//       const valid = await validateProductInvoice(
//         invoiceData,
//         totalAmount
//       )

//       if (!valid) return
     
//     const confirm = await showConfirm("Do you want to save this invoice?");
//     if (!confirm.isConfirmed) return;

//     await saveAndPrint(
//       {
//         invoiceId,
//         invoiceType: "product",
//         customer: invoiceData.customer,
//         product: validProducts,
//         price: {
//           ...invoiceData.price,
//           total: totalAmount,
//           due: dueAmount
//         }
//       },

//     )

//     await showSuccess("Invoice saved successfully");
// // 👉 ADD THIS
// localStorage.removeItem("product_invoice_data")
// localStorage.removeItem("product_invoice_id")
//     // Reset form after successful save
//     setInvoiceId(generateInvoiceId())
//     setInvoiceData({
//       customer: {
//         customer: "",
//         email: "",
//         office: "",
//         gst: "",
//         phone: "",
//         address: ""
//       },
//       product: [
//         {
//           productName: "",
//           sub: "",
//           price: 0,
//           tax: 0
//         }
//       ],
//       price: {
//         total: 0,
//         due: 0,
//         paid: 0,
//         duedate: "",
//         paymentMethod: ""
//       },
//       discount: 0
//     })
//     formRef.current?.reset()
//   }

//   const rows = invoiceData.product.map((item, index) => ({
//     title: item.productName,
//     subtitle: `Prd:${String(index + 1).padStart(4, "0")}`,
//     sub: item.sub,
//     amount: item.price
//   }))

//   if (company === null)

//     return (
//       <div className="flex items-center justify-center min-h-screen min-w-screen">
//         <p className="text-lg font-semibold">Loading...</p>
//       </div>
//     );

//   return (
//     <div className="w-full h-screen ">
//       <div className="flex items-center justify-between bg-[#DFDFDF99] px-4">
//         <Header h1="Product Invoice" para={`#${invoiceId}`} // onMenuClick={() => setMobileOpen(true)} 
//          />

//         <div className="">
//           <button
//             type="button"

//             className="px-4 py-2 text-black rounded-md ml-2"
//           >
//             <Buttons
//             h1="Issue Invoice" variant="secondary" src2={vectora}
//             />
//           </button>
//         </div>
//       </div>

//       <form
//         className="grid grid-cols-2 w-full h-full"
//         ref={formRef}
//         onSubmit={(e) => {
//           e.preventDefault()


//         }}
//       >

//         <div className="w-[90%] space-y-7 p-4 grid">

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
//               setInvoiceData(prev => ({
//                 ...prev,
//                 product: data
//               }))
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

//         <div className="w-[110%] h-full grid p-4 sm:-ml-12">

//           <Bill
//             ref={billRef}
//             type="product"
//             companyName={company.companyName}
//             companyEmail={company.companyEmail}
//             companyPhone={company.companyPhone}
//             companyAddress={company.companyAddress}
//             rows={rows}
//             button={<Buttons h1="Product Invoice" variant="primary" />}
//             name={invoiceData.customer.customer}
//             email={invoiceData.customer.email}
//             phone={Number(invoiceData.customer.phone)}
//             college={invoiceData.customer.office}
//             invoiceid={invoiceId}
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
//             taxPercent={effectiveTaxPercent}
//             paymentMethod={invoiceData.price.paymentMethod}
//             conditionPara="Payment is due within 7 days of invoice issuance, Fees are non-refundable once the internship program has commenced."
//             onPrint={handlePrintAndSave}
//           />

//         </div>

//       </form>

//     </div>
//   )
// }

// export default Product_invoice

import { useState, useRef, useEffect } from "react"
import Bill from "@/Components/Invoice/Bill"
import Header from "@/Components/Nav/Header"
import CustomerForm from "@/Components/Form/Customerform"
import ProductForm from "@/Components/Form/Productform"
import PriceForm from "@/Components/Form/Priceform"
import Buttons from "@/Components/Button/Buttons"
import vectora from "@/assets/Vectora.png"
import { validateForm, validateProductInvoice } from "@/utils/useInvoiceValidation"
import { generateInvoiceId } from "@/utils/generateInvoiceId"
import { saveAndPrint } from "@/utils/saveAndPrint"
import { getSettings } from "@/utils/getSettings"
import { showSuccess, showConfirm } from "@/utils/alert"

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

const getInitialInvoiceData = (): InvoiceData => {
  const saved = localStorage.getItem("product_invoice_data")
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
  }
}

const Product_invoice = () => {
  const [invoiceId, setInvoiceId] = useState(() => {
    return localStorage.getItem("product_invoice_id") || generateInvoiceId()
  })

  const [company, setCompany] = useState<any>(null)

  const [invoiceData, setInvoiceData] = useState<InvoiceData>(getInitialInvoiceData)

  const billRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  // ✅ Fetch company
  useEffect(() => {
    const fetchCompany = async () => {
      const data = await getSettings()
      setCompany(data)
    }
    fetchCompany()
  }, [])

  // ✅ Save on typing (auto persist)
  useEffect(() => {
    localStorage.setItem("product_invoice_data", JSON.stringify(invoiceData))
    localStorage.setItem("product_invoice_id", invoiceId)
  }, [invoiceData, invoiceId])

  const handleClearDraft = async () => {


  // remove saved data
  localStorage.removeItem("product_invoice_data")
  localStorage.removeItem("product_invoice_id")

  // reset state
  setInvoiceId(generateInvoiceId())
  setInvoiceData({
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
}
  // ✅ Calculations
  const subtotal = invoiceData.product.reduce((acc, item) => {
    return acc + (Number(item.price) || 0)
  }, 0)

  const gstTotal = invoiceData.product.reduce((acc, item) => {
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

  // ✅ Save + Print
  const handlePrintAndSave = async () => {
    if (!validateForm(formRef.current)) return

    const validProducts = invoiceData.product.filter(
      p => p.productName && p.price > 0
    )

    const valid = await validateProductInvoice(invoiceData, totalAmount)
    if (!valid) return

    const confirm = await showConfirm("Do you want to save this invoice?")
    if (!confirm.isConfirmed) return

    await saveAndPrint({
      invoiceId,
      invoiceType: "product",
      customer: invoiceData.customer,
      product: validProducts,
      price: {
        ...invoiceData.price,
        total: totalAmount,
        due: dueAmount
      }
    })

    await showSuccess("Invoice saved successfully")

    // ✅ Clear storage AFTER success
    localStorage.removeItem("product_invoice_data")
    localStorage.removeItem("product_invoice_id")

    // ✅ Reset state
    setInvoiceId(generateInvoiceId())
    setInvoiceData(getInitialInvoiceData())
  }

  const rows = invoiceData.product.map((item, index) => ({
    title: item.productName,
    subtitle: `Prd:${String(index + 1).padStart(4, "0")}`,
    sub: item.sub,
    amount: item.price
  }))

  if (company === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    )
  }

  return (
    <div className="w-full h-screen">
      <div className="flex items-center justify-between bg-[#DFDFDF99] px-4">
        <Header h1="Product Invoice" para={`#${invoiceId}`} />
         <div className="flex items-end ">
          <div onClick={handleClearDraft} className="px-4 py-2 text-black rounded-md ml-2">
          <Buttons h1="Clear Draft" variant="primary" />
          </div>
        
        <div  className="px-4 py-2 text-black rounded-md ml-2">
          <Buttons h1="Issue Invoice" variant="primary" src2={vectora} />
        </div>
      </div>
</div>
      <form
        className="grid grid-cols-2 w-full h-full"
        ref={formRef}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="w-[90%] space-y-7 p-4 grid">
          <CustomerForm
            data={invoiceData.customer}
            setData={(data) =>
              setInvoiceData(prev => ({ ...prev, customer: data }))
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
              setInvoiceData(prev => ({ ...prev, price: data }))
            }
          />
        </div>

        <div className="w-[110%] h-full grid p-4 sm:-ml-12">
          <Bill
            ref={billRef}
            type="product"
            companyName={company.companyName}
            companyEmail={company.companyEmail}
            companyPhone={company.companyPhone}
            companyAddress={company.companyAddress}
            rows={rows}
            button={<Buttons h1="Product Invoice" variant="primary" />}
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
            taxPercent={effectiveTaxPercent}
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