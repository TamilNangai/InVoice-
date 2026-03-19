import { useEffect, useState } from "react"
import Header from "@/Components/Nav/Header"
import Radiogroup from "@/Components/Nav/Radiogroup"
import Cards from "@/Components/Cards/Cards"
import Revenue from "@/Components/Cards/Revenue"
import ex from "@/assets/ex.png"
import { Invoice } from "@/Components/Table/Reporttable"
import Reporttable from "@/Components/Table/Reporttable"
import { getInvoices } from "@/utils/getInvoice"
import { reportAnalytics } from "@/utils/reportAnalytics"




const Reports = () => {
  
  const [report, setReport] = useState<any>(null)
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



  useEffect(() => {
    const loadData = async () => {

      // ✅ call your uploaded function
      const invoices = await getInvoices()
        console.log("STATUS:", invoices.map(i => i.status))

      // ✅ convert status (no change to get function)
        const formatted: Invoice[] = invoices.map(inv => ({
            ...inv,
            status: inv.status.toLowerCase() as "paid" | "pending" | "overdue"
        }))

       


      // ✅ pass to analytics
        const result = reportAnalytics(
            formatted,
            "yearly",                  
            mapFilter(selected)        
        )

      setReport(result)

        console.log("Invoices:", formatted)
        console.log("Selected:", selected)
        console.log("Mapped:", mapFilter(selected))


    }

    loadData()
  }, [selected])

  if (!report) return <div>Loading...</div>

  return (
    <div className="w-full h-screen overflow-auto">
      <div className="flex items-center justify-between bg-[#DFDFDF99] px-4">
      <Header h1="Products & Inverntory"
        para="Manage Your product catalog and service offerings." />
      <div className="">
        <button className="flex font-iceberg text-2xl text-black px-5 py-2 rounded-lg border-2 border-black"><img className="h-8" src={ex} />Export Data</button>
      </div>
      </div>
      <div className="w-full pl-10">
              <Radiogroup selected={selected} setSelected={setSelected} />

        <div className="w-full flex justify-center items-center ">
          <div className="w-[50%] m-5  grid grid-cols-2 gap-[30px]  place-items-center ">
            < Cards head="Total Revenue" amount={report.totalRevenue} para={`${report.growth}% from last month`} cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#34C759]" />
            < Cards head="Paid Invoice" amount={report.paidCount}
              para={`${report.collectionRate}% Collection rate`} cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#34C759]" />
            < Cards head="Pending Amount" amount={report.pendingAmount}
              para={`${report.pendingCount} Invoice pending`} cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px]  text-[#FFCC00] " />
            < Cards head="Overdue" amount={report.overdueAmount}
              para={`${report.overdueCount} invoice overdue`} cardhead="iceberg-regular text-[#666666]" cardamount="text-[30px]" cardpara="text-[14px] text-[#FF383C]" />
          </div>
                  {report && <div className="w-[50%] mr-10 pl-3"><Revenue data={report} />
</div>}
        </div>
      </div>
      <div className="mx-5 pl-5">
              <Reporttable />
        
        
      </div>
    </div>
  )
}

export default Reports