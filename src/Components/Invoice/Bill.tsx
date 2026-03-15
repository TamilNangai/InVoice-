// // import React from "react"

// // type BillProps = {

// //     data?: any

// //     onPrint: () => void

// //     button?: React.ReactNode

// //     name: string
// //     email: string
// //     phone: number
// //     college: string

// //     invoiceid: string
// //     date: string
// //     duedate: string

// //     type?: "internship" | "service" | "product"


// //     boxhead?: string
// //     boxprogram?: string
// //     batch?: string
// //     duration?: string

// //     boxdate?: string
// //     boxduedate?: string
// //     boxreference?: string

// //     detailhead: string

// //     head11?: string
// //     head12?: string
// //     amount1?: number

// //     head21?: string
// //     head22?: string
// //     amount2?: number

// //     head31?: string
// //     head32?: string
// //     amount3?: number

// //     rows?: {
// //         title: string
// //         subtitle?: string
// //         sub?: string
// //         amount: number
// //     }[]


// //     subamount11: number
// //     subamount12: number
// //     subamount13: number

// //     subamount21: number
// //     subamount22: number
// //     subamount23: number

// //     taxPercent?: number
// //     paymentMethod?: string


// //     conditionPara: string

// // }

// // const Bill: React.FC<BillProps> = ({

// //     button,


// import React, { ReactNode, forwardRef } from "react";
// import Buttons from "../Button/Buttons"

// type BillProps = {

//     head11: string;
//     head12: string;
//     amount1: number;
//     head21: string;
//     head22: string;
//     amount2: number;
//     head31?: string;
//     head32?: string;
//     amount3?: number;
//     subamount11: number;
//     subamount12: number;
//     subamount13: number;
//     subamount21: number;
//     subamount22: number;
//     subamount23: number;
//     conditionPara: string;
//     name: string;
//     email: string;
//     phone: number;
//     college: string;
//     address?: string;
//     invoiceid: string;
//     date: string;
//     duedate: string;
//     boxhead?: string;
//     boxprogram?: string;
//     batch?: string;
//     duration?: string;
//     count1?: string;
//     count2?: string;
//     boxinvoicedate?: string;
//     boxduedate?: string;
//     boxref?: string;
//     detailhead: string;
//     button: ReactNode;
//     data: any;
//     companyName: string;
//     companyEmail: string;
//     companyPhone: string;
//     companyAddress: string;
//     onPrint: () => void;
// };

// const Bill = forwardRef<HTMLDivElement, BillProps>((props, ref) => {


//     const {
//         head11,
//         head12,
//         amount1,
//         head21,
//         head22,
//         amount2,
//         head31,
//         head32,
//         amount3,
//         subamount11,
//         subamount12,
//         subamount13,
//         subamount21,
//         subamount22,
//         subamount23,
//         conditionPara,
//         name,
//         email,
//         phone,
//         college,
//         address,
//         invoiceid,
//         date,
//         duedate,
//         boxhead,
//         boxprogram,
//         batch,
//         duration,
//         count1,
//         count2,
//         boxinvoicedate,
//         boxduedate,
//         boxref,
//         detailhead,
//         button,
//         companyAddress,
//         companyEmail,
//         companyName,
//         companyPhone,
//         onPrint
 

//     onPrint


// }) => {

//   } = props;


//     return (

//         <div
//             ref={ref}
//             className="w-full border border-[#00000040] rounded-xl p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.3)] bg-white"
//         >
//             {/* HEADER */}

//             <div className="flex justify-between items-start">

//                 <div>

//                     <h1 className="font-iceberg text-[32px]">
//                         {companyName}
//                     </h1>

//                     <p className="font-sanchez text-[13px]">
//                         {companyAddress}
//                     </p>

//                     <p className="font-sanchez text-[13px]">
//                         {companyEmail}
//                         {companyPhone}
//                     </p>

//                 </div>

//                 <div>
//                     {button}
//                 </div>

//             </div>



//             <hr className="my-4 border-[#00000040]" />


//             {/* BILL TO */}

//             <div className="flex justify-between">

//                 <div>

//                     <p className="font-iceberg text-[18px] mb-2">
//                         BILL TO
//                     </p>

//                     <p className="font-sanchez text-[18px]">
//                         {name}
//                     </p>

//                     <p className="font-sanchez text-[18px]">
//                         {email}
//                     </p>

//                     <p className="font-sanchez text-[18px]">
//                         +91 {phone}
//                     </p>

//                     <p className="font-sanchez text-[18px]">
//                         {college}
//                     </p>

// =======
//             <section className="w-full p-4 flex justify-between items-start">
//                 <div className="flex flex-col justify-center items-start">
//                     <p className="iceberg-regular mb-2 text-[22px] leading-[100%] text-[#000000]">BILLED TO</p>
//                     <p className="iceberg-regular mb-2 text-[18px] leading-[100%] text-[#000000]">{name} </p>
//                     <p className="sanchez-regular mb-2 text-[14px] leading-[100%] text-[#000000]">{email}</p>
//                     <p className="sanchez-regular mb-2 text-[14px] leading-[100%] text-[#000000]">+91  {phone}</p>
//                     <p className="sanchez-regular mb-2 text-[14px] leading-[100%] text-[#000000]">{address}</p>
//                     <p className="sanchez-regular mb-2 text-[16px] leading-[100%] text-[#000000]">{college}</p>
//                 </div>


//                 <div className="text-right">

//                     <p className="font-iceberg text-[18px]">
//                         Invoice Details
//                     </p>

//                     <p className="font-sanchez text-[18px]">
//                         Invoice #: {invoiceid}
//                     </p>

//                     <p className="font-sanchez text-[18px]">
//                         Date: {date}
//                     </p>

//                     <p className="font-sanchez text-[18px]">
//                         Due Date: {duedate}
//                     </p>

//                 </div>

// <<<<<<< HEAD
// =======
//             <section className="w-full flex flex-col items-end justify-center">
//                 <table className="w-full border-collapse">
//                     <thead>
//                         <tr className="border-b border-[#DFDFDF]">
//                             <th className="p-4 text-left sanchez-regular leading-[100%] text-[20px] text-[#000000]">
//                                 {detailhead}
//                             </th>
//                             <th className="p-4 text-right sanchez-regular leading-[100%] text-[20px] text-[#000000]">
//                                 Amount
//                             </th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         <tr className="border-b border-[#DFDFDF]">
//                             <td className="p-4">
//                                 <div className="flex justify-between items-center">
//                                     <div className="flex flex-col justify-center items-start">
//                                         <p className="iceberg-regular text-[18px] leading-[100%] text-[#000000]">{head11}</p>
//                                         <p className="sanchez-regular text-[14px] mt-[10px] leading-[100%] text-[#000000]">{head12}</p>
//                                     </div>

//                                     {count1 && (
//                                         <div className=" mx-2 flex flex-col justify-center items-start px-3 border-x border-[#000000]">
//                                             <p className="iceberg-regular text-[18px] leading-[100%] text-[#000000] mb-2">Subscription</p>
//                                             <p className="sanchez-regular leading-[100%] text-[14px] text-[#000000]">{count1}</p>
//                                         </div>
//                                     )}
//                                 </div>
//                             </td>

//                             <td className="p-4 text-right sanchez-regular text-[20px] leading-[100%] text-[#000000]">
//                                 {amount1}.00
//                             </td>
//                         </tr>

//                         <tr className="border-b border-[#DFDFDF]">
//                             <td className="p-4">
//                                 <div className="flex justify-between items-center">
//                                     <div className="flex flex-col justify-center items-start">
//                                         <p className="iceberg-regular text-[18px] leading-[100%] text-[#000000]">{head21}</p>
//                                         <p className="sanchez-regular text-[14px] mt-[10px] leading-[100%] text-[#000000]">{head22}</p>
//                                     </div>

//                                     {count2 && (
//                                         <div className=" mx-2 flex flex-col justify-center items-start px-3 border-x border-[#000000]">
//                                             <p className="iceberg-regular text-[18px] leading-[100%] text-[#000000] mb-2">Subscription</p>
//                                             <p className="sanchez-regular leading-[100%] text-[14px] text-[#000000]">{count2}</p>
//                                         </div>
//                                     )}
//                                 </div>
//                             </td>

//                             <td className="p-4 text-right sanchez-regular text-[20px] leading-[100%] text-[#000000]">
//                                 {amount2}.00
//                             </td>
//                         </tr>

//                         {head31 && (
//                             <tr className="border-b border-[#DFDFDF]">
//                                 <td className="p-4">
//                                     <div className="flex flex-col justify-center items-start">
//                                         <p className="iceberg-regular text-[18px] leading-[100%] text-[#000000]">{head31}</p>
//                                         <p className="sanchez-regular text-[14px] mt-[10px] leading-[100%] text-[#000000]">{head32}</p>
//                                     </div>
//                                 </td>

//                                 <td className="p-4 text-right sanchez-regular text-[20px] leading-[100%] text-[#000000]">
//                                     {amount3}.00
//                                 </td>
//                             </tr>
//                         )}

//                         <tr className="border-b border-[#DFDFDF]">
//                             <td colSpan={2} className="p-4">
//                                 <div className="w-[70%] ml-auto flex flex-col justify-center items-center">
//                                     <div className="w-full flex flex-row gap-5 mb-5">
//                                         <p className="w-[70%] flex justify-end items-center sanchez-regular text-[18px] leading-[100%] text-[#666666]">
//                                             Subtotal
//                                         </p>
//                                         <p className="w-[30%] flex justify-end items-center sanchez-regular text-[18px] leading-[100%] text-[#000000]">
//                                             {subamount11}.00
//                                         </p>
//                                     </div>

//                                     <div className="w-full flex flex-row gap-4 mb-5">
//                                         <p className="w-[70%] flex justify-end items-center sanchez-regular text-[18px] leading-[100%] text-[#666666]">
//                                             Discount (Scholarship)
//                                         </p>
//                                         <p className="w-[30%] flex justify-end items-center sanchez-regular text-[18px] leading-[100%] text-[#000000]">
//                                             {subamount12}.00
//                                         </p>
//                                     </div>

//                                     <div className="w-full flex flex-row gap-4 mb-5">
//                                         <p className="w-[70%] flex justify-end items-center sanchez-regular text-[18px] leading-[100%] text-[#666666]">
//                                             GST(18%)
//                                         </p>
//                                         <p className="w-[30%] flex justify-end items-center sanchez-regular text-[18px] leading-[100%] text-[#000000]">
//                                             {subamount13}.00
//                                         </p>
//                                     </div>
//                                 </div>
//                             </td>
//                         </tr>

//                         <tr className="border-b border-[#DFDFDF]">
//                             <td colSpan={2} className="p-4">
//                                 <div className="w-[70%] ml-auto flex flex-col justify-center items-center">
//                                     <div className="w-full flex flex-row gap-5 mb-5">
//                                         <p className="w-[70%] flex justify-end items-center sanchez-regular text-[18px] leading-[100%] text-[#136CED]">
//                                             Total Amount
//                                         </p>
//                                         <p className="w-[30%] flex justify-end items-center sanchez-regular text-[18px] leading-[100%] text-[#136CED]">
//                                             {subamount21}.00
//                                         </p>
//                                     </div>

//                                     <div className="w-full flex flex-row gap-5 mb-5">
//                                         <p className="w-[70%] flex justify-end items-center sanchez-regular text-[18px] leading-[100%] text-[#666666]">
//                                             Paid Amount(Cash)
//                                         </p>
//                                         <p className="w-[30%] flex justify-end items-center sanchez-regular text-[18px] leading-[100%] text-[#000000]">
//                                             {subamount22}.00
//                                         </p>
//                                     </div>

//                                     <div className="w-full flex flex-row gap-5 mb-5">
//                                         <p className="w-[70%] flex justify-end items-center sanchez-regular text-[18px] leading-[100%] text-[#666666]">
//                                             Due Amount
//                                         </p>
//                                         <p className="w-[30%] flex justify-end items-center sanchez-regular text-[18px] leading-[100%] text-[#000000]">
//                                             {subamount23}.00
//                                         </p>
//                                     </div>
//                                 </div>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </section>

//             <div className="w-full pt-4">
//                 <p className="iceberg-regular text-[18px] leading-[100%] text-[#000000] mb-4">Terms & Conditions:</p>
//                 <p className="sanchez-regular text-[14px] leading-[20px] text-[#666666]">{conditionPara}</p>
//             </div>

//             <div className="w-full flex justify-end items-center">
//                 <div onClick={onPrint}>
//                     <Buttons h1="Print" h2="" src1="" src2="" />
//                 </div>
// >>>>>>> 8d94990723274a58e202b2871c5d57e3586f9c95
//             </div>


//             {/* BOX SECTION */}

//             {type === "internship" ? (

//                 <div className="border border-[#00000080] rounded-xl p-4 mt-5">

//                     <p className="font-sanchez text-[18px]">
//                         {boxhead}
//                     </p>

//                     <p className="font-iceberg text-[20px]">
//                         {boxprogram}
//                     </p>

//                     <div className="flex justify-between mt-2">

//                         <p className="font-sanchez text-[14px]">
//                             {batch}
//                         </p>

//                         <p className="font-sanchez text-[14px]">
//                             {duration}
//                         </p>

//                     </div>

//                 </div>

//             ) : (
//                 <div className="mt-5 border border-[#00000080] rounded-xl p-4 flex justify-between text-center">

//                     <div className="w-1/3">
//                         <p className="font-iceberg text-[18px]">Invoice Date</p>
//                         <p className="font-sanchez text-[18px]">{boxdate}</p>
//                     </div>

//                     <div className="w-1/3">
//                         <p className="font-iceberg text-[18px]">Due Date</p>
//                         <p className="font-sanchez text-[18px]">{boxduedate}</p>
//                     </div>

//                     <div className="w-1/3">
//                         <p className="font-iceberg text-[18px]">Reference</p>
//                         <p className="font-sanchez text-[18px]">{boxreference}</p>
//                     </div>

//                 </div>

//             )}


//             {/* DETAILS */}

//             <div className="mt-6">

//                 <div className="flex justify-between border-b pb-2">

//                     <p className="font-sanchez text-[20px]">
//                         {detailhead}
//                     </p>

//                     <p className="font-sanchez text-[20px]">
//                         Amount
//                     </p>

//                 </div>


//                 {/* INTERNSHIP ROWS */}

//                 {type === "internship" && (

//                     <>

//                         <div className="flex justify-between py-4 border-b">

//                             <div>

//                                 <p className="font-iceberg text-[18px]">
//                                     {head11}
//                                 </p>

//                                 <p className="font-sanchez text-[14px] text-gray-500">
//                                     {head12}
//                                 </p>

//                             </div>

//                             <p className="font-sanchez text-[18px]">
//                                 {amount1?.toFixed(2)}
//                             </p>

//                         </div>


//                         <div className="flex justify-between py-4 border-b">

//                             <div>

//                                 <p className="font-iceberg text-[18px]">
//                                     {head21}
//                                 </p>

//                                 <p className="font-sanchez text-[14px] text-gray-500">
//                                     {head22}
//                                 </p>

//                             </div>

//                             <p className="font-sanchez text-[18px]">
//                                 {amount2?.toFixed(2)}
//                             </p>

//                         </div>


//                         <div className="flex justify-between py-4 border-b">

//                             <div>

//                                 <p className="font-iceberg text-[18px]">
//                                     {head31}
//                                 </p>

//                                 <p className="font-sanchez text-[14px] text-gray-500">
//                                     {head32}
//                                 </p>

//                             </div>

//                             <p className="font-sanchez text-[18px]">
//                                 {amount3?.toFixed(2)}
//                             </p>

//                         </div>

//                     </>

//                 )}


//                 {/* SERVICE ROWS */}

//                 {(type === "service" || type === "product") && rows?.map((row, index) => (

//                     <div key={index} className="flex justify-between items-start py-4 border-b">

//                         {/* LEFT SIDE */}
//                         <div className="flex flex-col w-full">

//                             <div className="flex items-center">
//                                 <div className={`${type === "product" ? "w-1/3" : "w-2/3"} flex flex-col justify-center items-start px-3`}>
//                                     {/* Product Name */}
//                                     <p className="font-sanchez text-[18px]">
//                                         {row.title}
//                                     </p>
//                                     {row.subtitle && (
//                                         <p className="font-sanchez text-[14px] text-gray-500 mt-1">
//                                             {row.subtitle}
//                                         </p>
//                                     )}</div>

//                                 {/* Subscription (only for product) */}
//                                 {type === "product" && (
//                                     <div className="w-1/3 mx-2 flex flex-col justify-center items-start px-3 border-x border-[#000000]">
//                                         <p className="font-iceberg text-[18px] leading-[100%] mb-1">
//                                             Subscription
//                                         </p>

//                                         <p className="font-sanchez text-[14px] leading-[100%]">
//                                             {row.sub}
//                                         </p>
//                                     </div>
//                                 )}

//                                 <p className="w-1/3 font-sanchez text-[18px] flex  justify-center items-center ">
//                                     {row.amount.toFixed(2)}
//                                 </p>

//                             </div>

//                         </div>


//                     </div>

//                 ))}


//                 {/* TOTALS */}

//                 <div className="flex flex-col items-end mt-6 space-y-2">

//                     <div className="flex justify-between w-[60%]">
//                         <p className="font-sanchez text-[18px] text-[#666666]">Subtotal</p>
//                         <p className="font-sanchez text-[18px]">{subamount11.toFixed(2)}</p>
//                     </div>

//                     <div className="flex justify-between w-[60%]">
//                         <p className="font-sanchez text-[18px] text-[#666666]">Discount</p>
//                         <p className="font-sanchez text-[18px]">{subamount12.toFixed(2)}</p>
//                     </div>

//                     <div className="flex justify-between w-[60%]">
//                         <p className="font-sanchez text-[18px] text-[#666666]">
//                             GST {taxPercent ? `(${taxPercent}%)` : ""}
//                         </p>

//                         <p className="font-sanchez text-[18px]">{subamount13.toFixed(2)}</p>
//                     </div>

//                     <hr className="w-[100%]" />

//                     <div className="flex justify-between w-[60%]">

//                         <p className="font-sanchez text-[20px] text-[#136CEDCC]">
//                             Total Amount
//                         </p>

//                         <p className="font-sanchez text-[20px] text-[#136CEDCC]">
//                             {subamount21.toFixed(2)}
//                         </p>

//                     </div>


//                     <div className="flex justify-between w-[60%]">
//                         <p className="font-sanchez text-[18px] text-[#666666]">
//                             Paid Amount {paymentMethod ? `(${paymentMethod})` : ""}
//                         </p>

//                         <p className="font-sanchez text-[18px]">{subamount22.toFixed(2)}</p>
//                     </div>

//                     <div className="flex justify-between w-[60%]">
//                         <p className="font-sanchez text-[18px] text-[#666666]">Due Amount</p>
//                         <p className="font-sanchez text-[18px]">{subamount23.toFixed(2)}</p>
//                     </div>

//                 </div>


//                 {/* TERMS */}

//                 <div className="mt-6">

//                     <p className="font-iceberg text-[18px]">
//                         Terms & Conditions:
//                     </p>

//                     <p className="font-sanchez text-[14px] text-gray-500">
//                         {conditionPara}
//                     </p>

//                 </div>


//                 {/* PRINT */}

//                 <div className="flex justify-end mt-6">

//                     <button
//                         onClick={onPrint}
//                         className="bg-[#136CEDCC] text-white font-iceberg px-6 py-2 rounded-md text-[20px]"
//                     >
//                         Print
//                     </button>

//                 </div>

//             </div>
//         </div>
//     );
// });

// Bill.displayName = "Bill";


// export default Bill;