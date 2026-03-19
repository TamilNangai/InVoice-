import Cards from "@/Components/Cards/Cards"
import Create from "@/Components/Cards/Create"
import Popup1 from "@/assets/Popup1.png"
import Popup2 from "@/assets/Popup2.png"
import Popup3 from "@/assets/Popup3.png"
import Popup4 from "@/assets/Popup4.png"
import src1 from '@/assets/Vectorw.png'
import src2 from '@/assets/Vector.png'
import Invoicetable from "@/Components/Table/Invoicetable"
import { reportAnalytics } from "@/utils/reportAnalytics"
import { useEffect, useState } from "react"
import { getInvoices } from "@/utils/getInvoice"
import { Invoice } from "@/Components/Table/Reporttable"

function Dashboard() {
   
    const [report, setReport] = useState<any>(null)

    useEffect(() => {
        const loadData = async () => {

            const invoices = await getInvoices()
            console.log("STATUS:", invoices.map(i => i.status))
            const formatted: Invoice[] = invoices.map(inv => ({
                ...inv,
                status: inv.status.toLowerCase() as "paid" | "pending" | "overdue"
            }))
            console.log("STATUS FIXED:", formatted.map(i => i.status)) 
            const result = reportAnalytics(formatted, "monthly", "overall")

            setReport(result)
        }

        loadData()
    }, [])

    if (!report) return <div>Loading...</div>

        return (

                <div className="w-full h-full">
                        <div className="w-full h-20 bg-[#DFDFDF99]  flex items-center justify-between px-4">
                                <div className=" ">
                                        <h1 className="text-black font-iceberg text-3xl font-extralight ">Dashboard</h1>
                                </div>
                                <div className="">
                                        <Create popup1={Popup1}
                                                popup2={Popup2}
                                                popup3={Popup3}
                                                popup4={Popup4}
                                                src1={src1}
                                                src2={src2}

                                                h1="Select Invoice Type"
                                                para1="Choose the type of invoice you want to create. "
                                                para6="This will customize the form fields for your needs. "
                                                h2="Student Internship"
                                                para2="Internship fees, training
programs, certifications"
                                                h3="Product Invoice"
                                                para3="Physical or digital product
billing and shipping"
                                                h4="Service Invoice"

                                                para4="Physical or digital product
billing and shipping"
                                                h5="Other Invoice"
                                                para5="Customer or miscellaneous
service billing"
                                                h6="Create Invoice" />
                                </div>
                        </div>

                        <div className="w-full max-h-40 flex justify-center gap-5 items-center mt-5 px-5 ">
                                
                                < Cards head="Total Revenue" symbol="$" amount={report.totalRevenue} cardhead="sanchez-regular text-[#000000]" cardamount="text-[32px]" />
                                < Cards head="Invoice Issued" amount={report.totalInvoices} cardhead="sanchez-regular text-[#000000]" cardamount="text-[32px]" />
                                < Cards head="Pending Payments" symbol="$" amount={report.pendingAmount}
                                        para={`- ${report.pendingCount} Invoice Pending`} cardhead="sanchez-regular text-[#000000]" cardamount="text-[32px]" cardpara="text-[16px] text-[#000000]  " />
                                < Cards head="Clients" amount={report.uniqueClients} cardhead="sanchez-regular text-[#000000]" cardamount="text-[32px]" />

                        </div>
                        <div className="w-full h-full px-5">
                                <Invoicetable />
                        </div>
                </div>

        )
}
export default Dashboard;

