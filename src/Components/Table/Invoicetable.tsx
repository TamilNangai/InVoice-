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
  status: "paid" | "pending" | "overdue";
}

const RecentInvoices: React.FC = () => {

  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [filter, setFilter] = useState<"all" | "paid" | "pending" | "type">("all");
  const [search, setSearch] = useState("");
  

  useEffect(() => {

    const fetchInvoices = async () => {

      const data = await getInvoices();

      const formattedData: Invoice[] = data.map((item: any) => ({
        invoiceId: item.invoiceId,
        type: item.type,
        client: item.client,
        amount: item.amount,

        status: item.status.toLowerCase() as "paid" | "pending"| "overdue",

        date: item.date,
      }));


      setInvoices(formattedData);

    };

    fetchInvoices();

  }, []);

  const searchText = search.toLowerCase();

  const filteredInvoices = invoices.filter((item) => {

    const matchSearch =
      (item.invoiceId?.toLowerCase() || "").includes(searchText) ||
      (item.client?.toLowerCase() || "").includes(searchText) ||
      (item.type?.toLowerCase() || "").includes(searchText);

    const matchStatus =
      filter === "all"
        ? true
        : item.status === filter;

    return matchSearch && matchStatus;

  });

  return (

    <div className="w-full h-full">

      <h2 className="text-3xl font-iceberg mb-4 mt-10">
        Recent Invoices
      </h2>

      <div className="">
        <div className="w-full rounded-xl overflow-hidden border-2 border-black">

          <div className="flex justify-between items-center p-5">

            <div className="flex gap-14 font-iceberg text-xl">

              <button
                className={`rounded-md h-8 w-28 hover:bg-[#136CED80] ${filter === "all" ? "bg-[#136CED80]" : ""}`}
                onClick={() => setFilter("all")}
              >
                All Invoices
              </button>

              <button
                className={`rounded-md h-8 w-12 hover:bg-[#136CED80] ${filter === "paid" ? "bg-[#136CED80]" : ""}`}
                onClick={() => setFilter("paid")}
              >
                Paid
              </button>

              <button
                className={`rounded-md h-8 w-20 hover:bg-[#136CED80] ${filter === "pending" ? "bg-[#136CED80]" : ""}`}
                onClick={() => setFilter("pending")}
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
          <div className="w-full ">

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

              {filteredInvoices.length > 0 ? (
                filteredInvoices.slice(0, 6).map((invoice) => (
                  <tr key={invoice.invoiceId} 
                  className="hover:bg-gray-50 grid grid-cols-6"
                >

                    <td className="p-3 border">{invoice.invoiceId}</td>
                  <td className="p-3 border">{invoice.type}</td>
                  <td className="p-3 border">{invoice.client}</td>
                  <td className="p-3 border"> {invoice.date}</td>
                  <td className="p-3 border">
                    ${invoice.amount.toFixed(2)}
                  </td>

                  <td className="p-3 border">
                   •   {invoice.status}
                  </td>

                </tr>

              ))):

              (

                <tr>
                  <td colSpan={6} className="p-5">
                    No invoices found
                  </td>
                </tr>

              )
              }

            </tbody>

          </table>
          </div>

        </div>
      </div>
    </div>

  );
};

export default RecentInvoices;

