import React, { useState } from "react";

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
    date: "Jan 20 2026",
    amount: 100000.00,
  },
  {
    id: "INV-2025-003",
    type: "Internship",
    client: "Akash Kodiyarasan",
    date: "Jan 14 2026",
    amount: 15000.00,
  },
  
  {
    id: "INV-2025-001",
    type: "Internship",
    client: "Swetha S",
    date: "Jan 12 2026",
    amount: 120000.00,
  },
  {
    id: "INV-2025-000",
    type: "Service",
    client: "Naveen Kumar",
    date: "Jan 01 2026",
    amount: 50000.00,
  },
    {
    id: "INV-2025-004",
    type: "Product",
    client: "Hariharan",
    date: "Jan 20 2026",
    amount: 100000.00,
  },
  {
    id: "INV-2025-003",
    type: "Internship",
    client: "Akash Kodiyarasan",
    date: "Jan 14 2026",
    amount: 15000.00,
  },
  
  {
    id: "INV-2025-001",
    type: "Internship",
    client: "Swetha S",
    date: "Jan 12 2026",
    amount: 120000.00,
  },
  {
    id: "INV-2025-000",
    type: "Service",
    client: "Naveen Kumar",
    date: "Jan 01 2026",
    amount: 50000.00,
  },
];

const RecentInvoices: React.FC = () => {

  const [showAll, setShowAll] = useState(false);

  const visibleInvoices = showAll ? invoices : invoices.slice(0,4);

  return (
    <div className="border-[2px] border-black rounded-xl m-5 shadow-[5px_5px_10px_rgba(0,0,0,0.3)]">
      <table className="w-[95%] mx-8 text-center">
        
        <thead className="h-20 font-iceberg text-2xl">
          <tr className="border-0 border-b border-black">
            <th className="p-4 text-start font-extralight text-3xl">
              Recent Transaction
            </th>

            <th
              className="absolute right-12 mt-5 pr-5 text-blue-400 cursor-pointer"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "View Less" : "View All"}
            </th>
          </tr>

          <tr className="grid grid-cols-5 border-0 border-b border-black text-start text-gray-600 text-xl">
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
              key={invoice.id}
              className="hover:bg-gray-50 font-sanchez border-0 border-b border-black grid grid-cols-5"
            >
              <td className="p-4">{invoice.id}</td>
              <td className="p-4">{invoice.client}</td>
              <td className="p-4">{invoice.type}</td>
              <td className="p-4">{invoice.date}</td>
              <td className="p-4">{invoice.amount}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default RecentInvoices;