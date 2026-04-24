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
import { Invoice } from "@/utils/getInvoice"

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

                <div className="">
                        <div className="w-full h-20 bg-[#DFDFDF99]  flex items-center justify-between px-4">
                                <div className="w-full ">
                                        <h1 className="text-black font-iceberg xl:text-3xl md:text-3xl sm:text-2xl font-extralight ">Dashboard</h1>
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

                       
                        <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 px-4 sm:px-5">

                                <Cards 
                                        head="Total Revenue"
                                        symbol="₹"
                                        amount={report.totalRevenue || 0}
                                        cardhead="sanchez-regular "
                                        cardamount="text-2xl sm:text-3xl "
                                />

                                <Cards
                                        head="Invoice Issued"
                                        amount={report.totalInvoices || 0}
                                        cardhead="sanchez-regular"
                                        cardamount="text-2xl sm:text-3xl"
                                />

                                <Cards
                                        head="Pending"
                                        symbol="₹"
                                        amount={report.pendingAmount || 0}
                                        para={`- ${report.pendingCount || 0} Invoice Pending`}
                                        cardhead="sanchez-regular xl:mt-2"
                                        cardamount="text-2xl sm:text-3xl"
                                        cardpara="text-sm sm:text-xs"
                                />

                                <Cards
                                        head="Clients"
                                        amount={report.uniqueClients || 0}
                                        cardhead="sanchez-regular "
                                        cardamount="text-2xl sm:text-3xl"
                                />

                        </div>
                        <div className="w-full h-full px-5">
                                <Invoicetable />
                        </div>
                </div>

        )
}
export default Dashboard;

