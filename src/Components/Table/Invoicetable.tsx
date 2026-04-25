import React, { useState, useEffect } from "react";
import searchIcon from "@/assets/filter/search.svg";
import Searchinput from "../Filter/Searchinput";
import { getInvoices } from "@/utils/getInvoice";
import { formatLabel } from "@/utils/formatLabel";

export interface Invoice {
  uniqueId: string;
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
        uniqueId: item.uniqueId,
        invoiceId: item.invoiceId,
        type: item.type,
        client: item.client,
        amount: item.amount,

        // ✅ FIX STATUS
        status: item.status.toLowerCase() as "paid" | "pending" | "overdue",

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

            <div className="flex gap-14 font-iceberg xl:text-xl md:text-md sm:text-[12px]">

              <button
                className={`rounded-md h-8 xl:w-28 sm:w-20 text-white 
    ${filter === "all" ? "bg-blue-500" : "bg-gray-300"}`}
                onClick={() => setFilter("all")}
              >
                All Invoices
              </button>

              <button
                className={`rounded-md h-8 w-12 text-white 
    ${filter === "paid" ? "bg-green-500" : "bg-gray-300"}`}
                onClick={() => setFilter("paid")}
              >
                Paid
              </button>

              <button
                className={`rounded-md h-8 w-20 text-white 
    ${filter === "pending" ? "bg-yellow-400" : "bg-gray-300"}`}
                onClick={() => setFilter("pending")}
              >
                Pending
              </button>

            </div>

            <div className=" w-3/4 max-w-[450px] hidden lg:block">

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

            {/* <table className="w-full text-center"> */}
            <table className="w-full h-full text-center">

              <thead className="xl:text-[22px] md:text-[18px] sm:text-[17px]">

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
                      className="hover:bg-gray-50 grid grid-cols-6 md:text-sm sm:text-[15px] xl:text-[17px]"
                    >

                      <td className="p-3 border">{invoice.invoiceId}</td>
                      <td className="p-3 border">{formatLabel(invoice.type)}</td>
                      <td className="p-3 border">{invoice.client}</td>
                      <td className="p-3 border"> {invoice.date}</td>
                      <td className="p-3 border">
                        ${invoice.amount.toFixed(2)}
                      </td>

                      <td className="p-3 border">
                        <span
                          className={`font-semibold
      ${invoice.status === "pending" ? "text-yellow-300" : ""}
      ${invoice.status === "paid" ? "text-green-500" : ""}
      ${invoice.status === "overdue" ? "text-red-500" : ""}
    `}
                        >
                          {invoice.status}
                        </span>
                      </td>

                    </tr>

                  ))) :

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

