// // // import Header from "@/Components/Nav/Header"
// // // import Customerform from "@/Components/Form/Customerform"
// // // import Bill from '@/Components/Invoice/Bill'
// // // import Priceform from "@/Components/Form/Priceform"
// // // import Buttons from "@/Components/Button/Buttons"
// // // import vectora from "@/assets/Vectora.png"
// // // import Productform from "@/Components/Form/Productform"
// // // const Product_invoice = () => {
// // //   return (
// // //     <section className="w-[1500px]">
// // //       <aside>
// // //         <Header h1="Products Invoice"
// // //           para="Manage Your product catalog and service offerings." />
// // //         <div className="absolute right-10 top-4">
// // //           <Buttons h1="Issue Invoice" h2="Save Draft" src2={vectora} src1="" />
// // //         </div>
// // //       </aside>
// // //       <section className="grid grid-cols-2 grid-rows-10 h-screen">
// // //         <div className="col-start-1 col-end-2 row-start-1 row-end-4 p-4">
// // //           <Customerform />
// // //         </div>
// // //         <div className="col-start-1 col-end-2 row-start-6 row-end-8 p-4 mt-10">
// // //           <Productform />
// // //         </div>
// // //         <div className="col-start-1 col-end-2 row-start-10 row-end-11 p-4 mt-12">
// // //           <Priceform  />
// // //         </div>
// // //         <div className='col-start-2 col-end-3 row-start-1 row-end-11 p-2'>
// // //           <Bill button={<Buttons src1="" src2="" h1="Product Invoice" h2="" />} name="Akash " email="akash@gmail.com" phone={8525913433} college="State University of Technology" invoiceid="INV-2026-001" date="JAN 24, 2026" duedate="Feb 24, 2026" boxinvoicedate='Jan 20,2026' boxduedate='Feb 20,2026' boxref='Po-12345' detailhead='Product Details' head11="Report Management" head12="Prd:0015" amount1={100000.00} head21="Hall Management" head22="Prd:0012" amount2={200000.00} count1="2M" count2="2M" subamount11={30000.00} subamount12={0.00} subamount13={50.00} subamount21={30050.00} subamount22={50.00} subamount23={500.00} conditionPara="Payment is due within 7 days of invoice issuance, Fees are non-refundable once the internship program has commenced." />
// // //         </div>
// // //       </section>
// // //     </section>
// // //   )
// // // }
// // // export default Product_invoice
// // // 


// // import { useState } from "react"
// // import Header from "@/Components/Nav/Header"
// // import Customerform from "@/Components/Form/Customerform"
// // import Productform from "@/Components/Form/Productform"
// // import Priceform from "@/Components/Form/Priceform"
// // import Bill from "@/Components/Invoice/Bill"
// // import Buttons from "@/Components/Button/Buttons"
// // import vectora from "@/assets/Vectora.png"
// // import { saveInvoice } from "@/utils/SaveInvoice"

// // type InvoiceData = {
// //   customers: {
// //     customer: string
// //     email: string
// //     phone: string
// //     office: string
// //     gst: string
// //     address: string
// //   }

// //   product: {
// //     product1: string
// //     code1: string
// //     product2: string
// //     code2: string
// //     count1: string
// //     count2: string
// //     amount1: number
// //     amount2: number
// //   }

// //   price: {
// //     total: string
// //     due: string
// //     paid: string
// //     duedate: string
// //     paymentMethod: string
// //   }
// // }

// // const Product_invoice = () => {

// //   const [invoiceData, setInvoiceData] = useState<InvoiceData>({

// //     customers: {
// //       customer: "",
// //       email: "",
// //       phone: "",
// //       office: "",
// //       gst: "",
// //       address: ""
// //     },

// //     product: {
// //       product1: "",
// //       code1: "",
// //       product2: "",
// //       code2: "",
// //       count1: "",
// //       count2: "",
// //       amount1: 0,
// //       amount2: 0
// //     },

// //     price: {
// //       total: "",
// //       due: "",
// //       paid: "",
// //       duedate: "",
// //       paymentMethod: ""
// //     }

// //   })

// //   const handlePrintAndSave = async () => {

// //     console.log("Invoice Data:", invoiceData)

// //     await saveInvoice({
// //       invoiceType: "product",
// //       customer: invoiceData.customers,
// //       product: invoiceData.product,
// //       price: invoiceData.price
// //     })

// //     window.print()
// //   }

// //   return (

// //     <section className="w-[1500px]">

// //       <aside>

// //         <Header
// //           h1="Products Invoice"
// //           para="Manage Your product catalog and service offerings."
// //         />

// //         <div className="absolute right-10 top-4">
// //           <Buttons
// //             h1="Issue Invoice"
// //             h2="Save Draft"
// //             src2={vectora}
// //             src1=""
// //           />
// //         </div>

// //       </aside>


// //       <section className="flex">

// //          {/* LEFT SIDE */}

// //         <div className="w-[50%] space-y-7 p-4">

// //           <Customerform
// //             data={invoiceData.customers}
// //             setData={(data) => setInvoiceData(prev => ({ ...prev, customer: data }))}
// //           />

// //           {/* <Productform
// //             data={invoiceData.product}
// //             setData={(data) => setInvoiceData(prev => ({ ...prev, product: data }))}
// //           /> */}



// //           <Priceform
// //             data={invoiceData.price}
// //             setData={(data) => setInvoiceData(prev => ({ ...prev, price: data }))}
// //           />

// //         </div>

// //         <div className="w-[50%] p-4">

// //           <Bill

// //             data={invoiceData}

// //             onPrint={handlePrintAndSave}

// //             button={<Buttons src1="" src2="" h1="Product Invoice" h2="" />}

// //             name={invoiceData.customers.customer}
// //             email={invoiceData.customers.email}
// //             phone={Number(invoiceData.customers.phone)}
// //             address={invoiceData.customers.address}
// //             college={invoiceData.customers.office}


// //             invoiceid="INV-2026-001"
// //             date={new Date().toLocaleDateString()}
// //             duedate={invoiceData.price.duedate}

// //             boxinvoicedate={new Date().toLocaleDateString()}
// //             boxduedate={invoiceData.price.duedate}
// //             boxref="PO-12345"

// //             detailhead="Product Details"

// //             head11={invoiceData.product.product1}
// //             head12={invoiceData.product.code1}
// //             amount1={invoiceData.product.amount1}

// //             head21={invoiceData.product.product2}
// //             head22={invoiceData.product.code2}
// //             amount2={invoiceData.product.amount2}

// //             count1={invoiceData.product.count1}
// //             count2={invoiceData.product.count2}

// //             subamount11={Number(invoiceData.price.total)}
// //             subamount12={0}
// //             subamount13={Number(invoiceData.customers.gst)}


// //             subamount21={Number(invoiceData.price.total)}
// //             subamount22={Number(invoiceData.price.paid)}
// //             subamount23={Number(invoiceData.price.due)}

// //             conditionPara="Payment is due within 7 days of invoice issuance."

// //           />

// //         </div>

// //       </section>

// //     </section>

// //   )

// // }

// // export default Product_invoice

// // import { useState } from "react"
// // import Header from "@/Components/Nav/Header"
// // import Customerform from "@/Components/Form/Customerform"
// // import Productform from "@/Components/Form/Productform"
// // import Priceform from "@/Components/Form/Priceform"
// // import Bill from "@/Components/Invoice/Bill"
// // import Buttons from "@/Components/Button/Buttons"
// // import vectora from "@/assets/Vectora.png"
// // import { saveInvoice } from "@/utils/SaveInvoice"

// // type Product = {
// //   productName: string
// //   sub: string
// //   price: number
// //   tax: number
// // }

// // type InvoiceData = {
// //   customers: {
// //     customer: string
// //     email: string
// //     phone: string
// //     office: string
// //     gst: string
// //     address: string
// //   }

// //   product: Product[]

// //   price: {
// //     total: string
// //     due: string
// //     paid: string
// //     duedate: string
// //     paymentMethod: string
// //   }
// // }

// // const Product_invoice = () => {

// //   const [invoiceData, setInvoiceData] = useState<InvoiceData>({

// //     customers: {
// //       customer: "",
// //       email: "",
// //       phone: "",
// //       office: "",
// //       gst: "",
// //       address: ""
// //     },

// //     product: [
// //       {
// //         productName: "",
// //         sub: "1M",
// //         price: 0,
// //         tax: 18
// //       }
// //     ],

// //     price: {
// //       total: "",
// //       due: "",
// //       paid: "",
// //       duedate: "",
// //       paymentMethod: ""
// //     }

// //   })


// //   const handlePrintAndSave = async () => {

// //     console.log("Invoice Data:", invoiceData)

// //     await saveInvoice({
// //       invoiceType: "product",
// //       customer: invoiceData.customers,
// //       product: invoiceData.product,
// //       price: invoiceData.price
// //     })

// //     window.print()
// //   }

// //   return (

// //     <section className="w-[1500px]">

// //       <aside>

// //         <Header
// //           h1="Products Invoice"
// //           para="Manage Your product catalog and service offerings."
// //         />

// //         <div className="absolute right-10 top-4">
// //           <Buttons
// //             h1="Issue Invoice"
// //             h2="Save Draft"
// //             src2={vectora}
// //             src1=""
// //           />
// //         </div>

// //       </aside>


// //       <section className="flex">

// //         {/* LEFT SIDE */}

// //         <div className="w-[50%] space-y-7 p-4">

// //           <Customerform
// //             data={invoiceData.customers}
// //             setData={(data) =>
// //               setInvoiceData(prev => ({
// //                 ...prev,
// //                 customers: data
// //               }))
// //             }
// //           />

// //           <Productform
// //             data={invoiceData.product}
// //             setData={(data) =>
// //               setInvoiceData(prev => ({
// //                 ...prev,
// //                 product: data
// //               }))
// //             }
// //           />

// //           <Priceform
// //             data={invoiceData.price}
// //             setData={(data) =>
// //               setInvoiceData(prev => ({
// //                 ...prev,
// //                 price: data
// //               }))
// //             }
// //           />

// //         </div>


// //         {/* RIGHT SIDE */}

// //         <div className="w-[50%] p-4">

// //           <Bill

// //             data={invoiceData}

// //             onPrint={handlePrintAndSave}

// //             button={<Buttons src1="" src2="" h1="Product Invoice" h2="" />}

// //             name={invoiceData.customers.customer}
// //             email={invoiceData.customers.email}
// //             phone={Number(invoiceData.customers.phone)}
// //             address={invoiceData.customers.address}
// //             college={invoiceData.customers.office}

// //             invoiceid="INV-2026-001"
// //             date={new Date().toLocaleDateString()}
// //             duedate={invoiceData.price.duedate}

// //             boxinvoicedate={new Date().toLocaleDateString()}
// //             boxduedate={invoiceData.price.duedate}
// //             boxref="PO-12345"

// //             detailhead="Product Details"

// //             head11={invoiceData.product[0]?.productName || ""}
// //             head12="PRD-001"
// //             amount1={invoiceData.product[0]?.price || 0}

// //             head21={invoiceData.product[1]?.productName || ""}
// //             head22="PRD-002"
// //             amount2={invoiceData.product[1]?.price || 0}

// //             count1={invoiceData.product[0]?.sub || ""}
// //             count2={invoiceData.product[1]?.sub || ""}

// //             subamount11={Number(invoiceData.price.total)}
// //             subamount12={0}
// //             subamount13={Number(invoiceData.customers.gst)}

// //             subamount21={Number(invoiceData.price.total)}
// //             subamount22={Number(invoiceData.price.paid)}
// //             subamount23={Number(invoiceData.price.due)}

// //             conditionPara="Payment is due within 7 days of invoice issuance."

// //           />

// //         </div>

// //       </section>

// //     </section>

// //   )

// // }

// // export default Product_invoice



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
//   customers: Customer
//   product: Product[]
//   price: Price
// }

// const Product_invoice = () => {

//   const [invoiceData, setInvoiceData] = useState<InvoiceData>({
//     customers: {
//       customer: "",
//       email: "",
//       phone: "",
//       office: "",
//       gst: "",
//       address: ""
//     },

//     product: [
//       {
//         productName: "",
//         sub: "1M",
//         price: 0,
//         tax: 18
//       }
//     ],

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
//       customers: invoiceData.customers,
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
//             data={invoiceData.customers}
//             setData={(data: Customer) =>
//               setInvoiceData(prev => ({
//                 ...prev,
//                 customers: data
//               }))
//             }
//           />

//           <Productform
//             data={invoiceData.product}
//             setData={(data: Product[]) =>
//               setInvoiceData(prev => ({
//                 ...prev,
//                 product: data
//               }))
//             }
//           />

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

//             name={invoiceData.customers.customer}
//             email={invoiceData.customers.email}
//             phone={Number(invoiceData.customers.phone)}
//             address={invoiceData.customers.address}
//             college={invoiceData.customers.office}

//             invoiceid="INV-2026-001"
//             date={new Date().toLocaleDateString()}
//             duedate={invoiceData.price.duedate}

//             boxinvoicedate={new Date().toLocaleDateString()}
//             boxduedate={invoiceData.price.duedate}
//             boxref="PO-12345"

//             detailhead="Product Details"

//             head11={invoiceData.product[0]?.productName || ""}
//             head12="PRD-001"
//             amount1={invoiceData.product[0]?.price || 0}

//             head21={invoiceData.product[1]?.productName || ""}
//             head22="PRD-002"
//             amount2={invoiceData.product[1]?.price || 0}

//             count1={invoiceData.product[0]?.sub || ""}
//             count2={invoiceData.product[1]?.sub || ""}

//             subamount11={Number(invoiceData.price.total)}
//             subamount12={0}
//             subamount13={Number(invoiceData.customers.gst)}

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
