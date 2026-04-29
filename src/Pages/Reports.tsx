import { useEffect, useState, useRef } from "react"
import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"

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
  const [loading, setLoading] = useState(false)
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

    setLoading(true) // 🔥 start loading

    try {
      captureRef.current.style.display = "block"

      const pdf = new jsPDF("p", "mm", "a4")

      const sections = Array.from(
        captureRef.current.querySelectorAll(".pdf-section")
      )

      const imgWidth = 210
      const pageHeight = 297

      for (let i = 0; i < sections.length; i += 2) {
        const pageDiv = document.createElement("div")

        // Take 2 sections per page
        pageDiv.appendChild(sections[i].cloneNode(true))
        if (sections[i + 1]) {
          pageDiv.appendChild(sections[i + 1].cloneNode(true))
        }

        pageDiv.style.padding = "20px"
        pageDiv.style.background = "#fff"
        pageDiv.style.width = "800px"

        document.body.appendChild(pageDiv)

        const canvas = await html2canvas(pageDiv, {
          scale: 2,
          useCORS: true,
        })

        const imgData = canvas.toDataURL("image/png")
        const imgHeight = (canvas.height * imgWidth) / canvas.width

        if (i !== 0) pdf.addPage()

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight)

        document.body.removeChild(pageDiv)
      }

      pdf.save("Reports.pdf")

      captureRef.current.style.display = "none"
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false) // 🔥 stop loading
    }
  }

  if (!report) return <div>Loading...</div>

  return (
    <div className="w-full">
      <div className="flex items-center justify-between bg-[#DFDFDF99] px-4">
        <Header
          h1="Products & Inventory"
          para="Manage Your product catalog and service offerings."
          // onMenuClick={() => setMobileOpen(true)}
        />

        <button
          onClick={handleExport}
          disabled={loading}
          className={`flex items-center gap-2 font-iceberg text-2xl px-5 py-2 rounded-lg border-2 border-black
    ${loading ? "bg-gray-300 cursor-not-allowed" : "text-black hover:bg-[#fffdfd99]"}
  `}
        >
          <img className="h-8" src={ex} />
          {loading ? "Exporting..." : "Export Data"}
        </button>
      </div>

      <div className="w-full">
        <Radiogroup selected={selected} setSelected={setSelected} />

        <div className="w-full flex flex-wrap xl:flex-nowrap justify-center items-center">
          <div className="w-full  h-[10%] m-5 grid grid-cols-2 gap-[30px] place-items-center font-sanchez">
            <Cards head="Total Revenue" amount={report?.totalRevenue ?? 0} para={`${report?.growth ?? 0}% from last month`} cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#34C759]" />
            <Cards head="Paid Invoice" amount={report?.paidCount ?? 0} para={`${report?.collectionRate ?? 0}% Collection rate`} cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#34C759]" />
            <Cards head="Pending Amount" amount={report?.pendingAmount ?? 0} para={`${report?.pendingCount ?? 0} Invoice pending`} cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#FFCC00]" />
            <Cards head="Overdue" amount={report?.overdueAmount ?? 0} para={`${report?.overdueCount ?? 0} invoice overdue`} cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#FF383C]" />
          </div>

          <div className="w-full ">
            <Revenue data={report} />
          </div>
        </div>

        <div className="w-full ">
          <Reporttable />
        </div>

       
      </div>
    </div>
  )
}

export default Reports