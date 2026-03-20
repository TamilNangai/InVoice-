// import { useRef, useState } from "react"
// import html2canvas from "html2canvas"

// import Header from "@/Components/Nav/Header"
// import Radiogroup from "@/Components/Nav/Radiogroup"
// import Cards from "@/Components/Cards/Cards"
// import Revenue from "@/Components/Cards/Revenue"
// import ex from "@/assets/ex.png"
// import Reporttable from "@/Components/Table/Reporttable"

// const Reports = () => {

//   const captureRef = useRef<HTMLDivElement>(null)
//   const [image, setImage] = useState<string | null>(null)

//   const handleExport = async () => {
//     if (!captureRef.current) return

//     const canvas = await html2canvas(captureRef.current, {
//       scale: 2,
//       useCORS: true
//     })

//     const imgData = canvas.toDataURL("image/png")
//     setImage(imgData)
//   }

//   return (
//     <div className="w-full h-screen overflow-auto">

//       {/* HEADER */}
//       <div className="flex items-center justify-between bg-[#DFDFDF99] px-4">
//         <Header
//           h1="Products & Inverntory"
//           para="Manage Your product catalog and service offerings."
//         />

//         <div>
//           <button
//             onClick={handleExport}
//             className="flex items-center gap-2 font-iceberg text-2xl text-black px-5 py-2 rounded-lg border-2 border-black"
//           >
//             <img className="h-8" src={ex} />
//             Export Data

//           </button>
//         </div>
//       </div>

//       <div className="w-full pl-10">
//         <Radiogroup />

//         <div ref={captureRef}>
//           {/* <div className="w-[50%] m-5 grid grid-cols-2 ..." ref={captureRef}> */}
//           <div className="w-full flex justify-center items-center">

//             {/* CARDS */}
//             <div className="w-[50%] m-5 grid grid-cols-2 gap-[30px] place-items-center">
//               <Cards head="Total Revenue" amount={50000.00} para="+15.% from last month" cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#34C759]" />
//               <Cards head="Paid Invoice" amount={145} para="90% Collection rate" cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#34C759]" />
//               <Cards head="Pending Amount" amount={50000.00} para="10 Invoice pending" cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#FFCC00]" />
//               <Cards head="Overdue" amount={20000.00} para="3 invoice overdue" cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#FF383C]" />
//             </div>

//             {/* CHART */}
//             <div className="w-[50%] mr-10 pl-3">
//               <Revenue />
//             </div>

//           </div>

//         </div>
//       </div>

//       {/* TABLE */}
//       <div className="mx-5 pl-5">
//         <Reporttable />
//       </div>

//       {/* 🔥 IMAGE PREVIEW */}
//       {image && (
//         <div className="p-4">
//           <h2 className="text-lg font-bold mb-2">Preview</h2>
//           <img src={image} alt="Cards Preview" className="border rounded shadow" />
//         </div>
//       )}

//     </div>
//   )
// }

// export default Reports




// import { useRef } from "react"
// import html2canvas from "html2canvas"
// import { jsPDF } from "jspdf"

// import Header from "@/Components/Nav/Header"
// import Radiogroup from "@/Components/Nav/Radiogroup"
// import Cards from "@/Components/Cards/Cards"
// import Revenue from "@/Components/Cards/Revenue"
// import ex from "@/assets/ex.png"
// import Reporttable from "@/Components/Table/Reporttable"

// const Reports = () => {

//   const captureRef = useRef<HTMLDivElement>(null)

//   const handleExport = async () => {
//     if (!captureRef.current) return

//     // 🔥 Capture full UI
//     const canvas = await html2canvas(captureRef.current, {
//       scale: 2,
//       useCORS: true,
//     })

//     const imgData = canvas.toDataURL("image/png")

//     // 🔥 Create PDF
//     const pdf = new jsPDF("p", "mm", "a4")

//     const imgWidth = 210
//     const pageHeight = 297

//     const imgHeight = (canvas.height * imgWidth) / canvas.width
//     let heightLeft = imgHeight

//     let position = 0

//     // 🔥 First page
//     pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
//     heightLeft -= pageHeight

//     // 🔥 Extra pages if content is long
//     while (heightLeft > 0) {
//       position = heightLeft - imgHeight
//       pdf.addPage()
//       pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
//       heightLeft -= pageHeight
//     }

//     pdf.save("Reports.pdf")
//   }

//   return (
//     <div className="w-full h-screen overflow-auto">

//       {/* HEADER */}
//       <div className="flex items-center justify-between bg-[#DFDFDF99] px-4">
//         <Header
//           h1="Reports & Analytics"
//           para="Track revenue, growth, and invoice performance."
//         />

//         <button
//           onClick={handleExport}
//           className="flex items-center gap-2 font-iceberg text-2xl text-black px-5 py-2 rounded-lg border-2 border-black"
//         >
//           <img className="h-8" src={ex} />
//           Export Data
//         </button>
//       </div>

//       <div className="w-full pl-10">
//         <Radiogroup />

//         {/* 🔥 CAPTURE AREA */}
//         <div ref={captureRef}>

//           <div className="w-full flex justify-center items-center">

//             {/* CARDS */}
//             <div className="w-[50%] m-5 grid grid-cols-2 gap-[30px] place-items-center">
//               <Cards head="Total Revenue" amount={50000.00} para="+15.% from last month" cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#34C759]" />
//               <Cards head="Paid Invoice" amount={145} para="90% Collection rate" cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#34C759]" />
//               <Cards head="Pending Amount" amount={50000.00} para="10 Invoice pending" cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#FFCC00]" />
//               <Cards head="Overdue" amount={20000.00} para="3 invoice overdue" cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#FF383C]" />
//             </div>

//             {/* CHART */}
//             <div className="w-[50%] mr-10 pl-3">
//               <Revenue />
//             </div>

//           </div>

//           {/* 🔥 INCLUDE TABLE INSIDE CAPTURE */}
//           <div className="mx-5 pl-5">
//             <Reporttable />
//           </div>

//         </div>
//       </div>

//     </div>
//   )
// }

// export default Reports























// import { useRef, useState } from "react"
// import html2canvas from "html2canvas"

// import Header from "@/Components/Nav/Header"
// import Radiogroup from "@/Components/Nav/Radiogroup"
// import Cards from "@/Components/Cards/Cards"
// import Revenue from "@/Components/Cards/Revenue"
// import ex from "@/assets/ex.png"
// import Reporttable from "@/Components/Table/Reporttable"

// const Reports = () => {
//   const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" })

//   const pageWidth = 595 // A4 width
//   const margin = 40
//   const cardWidth = (pageWidth - margin * 2 - 20) / 2 // 2 cards per row
//   const cardHeight = 120
//   const gap = 20

//   let yOffset = 40

//   topics.forEach((topic) => {
//     // 🔥 PAGE BREAK CHECK FOR TITLE
//     if (yOffset > 750) {
//       pdf.addPage()
//       yOffset = 40
//     }

//     // 🔹 TITLE
//     pdf.setFontSize(20)
//     pdf.text(topic.title, margin, yOffset)
//     yOffset += 25

//     let xOffset = margin

//     topic.cards.forEach((card, index) => {
//       // 🔥 PAGE BREAK CHECK FOR CARDS
//       if (yOffset + cardHeight > 800) {
//         pdf.addPage()
//         yOffset = 40
//         xOffset = margin
//       }

//       // 🔲 CARD BOX
//       pdf.setFillColor(255, 255, 255)
//       pdf.setDrawColor(0)
//       pdf.rect(xOffset, yOffset, cardWidth, cardHeight, "FD")

//       // 📝 TEXT
//       pdf.setFontSize(14)
//       pdf.text(card.head, xOffset + 10, yOffset + 20)

//       pdf.setFontSize(16)
//       pdf.text(`${card.symbol || "$"}${card.amount}`, xOffset + 10, yOffset + 50)

//       if (card.para) {
//         pdf.setFontSize(12)
//         pdf.text(card.para, xOffset + 10, yOffset + 80)
//       }

//       // ➡️ POSITION LOGIC
//       if (index % 2 === 0) {
//         xOffset += cardWidth + gap
//       } else {
//         xOffset = margin
//         yOffset += cardHeight + gap
//       }
//     })

//     // 🔽 SPACE AFTER EACH TOPIC
//     yOffset += gap
//   })

//   // 🔥 FINAL REVENUE SECTION
//   if (yOffset > 700) {
//     pdf.addPage()
//     yOffset = 40
//   }

//   pdf.setFontSize(20)
//   pdf.text("Revenue Summary", margin, yOffset)

//   yOffset += 20

//   pdf.rect(margin, yOffset, pageWidth - margin * 2, 150, "FD")

//   pdf.setFontSize(14)
//   pdf.text("Revenue Breakdown / Chart Area", margin + 10, yOffset + 30)

//   // 💾 SAVE
//   pdf.save("report.pdf")
// }
//   return (
//     <div className="w-full h-screen overflow-auto">

//       {/* HEADER */}
//       <div className="flex items-center justify-between bg-[#DFDFDF99] px-4">
//         <Header
//           h1="Products & Inverntory"
//           para="Manage Your product catalog and service offerings."
//         />

//         <div>
//           <button
//             onClick={handleExport}
//             className="flex items-center gap-2 font-iceberg text-2xl text-black px-5 py-2 rounded-lg border-2 border-black"
//           >
//             <img className="h-8" src={ex} />
//             Export Data

//           </button>
//         </div>
//       </div>

//       <div className="w-full pl-10">
//         <Radiogroup />

//         <div ref={captureRef}>
//           {/* <div className="w-[50%] m-5 grid grid-cols-2 ..." ref={captureRef}> */}
//           <div className="w-full flex justify-center items-center">

//             {/* CARDS */}
//             <div className="w-[50%] m-5 grid grid-cols-2 gap-[30px] place-items-center">
//               <Cards head="Total Revenue" amount={50000.00} para="+15.% from last month" cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#34C759]" />
//               <Cards head="Paid Invoice" amount={145} para="90% Collection rate" cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#34C759]" />
//               <Cards head="Pending Amount" amount={50000.00} para="10 Invoice pending" cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#FFCC00]" />
//               <Cards head="Overdue" amount={20000.00} para="3 invoice overdue" cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#FF383C]" />
//             </div>

//             {/* CHART */}
//             <div className="w-[50%] mr-10 pl-3">
//               <Revenue />
//             </div>

//           </div>

//         </div>
//       </div>

//       {/* TABLE */}
//       <div className="mx-5 pl-5">
//         <Reporttable />
//       </div>

//       {/* 🔥 IMAGE PREVIEW */}
//       {image && (
//         <div className="p-4">
//           <h2 className="text-lg font-bold mb-2">Preview</h2>
//           <img src={image} alt="Cards Preview" className="border rounded shadow" />
//         </div>
//       )}

//     </div>
//   )
// }

// export default Reports










// import { useRef } from "react"
// import html2canvas from "html2canvas"
// import { jsPDF } from "jspdf"

// import Header from "@/Components/Nav/Header"
// import Radiogroup from "@/Components/Nav/Radiogroup"
// import Cards from "@/Components/Cards/Cards"
// import Revenue from "@/Components/Cards/Revenue"
// import ex from "@/assets/ex.png"
// import Reporttable from "@/Components/Table/Reporttable"

// const Reports = () => {

//   const captureRef = useRef<HTMLDivElement>(null)

//   // 🔥 ALL SECTIONS DATA
//   const sections = [
//     {
//       title: "Overall Revenue",
//       cards: [
//         { title: "Total Revenue", value: 50000 },
//         { title: "Paid Invoice", value: 145 },
//         { title: "Pending Amount", value: 50000 },
//         { title: "Overdue", value: 20000 },
//       ],
//     },
//     {
//       title: "Internship Revenue",
//       cards: [
//         { title: "Total Revenue", value: 30000 },
//         { title: "Paid Invoice", value: 90 },
//         { title: "Pending Amount", value: 10000 },
//         { title: "Overdue", value: 5000 },
//       ],
//     },
//     {
//       title: "Product Sales",
//       cards: [
//         { title: "Total Revenue", value: 70000 },
//         { title: "Paid Invoice", value: 200 },
//         { title: "Pending Amount", value: 20000 },
//         { title: "Overdue", value: 10000 },
//       ],
//     },
//     {
//       title: "Other Invoice",
//       cards: [
//         { title: "Total Revenue", value: 10000 },
//         { title: "Paid Invoice", value: 30 },
//         { title: "Pending Amount", value: 5000 },
//         { title: "Overdue", value: 2000 },
//       ],
//     },
//   ]

//   // 🔥 EXPORT FUNCTION
//   const handleExport = async () => {
//     if (!captureRef.current) return

//     const canvas = await html2canvas(captureRef.current, {
//       scale: 2,
//       useCORS: true,
//     })

//     const imgData = canvas.toDataURL("image/png")

//     const pdf = new jsPDF("p", "mm", "a4")

//     const imgWidth = 210
//     const pageHeight = 297
//     const imgHeight = (canvas.height * imgWidth) / canvas.width

//     let heightLeft = imgHeight
//     let position = 0

//     pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
//     heightLeft -= pageHeight

//     while (heightLeft > 0) {
//       position = heightLeft - imgHeight
//       pdf.addPage()
//       pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
//       heightLeft -= pageHeight
//     }

//     pdf.save("Reports.pdf")
//   }

//   return (
//     <div className="w-full h-screen overflow-auto">

//       {/* HEADER */}
//       <div className="flex items-center justify-between bg-[#DFDFDF99] px-4">
//         <Header
//           h1="Reports & Analytics"
//           para="Track revenue, growth, and invoice performance."
//         />

//         <button
//           onClick={handleExport}
//           className="flex items-center gap-2 font-iceberg text-2xl text-black px-5 py-2 rounded-lg border-2 border-black"
//         >
//           <img className="h-8" src={ex} />
//           Export Data
//         </button>
//       </div>

//       {/* 🔥 NORMAL UI (VISIBLE) */}
//       <div className="w-full pl-10">
//         <Radiogroup />

//         <div className="w-full flex justify-center items-center">
//           <div className="w-[50%] m-5 grid grid-cols-2 gap-[30px] place-items-center">
//             <Cards head="Total Revenue" amount={50000} para="+15% from last month" />
//             <Cards head="Paid Invoice" amount={145} para="90% Collection rate" />
//             <Cards head="Pending Amount" amount={50000} para="10 Invoice pending" />
//             <Cards head="Overdue" amount={20000} para="3 invoice overdue" />
//           </div>

//           <div className="w-[50%] mr-10 pl-3">
//             <Revenue />
//           </div>
//         </div>

//         <div className="mx-5 pl-5">
//           <Reporttable />
//         </div>
//       </div>

//       {/* 🔥 HIDDEN EXPORT LAYOUT */}
//       <div
//         ref={captureRef}
//         className="bg-white p-5"
//         style={{ position: "absolute", left: "-9999px", top: 0 }}
//       >
//         {sections.map((section, i) => (
//           <div key={i} className="mb-10">

//             {/* Heading */}
//             <h2 className="text-2xl font-bold mb-4">{section.title}</h2>

//             {/* Cards */}
//             <div className="grid grid-cols-2 gap-6">
//               {section.cards.map((card, idx) => (
//                 <Cards
//                   key={idx}
//                   head={card.title}
//                   amount={card.value}
//                   para=""
//                 />
//               ))}
//             </div>

//           </div>
//         ))}

//         {/* Big Chart */}
//         <div className="mt-10">
//           <h2 className="text-2xl font-bold mb-4">Revenue by Type</h2>
//           <Revenue />
//         </div>

//         {/* Table */}
//         <div className="mt-10">
//           <Reporttable />
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Reports



// import { useRef } from "react"
// import html2canvas from "html2canvas"
// import { jsPDF } from "jspdf"

// import Header from "@/Components/Nav/Header"
// import Radiogroup from "@/Components/Nav/Radiogroup"
// import Cards from "@/Components/Cards/Cards"
// import Revenue from "@/Components/Cards/Revenue"
// import ex from "@/assets/ex.png"

// const Reports = () => {

//   const captureRef = useRef<HTMLDivElement>(null)

//   // 🔥 ALL SECTIONS DATA
//   const sections = [
//     {
//       title: "Overall Revenue",
//       cards: [
//         { title: "Total Revenue", value: 50000 },
//         { title: "Paid Invoice", value: 145 },
//         { title: "Pending Amount", value: 50000 },
//         { title: "Overdue", value: 20000 },
//       ],
//     },
//     {
//       title: "Internship Revenue",
//       cards: [
//         { title: "Total Revenue", value: 30000 },
//         { title: "Paid Invoice", value: 90 },
//         { title: "Pending Amount", value: 10000 },
//         { title: "Overdue", value: 5000 },
//       ],
//     },
//     {
//       title: "Product Sales",
//       cards: [
//         { title: "Total Revenue", value: 70000 },
//         { title: "Paid Invoice", value: 200 },
//         { title: "Pending Amount", value: 20000 },
//         { title: "Overdue", value: 10000 },
//       ],
//     },
//     {
//       title: "Other Invoice",
//       cards: [
//         { title: "Total Revenue", value: 10000 },
//         { title: "Paid Invoice", value: 30 },
//         { title: "Pending Amount", value: 5000 },
//         { title: "Overdue", value: 2000 },
//       ],
//     },
//   ]

//   // 🔥 EXPORT FUNCTION
//   const handleExport = async () => {
//     if (!captureRef.current) return

//     const canvas = await html2canvas(captureRef.current, {
//       scale: 2,
//       useCORS: true,
//     })

//     const imgData = canvas.toDataURL("image/png")

//     const pdf = new jsPDF("p", "mm", "a4")

//     const imgWidth = 210
//     const pageHeight = 297
//     const imgHeight = (canvas.height * imgWidth) / canvas.width

//     let heightLeft = imgHeight
//     let position = 0

//     pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
//     heightLeft -= pageHeight

//     while (heightLeft > 0) {
//       position = heightLeft - imgHeight
//       pdf.addPage()
//       pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
//       heightLeft -= pageHeight
//     }

//     pdf.save("Reports.pdf")
//   }

//   return (
//     <div className="w-full h-screen overflow-auto">

//       {/* HEADER */}
//       <div className="flex items-center justify-between bg-[#DFDFDF99] px-4">
//         <Header
//           h1="Reports & Analytics"
//           para="Track revenue, growth, and invoice performance."
//         />

//         <button
//           onClick={handleExport}
//           className="flex items-center gap-2 font-iceberg text-2xl text-black px-5 py-2 rounded-lg border-2 border-black"
//         >
//           <img className="h-8" src={ex} />
//           Export Data
//         </button>
//       </div>

//       {/* 🔥 NORMAL UI */}
//       <div className="w-full pl-10">
//         <Radiogroup />

//         <div className="w-full flex justify-center items-center">
//           <div className="w-[50%] m-5 grid grid-cols-2 gap-[30px] place-items-center">
//             <Cards head="Total Revenue" amount={50000} para="+15% from last month" />
//             <Cards head="Paid Invoice" amount={145} para="90% Collection rate" />
//             <Cards head="Pending Amount" amount={50000} para="10 Invoice pending" />
//             <Cards head="Overdue" amount={20000} para="3 invoice overdue" />
//           </div>

//           <div className="w-[50%] mr-10 pl-3">
//             <Revenue />
//           </div>
//         </div>
//       </div>

//       {/* 🔥 HIDDEN EXPORT LAYOUT */}
//       <div
//         ref={captureRef}
//         className="bg-white p-5"
//         style={{ position: "absolute", left: "-9999px", top: 0 }}
//       >
//         {sections.map((section, i) => (
//           <div key={i} className="mb-10">

//             {/* Heading */}
//             <h2 className="text-2xl font-bold mb-4">{section.title}</h2>

//             {/* Cards */}
//             <div className="grid grid-cols-2 gap-6">
//               {section.cards.map((card, idx) => (
//                 <Cards
//                   key={idx}
//                   head={card.title}
//                   amount={card.value}
//                   para=""
//                 />
//               ))}
//             </div>

//           </div>
//         ))}

//         {/* Big Chart */}
//         <div className="mt-10">
//           <h2 className="text-2xl font-bold mb-4">Revenue by Type</h2>
//           <Revenue />
//         </div>

//       </div>

//     </div>
//   )
// }

// export default Reports


import { useRef } from "react"
import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"

import Header from "@/Components/Nav/Header"
import Radiogroup from "@/Components/Nav/Radiogroup"
import Cards from "@/Components/Cards/Cards"
import Revenue from "@/Components/Cards/Revenue"
import ex from "@/assets/ex.png"
import Reporttable from "@/Components/Table/Reporttable"

const Reports = () => {

  const captureRef = useRef<HTMLDivElement>(null)

  const sections = [
    {
      title: "Overall Revenue",
      cards: [
        { title: "Total Revenue", value: 50000 },
        { title: "Paid Invoice", value: 145 },
        { title: "Pending Amount", value: 50000 },
        { title: "Overdue", value: 20000 },
      ],
    },
    {
      title: "Internship Revenue",
      cards: [
        { title: "Total Revenue", value: 30000 },
        { title: "Paid Invoice", value: 90 },
        { title: "Pending Amount", value: 10000 },
        { title: "Overdue", value: 5000 },
      ],
    },
    {
      title: "Product Sales",
      cards: [
        { title: "Total Revenue", value: 70000 },
        { title: "Paid Invoice", value: 200 },
        { title: "Pending Amount", value: 20000 },
        { title: "Overdue", value: 10000 },
      ],
    },
    {
      title: "Other Invoice",
      cards: [
        { title: "Total Revenue", value: 10000 },
        { title: "Paid Invoice", value: 30 },
        { title: "Pending Amount", value: 5000 },
        { title: "Overdue", value: 2000 },
      ],
    },
  ]

  const handleExport = async () => {
    if (!captureRef.current) return

    const canvas = await html2canvas(captureRef.current, {
      scale: 2,
      useCORS: true,
    })

    const imgData = canvas.toDataURL("image/png")

    const pdf = new jsPDF("p", "mm", "a4")

    const imgWidth = 210
    const pageHeight = 297
    const imgHeight = (canvas.height * imgWidth) / canvas.width

    let heightLeft = imgHeight
    let position = 0

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
    heightLeft -= pageHeight

    while (heightLeft > 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight
    }

    pdf.save("Reports.pdf")
  }

  return (
    <div className="w-full h-screen overflow-auto">

      {/* HEADER */}
      <div className="flex items-center justify-between bg-[#DFDFDF99] px-4">
        <Header
          h1="Reports & Analytics"
          para="Track revenue, growth, and invoice performance."
        />

        <button
          onClick={handleExport}
          className="flex items-center gap-2 font-iceberg text-2xl text-black px-5 py-2 rounded-lg border-2 border-black"
        >
          <img className="h-8" src={ex} />
          Export Data
        </button>
      </div>

      {/* 🔥 NORMAL UI */}
      <div className="w-full pl-10">
        <Radiogroup />

        <div className="w-full flex justify-center items-center">
          <div className="w-[50%] m-5 grid grid-cols-2 gap-[30px] place-items-center">
            <Cards head="Total Revenue" amount={50000} para="+15% from last month" />
            <Cards head="Paid Invoice" amount={145} para="90% Collection rate" />
            <Cards head="Pending Amount" amount={50000} para="10 Invoice pending" />
            <Cards head="Overdue" amount={20000} para="3 invoice overdue" />
          </div>

          <div className="w-[50%] mr-10 pl-3">
            <Revenue />
          </div>
        </div>

        {/* ✅ TABLE VISIBLE IN UI ONLY */}
        <div className="mx-5 pl-5">
          <Reporttable />
        </div>
      </div>

      {/* 🔥 ONLY THIS PART GOES TO PDF */}
      <div
        ref={captureRef}
        className="bg-white p-5"
        style={{ position: "absolute", left: "-9999px", top: 0 }}
      >
        {sections.map((section, i) => (
          <div key={i} className="mb-10">

            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>

            <div className="grid grid-cols-2 gap-6">
              {section.cards.map((card, idx) => (
                <Cards
                  key={idx}
                  head={card.title}
                  amount={card.value}
                  para=""
                />
              ))}
            </div>

          </div>
        ))}

        {/* Chart included in PDF */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Revenue by Type</h2>
          <Revenue />
        </div>
      </div>

    </div>
  )
}

export default Reports