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




import { useEffect, useState, useRef } from "react"
import html2canvas from "html2canvas"
import  {jsPDF}  from "jspdf"

import Header from "@/Components/Nav/Header"
import Radiogroup from "@/Components/Nav/Radiogroup"
import Cards from "@/Components/Cards/Cards"
import Revenue from "@/Components/Cards/Revenue"
import ex from "@/assets/ex.png"
import { Invoice, getInvoices } from "@/utils/getInvoice"
import Reporttable from "@/Components/Table/Reporttable"
import { reportAnalytics } from "@/utils/reportAnalytics"

const Reports = () => {
  const captureRef = useRef<HTMLDivElement>(null)
  const [report, setReport] = useState<any>({})
  const [allReports, setAllReports] = useState<any[]>([])
  const [selected, setSelected] = useState("Overall Revenue")

  const mapFilter = (label: string) => {
    switch (label) {
      case "Internship Revenue": return "internship"
      case "Product Sales": return "product"
      case "Service Invoice": return "service"
      case "Other Invoice": return "other"
      default: return "overall"
    }
  }

  const labels = [
    "Overall Revenue",
    "Internship Revenue",
    "Product Sales",
    "Service Invoice",
    "Other Invoice",
  ]

  useEffect(() => {
    const loadData = async () => {
      const invoices = await getInvoices()
      const formatted: Invoice[] = invoices.map(inv => ({
        ...inv,
        status: inv.status.toLowerCase() as "paid" | "pending" | "overdue"
      }))

      const result = reportAnalytics(formatted, "yearly", mapFilter(selected))
      setReport(result)

      const all = labels.map(label => ({
        title: label,
        data: reportAnalytics(formatted, "yearly", mapFilter(label))
      }))
      setAllReports(all)
    }

    loadData()
  }, [selected])

  const handleExport = async () => {
    if (!captureRef.current) return
    // Use html2canvas to capture the styled component
    const canvas = await html2canvas(captureRef.current, { scale: 2, useCORS: true })
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

  if (!report) return <div>Loading...</div>

  return (
    <div className="w-full">
      <div className="flex items-center justify-between bg-[#DFDFDF99] px-4">
        <Header
          h1="Products & Inventory"
          para="Manage Your product catalog and service offerings."
        />
        <button
          onClick={handleExport}
          className="flex items-center gap-2 font-iceberg text-2xl text-black px-5 py-2 rounded-lg border-2 border-black"
        >
          <img className="h-8" src={ex} />
          Export Data
        </button>
      </div>

      <div className="w-full pl-10">
        <Radiogroup selected={selected} setSelected={setSelected} />

        <div className="w-full flex justify-center items-center">
          <div className="w-[50%] m-5 grid grid-cols-2 gap-[30px] place-items-center font-sanchez">
            <Cards head="Total Revenue" amount={report?.totalRevenue ?? 0} para={`${report?.growth ?? 0}% from last month`} cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#34C759]" />
            <Cards head="Paid Invoice" amount={report?.paidCount ?? 0} para={`${report?.collectionRate ?? 0}% Collection rate`} cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#34C759]" />
            <Cards head="Pending Amount" amount={report?.pendingAmount ?? 0} para={`${report?.pendingCount ?? 0} Invoice pending`} cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#FFCC00]" />
            <Cards head="Overdue" amount={report?.overdueAmount ?? 0} para={`${report?.overdueCount ?? 0} invoice overdue`} cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#FF383C]" />
          </div>

          <div className="w-[50%] mr-10 pl-3">
            <Revenue data={report} />
          </div>
        </div>

        <div className="pr-5">
          <Reporttable />
        </div>
      </div>

      <div ref={captureRef} className="bg-white p-5" style={{  }}>
        {allReports.map((section, i) => (
          <div key={i} className="mb-10">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <div className="grid grid-cols-2 gap-[30px] place-items-center font-sanchez">
              <Cards head="Total Revenue" amount={section.data?.totalRevenue ?? 0} para={`${section.data?.growth ?? 0}% from last month`} cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#34C759]" />
              <Cards head="Paid Invoice" amount={section.data?.paidCount ?? 0} para={`${section.data?.collectionRate ?? 0}% Collection rate`} cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#34C759]" />
              <Cards head="Pending Amount" amount={section.data?.pendingAmount ?? 0} para={`${section.data?.pendingCount ?? 0} Invoice pending`} cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#FFCC00]" />
              <Cards head="Overdue" amount={section.data?.overdueAmount ?? 0} para={`${section.data?.overdueCount ?? 0} invoice overdue`} cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#FF383C]" />
            </div>
          </div>
        ))}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Revenue by Type</h2>
          <Revenue data={report} />
        </div>
      </div>
    </div>
  )
}

export default Reports