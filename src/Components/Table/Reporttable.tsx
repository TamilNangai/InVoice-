import React, { useState, useEffect } from "react"
// import { getInvoices, Invoice } from "../utils/getInvoices"
import { getInvoices, Invoice } from "@/utils/getInvoice"



const RecentInvoices: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getInvoices()
      setInvoices(data)
    }

    fetchData()
  }, [])

  const visibleInvoices = showAll ? invoices : invoices.slice(0, 4)

  return (
        <div className="border-[2px] border-black rounded-xl m-5 shadow-[5px_5px_10px_rgba(0,0,0,0.3)] ">
      <table className="w-[95%] mx-8 text-center">

        <thead className="h-20  font-iceberg text-2xl">
          <tr className="border-0 border-b border-black flex justify-between items-center">
            <th className="p-4 text-start font-extralight text-3xl">
              Recent Transaction
            </th>
            <th

              className="mt-5 pr-5 text-blue-400 cursor-pointer"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "View Less" : "View All"}
            </th>
          </tr>

          <tr className="w-[100%] grid grid-cols-5 border-0 border-b border-black text-start text-gray-600 text-xl">
            <th className="p-4 font-light">Invoice No</th>
            <th className="p-4 font-light">Client/Student</th>
            <th className="p-4 font-light">Type</th>
            <th className="p-4 font-light">Date Issued</th>
            <th className="p-4 font-light">Amount</th>
          </tr>
        </thead>

        <tbody>
          {visibleInvoices.map((invoice) => (
            <tr
              key={invoice.invoiceId}
              className="w-[100%]  hover:bg-gray-50 font-sanchez border-0 border-b last:border-b-0 border-black grid grid-cols-5">
              <td className="p-4 ">{invoice.invoiceId}</td>
              <td className="p-4">{invoice.client}</td>
              <td className="p-4">{invoice.type}</td>
              <td className="p-4">{invoice.date}</td>
              <td className="p-4 ">{invoice.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}

export default RecentInvoices