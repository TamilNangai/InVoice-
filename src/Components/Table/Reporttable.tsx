import React from "react";

export interface Invoice {
  id: string;
  type: string;
  client: string;
  date: string;
  amount: number;
  status: "Paid" | "Pending";
}

const invoices: Invoice[] = [
  {
    id: "INV-2025-004",
    type: "Product",
    client: "Hariharan",
    date: "25-12-2025",
    amount: 120000,
    status: "Paid",
  },
  {
    id: "INV-2025-003",
    type: "Internship",
    client: "Akash",
    date: "24-12-2025",
    amount: 140500,
    status: "Pending",
  },
  {
    id: "INV-2025-002",
    type: "Internship",
    client: "Swetha",
    date: "23-12-2025",
    amount: 120500,
    status: "Paid",
  },
   {
    id: "INV-2025-004",
    type: "Product",
    client: "Hariharan",
    date: "25-12-2025",
    amount: 120000,
    status: "Paid",
  },
   {
    id: "INV-2025-004",
    type: "Product",
    client: "Hariharan",
    date: "25-12-2025",
    amount: 120000,
    status: "Paid",
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
    <div>
      <h2 className="text-3xl font-iceberg mb-4 pl-12 mt-10">Recent Invoices</h2>
      <div className="">
        <table className="w-[90%] mx-11 outline-none bg-transparent border-0 border-b-2 border-black rounded-xl text-center">
          <thead className="h-20 font-iceberg text-2xl">
            <tr > 
              <th className="p-3 border h-10">Invoice No</th>
              <th className="p-3 border">Type</th>
              <th className="p-3 border">Client</th>
              <th className="p-3 border">Date Issued</th>
              <th className="p-3 border">Amount</th>
              <th className="p-3 border">Status</th>
            </tr>

          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-gray-50 font-sanchez">
                <td className="p-3 border">{invoice.id}</td>
                <td className="p-3 border">{invoice.type}</td>
                <td className="p-3 border">{invoice.client}</td>
                <td className="p-3 border">{invoice.date}</td>
                
                <td className="p-3 border">
              
                  ₹{invoice.amount.toLocaleString()}
                </td>
                <td className="p-3 border">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      invoice.status === "Paid"
                      
                    }`}
                  >
                    {invoice.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
            </table>
    </div>
    </div>
  );
};

export default RecentInvoices;