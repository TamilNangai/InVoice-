// // import Header from "@/Components/Nav/Header"
// // import CustomerForm from "@/Components/Form/Customerform"
// // import Bill from '@/Components/Invoice/Bill'
// // import Priceform from "@/Components/Form/Priceform"
// // import Productform from "@/Components/Form/Productform"
// // import Buttons from "@/Components/Button/Buttons"
// // import vectora from "@/assets/Vectora.png"

// // const Service_invoice = () => {

// //   return (
// //     <section className="w-[1500px]">
// //       <aside>
// //         <Header h1="Products Invoice"
// //           para="Manage Your product catalog and service offerings." />
// //         <div className="absolute right-10 top-4">
// //           <Buttons h1="Issue Invoice" h2="Save Draft" src2={vectora} src1="" />
// //         </div>
// //       </aside>
// //       <section className="grid grid-cols-2 grid-rows-10 h-screen">
// //         <div className="col-start-1 col-end-2 row-start-1 row-end-4 p-4">
// //           <CustomerForm />
// //         </div>
// //         <div className="col-start-1 col-end-2 row-start-6 row-end-8 p-4 mt-10">
// //           <Productform />
// //         </div>
// //         <div className="col-start-1 col-end-2 row-start-10 row-end-11 p-4 mt-12">
// //           <Priceform />
// //         </div>
// //         <div className='col-start-2 col-end-3 row-start-1 row-end-11 p-2'>
// //           {/* <Bill button={<Buttons h1="Product Invoice" h2="" src1="" src2="" />} name="Akash " email="akash@gmail.com" phone={8525913433} college="State University of Technology" invoiceid="INV-2026-001" date="JAN 24, 2026" duedate="Feb 24, 2026" boxinvoicedate='Jan 20,2026' boxduedate='Feb 20,2026' boxref='Po-12345' detailhead='Product Details' head11="Report Management" head12="Prd:0015" amount1={100000.00} head21="Hall Management" head22="Prd:0012" amount2={200000.00} count1="2M" count2="2M" subamount11={30000.00} subamount12={0.00} subamount13={50.00} subamount21={30050.00} subamount22={50.00} subamount23={500.00} conditionPara="Payment is due within 7 days of invoice issuance, Fees are non-refundable once the internship program has commenced." /> */}
// //           <Bill button={<Buttons h1="Service Invoice" h2="" src1="" src2="" />} name="Akash " email="akash@gmail.com" phone={8525913433} college="State University of Technology" invoiceid="INV-2026-001" date="JAN 24, 2026" duedate="Feb 24, 2026" boxinvoicedate='Jan 20,2026' boxduedate='Feb 20,2026' boxref='Po-12345' detailhead='Service Details' head11="Static Website" head12="Srv:0010" amount1={10000.00} head21="Dynamic Website" head22="Srv:0011" amount2={20000.00} subamount11={30000.00} subamount12={0.00} subamount13={50.00} subamount21={30050.00} subamount22={50.00} subamount23={500.00} conditionPara="Thank you for your business. Please remit payment within 30 das" />
// //         </div>
// //       </section>
// //     </section>
// //   )
// // }

// // export default Service_invoice;









// import { useState } from "react"
// import Header from "@/Components/Nav/Header"
// import Customerform from "@/Components/Form/Customerform"
// import Productform from "@/Components/Form/Productform"
// import Priceform from "@/Components/Form/Priceform"
// import Bill from "@/Components/Invoice/Bill"
// import Buttons from "@/Components/Button/Buttons"
// import vectora from "@/assets/Vectora.png"

// type InvoiceData = {

//   customer: {
//     customer: string
//     email: string
//     office: string
//     gst: string
//     phone: string
//     address: string
//   }

//   product: {
//     service1: string
//     code1: string
//     amount1: number

//     service2: string
//     code2: string
//     amount2: number
//   }

//   price: {
//     total: string
//     due: string
//     paid: string
//     duedate: string
//     paymentMethod: string
//   }
// }

// const Service_invoice = () => {

//   const [invoiceData, setInvoiceData] = useState<InvoiceData>({
//     customer: {
//       customer: "",
//       email: "",
//       office: "",
//       gst: "",
//       phone: "",
//       address: ""
//     },

//     product: {
//       service1: "",
//       code1: "",
//       amount1: 0,
//       service2: "",
//       code2: "",
//       amount2: 0
//     },

//     price: {
//       total: "",
//       due: "",
//       paid: "",
//       duedate: "",
//       paymentMethod: ""
//     }
//   })


//   const handlePrint = () => {
//     console.log(invoiceData)
//     window.print()
//   }

//   return (
//     <section className="w-[1500px]">

//       <aside>

//         <Header
//           h1="Products Invoice"
//           para="Manage Your product catalog and service offerings."
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

//         <div className="w-[50%] space-y-7 p-4">

//           <Customerform
//             data={invoiceData.customer} setData={(data) =>
//               setInvoiceData(prev => ({ ...prev, customer: data }))
//             }
//           />

//           {/* <Productform
//         data={invoiceData.product} setData={(data)=>
//           setInvoiceData(prev => ({...prev,product:data}))
//         }
//       /> */}

//           <Priceform
//             data={invoiceData.price}
//             setData={(data) => setInvoiceData(prev => ({ ...prev, price: data }))}
//           />

//         </div>


//         {/* RIGHT SIDE BILL */}

//         <div className="w-[50%] p-4">

//           <Bill

//             data={invoiceData}
//             onPrint={handlePrint}

//             button={<Buttons h1="Service Invoice" h2="" src1="" src2="" />}

//             name={invoiceData.customer.customer}
//             email={invoiceData.customer.email}
//             phone={Number(invoiceData.customer.phone)}
//             college={invoiceData.customer.office}

//             invoiceid="INV-2026-001"
//             date={new Date().toDateString()}
//             duedate={invoiceData.price.duedate}

//             detailhead="Service Details"

//             head11={invoiceData.product.service1}
//             head12={invoiceData.product.code1}
//             amount1={invoiceData.product.amount1}

//             head21={invoiceData.product.service2}
//             head22={invoiceData.product.code2}
//             amount2={invoiceData.product.amount2}

//             // subamount11={invoiceData.price.subtotal}
//             // subamount12={invoiceData.price.discount}
//             // subamount13={invoiceData.price.tax}

//             // subamount21={invoiceData.price.total}
//             // subamount22={invoiceData.price.paid}
//             // subamount23={invoiceData.price.due}

//             conditionPara="Thank you for your business. Please remit payment within 30 days."

//           />

//         </div>

//       </section>

//     </section>
//   )
// }

// export default Service_invoice

