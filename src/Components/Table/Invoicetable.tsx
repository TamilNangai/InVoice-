// 


import React, { useState } from "react";
import Search from "../Filter/Search";
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
];

const RecentInvoices: React.FC = () => {
  const [filter, setFilter] = useState<"All" | "Paid" | "Pending">("All");

  const filteredInvoices =
    filter === "All"
      ? invoices
      : invoices.filter((invoice) => invoice.status === filter);

  return (
    <div>
      <h2 className="text-3xl font-iceberg mb-4 pl-16 mt-10">
        Recent Invoices
      </h2>
      <div className="pl-5">
        <div className="w-[90%] mx-11 border-2 border-black rounded-xl overflow-hidden">
          <table className="w-full text-center">
            <thead className="h-16 text-xl">

              <tr className="flex gap-20 pl-14 p-5 font-iceberg ">
                <th>
                  <button
                    className="hover:bg-[#136CED80] rounded-md h-8 w-28"
                    onClick={() => setFilter("All")}>
                    All Invoices
                  </button>
                </th>
                <th>
                  <button
                    className="hover:bg-[#136CED80] rounded-md h-8 w-12"
                    onClick={() => setFilter("Paid")}
                  >
                    Paid
                  </button>
                </th>
                <th>
                  <button
                    className="hover:bg-[#136CED80] rounded-md h-8 w-20"
                    onClick={() => setFilter("Pending")}
                  >
                    Pending
                  </button>
                </th>
                <div className="absolute right-28 -mt-2">
                  <Search />
                </div>
              </tr>

              <tr className="grid grid-cols-6 font-iceberg border border-black">
                <th className="p-3 border">Invoice No</th>
                <th className="p-3 border">Type</th>
                <th className="p-3 border">Client</th>
                <th className="p-3 border">Date Issued</th>
                <th className="p-3 border">Amount</th>
                <th className="p-3 border">Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredInvoices.map((invoice, index) => (
                <tr key={index} className="hover:bg-gray-50 grid grid-cols-6 border border-black">
                  <td className="p-3 border">{invoice.id}</td>
                  <td className="p-3 border">{invoice.type}</td>
                  <td className="p-3 border">{invoice.client}</td>
                  <td className="p-3 border">{invoice.date}</td>
                  <td className="p-3 border">
                    ₹{invoice.amount.toLocaleString()}
                  </td>
                  <td className="p-3 border">
                    <span>
                      {invoice.status}
                    </span>
                  </td>
                </tr>
              ))}

              {filteredInvoices.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-5">
                    No invoices found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentInvoices;