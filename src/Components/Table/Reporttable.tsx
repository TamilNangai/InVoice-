import React from "react";

export interface Invoice {
  id: string;
  type: string;
  client: string;
  date: string;
  amount: number;
}

const invoices: Invoice[] = [
  {
    id: "INV-2025-004",
    type: "Product",
    client: "Hariharan",
    date: "25-12-2025",
    amount: 120000,
  },
  {
    id: "INV-2025-003",
    type: "Internship",
    client: "Akash",
    date: "24-12-2025",
    amount: 140500,
  },
  {
    id: "INV-2025-002",
    type: "Internship",
    client: "Swetha",
    date: "23-12-2025",
    amount: 120500,
  },
  {
    id: "INV-2025-004",
    type: "Product",
    client: "Hariharan",
    date: "25-12-2025",
    amount: 120000,
  },
  {
    id: "INV-2025-004",
    type: "Product",
    client: "Hariharan",
    date: "25-12-2025",
    amount: 120000,
  },
];

const RecentInvoices: React.FC = () => {
  return (
    // <div className="" >
    //   <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-6">
    //     <div className="overflow-x-auto">
    //       <table className="w-full border border-gray-300 text-left">
    //         <thead className="bg-gray-100">
    //           <tr>
    //             <th className="p-3 border">Invoice No</th>
    //             <th className="p-3 border">Type</th>
    //             <th className="p-3 border">Client</th>
    //             <th className="p-3 border">Date Issued</th>
    //             <th className="p-3 border">Amount</th>
    //             <th className="p-3 border">Status</th>
    //           </tr>
    //         </thead>

    //         <tbody>
    //           {invoices.map((invoice) => (
    //             <tr key={invoice.id} className="hover:bg-gray-50">
    //               <td className="p-3 border">{invoice.id}</td>
    //               <td className="p-3 border">{invoice.type}</td>
    //               <td className="p-3 border">{invoice.client}</td>
    //               <td className="p-3 border">{invoice.date}</td>
    //               <td className="p-3 border">
    //                 ₹{invoice.amount.toLocaleString()}
    //               </td>
    //               <td className="p-3 border">
    //                 <span
    //                   className={`px-3 py-1 rounded-full text-sm font-medium ${
    //                     invoice.status === "Paid"
    //                       ? "bg-green-100 text-green-600"
    //                       : "bg-red-100 text-red-600"
    //                   }`}
    //                 >
    //                   {invoice.status}
    //                 </span>
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>

    //       </table>
    //     </div>

    //   </div>
    // </div>
      <div className="border border-black rounded-xl mx-5 mt-20">
        <table className="w-[95%] mx-8 text-center ">
          <thead className="h-20 font-iceberg text-2xl ">
            <tr className=" border-0 border-b border-black ">
              <th className="p-4 text-start">Recent Transaction</th>
              <th className="absolute right-12 mt-5 text-blue-400">View All</th>
            </tr>
            <tr className="border-0 border-b border-black grid grid-cols-5 text-start">
              <th className="p-4 text-start">Invoice No</th>
              <th className="p-4 text-start">Type</th>
              <th className="p-4 text-start">Client</th>
              <th className="p-4 text-end">Date Issued</th>
              <th className="p-4 text-end">Amount</th>
            </tr>

          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-gray-50 font-sanchez  border-0 border-b border-black grid grid-cols-5">
                <td className="p-4 text-start">{invoice.id}</td>
                <td className="p-4 text-start">{invoice.type}</td>
                <td className="p-4 text-start">{invoice.client}</td>
                <td className="p-4 text-end">{invoice.date}</td>
                <td className="p-4 text-end">
                  ₹{invoice.amount.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default RecentInvoices;