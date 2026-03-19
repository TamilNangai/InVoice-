import React, { useState, useEffect } from "react";
import searchIcon from "@/assets/filter/search.svg";
import Searchinput from "../Filter/Searchinput";
import { getInvoices } from "@/utils/getInvoice";

export interface Invoice {
  invoiceId: string;
  type: string;
  client: string;
  date: string;
  amount: number;
  status: "Paid" | "Pending";
}

const RecentInvoices: React.FC = () => {

  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [filter, setFilter] = useState<"All" | "Paid" | "Pending" | "Type">("All");
  const [search, setSearch] = useState("");

  // FETCH INVOICES FROM FIRESTORE
  useEffect(() => {

    const fetchInvoices = async () => {

      const data = await getInvoices();

      setInvoices(data);

    };

    fetchInvoices();

  }, []);

  const filteredInvoices = invoices.filter((item) => {

    const matchSearch =
      item.invoiceId.toLowerCase().includes(search.toLowerCase()) ||
      item.client.toLowerCase().includes(search.toLowerCase()) ||
      item.type.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      filter === "All"
        ? true
        : filter === "Type"
          ? true
          : item.status === filter;

    return matchSearch && matchStatus;

  });

  return (

    <div>

      <h2 className="text-3xl font-iceberg mb-4 mt-10">
        Recent Invoices
      </h2>

      <div className="">
        <div className="w-full rounded-xl overflow-hidden border-2 border-black">

          <div className="flex justify-between items-center p-5">

            <div className="flex gap-14 font-iceberg text-xl">

              <button
                className={`rounded-md h-8 w-28 hover:bg-[#136CED80] ${filter === "All" ? "bg-[#136CED80]" : ""}`}
                onClick={() => setFilter("All")}
              >
                All Invoices
              </button>

              <button
                className={`rounded-md h-8 w-12 hover:bg-[#136CED80] ${filter === "Paid" ? "bg-[#136CED80]" : ""}`}
                onClick={() => setFilter("Paid")}
              >
                Paid
              </button>

              <button
                className={`rounded-md h-8 w-20 hover:bg-[#136CED80] ${filter === "Pending" ? "bg-[#136CED80]" : ""}`}
                onClick={() => setFilter("Pending")}
              >
                Pending
              </button>

            </div>

            <div className=" w-3/4 max-w-[450px]">

              <Searchinput
                icon={searchIcon}
                para="Search by Invoice no or client Name"
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearch(e.target.value)
                }
              />

            </div>

          </div>

          <table className="w-full text-center">

            <thead className="text-xl">

              <tr className="grid grid-cols-6 font-iceberg">

                <th className="p-3 border font-normal">Invoice No</th>
                <th className="p-3 border font-normal">Type</th>
                <th className="p-3 border font-normal">Client</th>
                <th className="p-3 border font-normal">Date Issued</th>
                <th className="p-3 border font-normal">Amount</th>
                <th className="p-3 border font-normal">Status</th>

              </tr>

            </thead>

            <tbody>

              {filteredInvoices.map((invoice) => (

                <tr
                  key={invoice.invoiceId}
                  className="hover:bg-gray-50 grid grid-cols-6"
                >

                  <td className="p-3 border">{invoice.invoiceId}</td>
                  <td className="p-3 border">{invoice.type}</td>
                  <td className="p-3 border">{invoice.client}</td>
                  <td className="p-3 border">{invoice.date}</td>

                  <td className="p-3 border">
                    ₹{invoice.amount.toLocaleString()}
                  </td>

                  <td className="p-3 border">
                    {invoice.status}
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

