// import React, { useState } from "react";
// import searchIcon from "@/assets/filter/search.svg";
// import Searchinput from "../Filter/Searchinput";

// export interface Invoice {
//   id: string;
//   type: string;
//   client: string;
//   date: string;
//   amount: number;
//   status: "paid" | "pending";
// }

// const invoices: Invoice[] = [
//   {
//     id: "INV-2025-004",
//     type: "Product",
//     client: "Hariharan",
//     date: "25-12-2025",
//     amount: 120000,
//     status: "paid",
//   },
//   {
//     id: "INV-2025-003",
//     type: "Internship",
//     client: "Akash",
//     date: "24-12-2025",
//     amount: 140500,
//     status: "pending",
//   },
//   {
//     id: "INV-2025-002",
//     type: "Internship",
//     client: "Swetha",
//     date: "23-12-2025",
//     amount: 120500,
//     status: "paid",
//   },
//   {
//     id: "INV-2025-004",
//     type: "Product",
//     client: "Hariharan",
//     date: "25-12-2025",
//     amount: 120000,
//     status: "paid",
//   },
//   {
//     id: "INV-2025-003",
//     type: "Internship",
//     client: "Akash",
//     date: "24-12-2025",
//     amount: 140500,
//     status: "pending",
//   },
//   {
//     id: "INV-2025-002",
//     type: "Internship",
//     client: "Swetha",
//     date: "23-12-2025",
//     amount: 120500,
//     status: "paid",
//   },
// ];

// const RecentInvoices: React.FC = () => {
//   const [filter, setFilter] = useState<"all" | "paid" | "pending" | "type">("all");
//   const [search, setSearch] = useState("");

//   // const filteredInvoices = invoices.filter((item) => {
//   //   const matchSearch =
//   //     item.id.toLowerCase().includes(search.toLowerCase()) ||
//   //     item.client.toLowerCase().includes(search.toLowerCase());

//   //   const matchStatus = filter === "all" ? true : item.status === filter;

//   //   return matchSearch && matchStatus;
//   // });

//   const filteredInvoices = invoices.filter((item) => {
//     const matchSearch =
//       item.id.toLowerCase().includes(search.toLowerCase()) ||
//       item.client.toLowerCase().includes(search.toLowerCase()) ||
//       item.type.toLowerCase().includes(search.toLowerCase());

//     const matchStatus =
//       filter === "all"
//         ? true
//         : filter === "type"
//           ? true
//           : item.status === filter;

//     return matchSearch && matchStatus;
//   });

//   return (
//     <div>
//       <h2 className="text-3xl font-iceberg mb-4 mt-10">
//         Recent Invoices
//       </h2>

//       <div className="">
//         <div className="w-[93.5%] rounded-xl overflow-hidden border-2 border-black">

//           <div className="flex justify-between items-center p-5">
//             <div className="flex gap-14 font-iceberg text-xl">
//               <button
//                 className={`rounded-md h-8 w-28 hover:bg-[#136CED80] ${filter === "all" ? "bg-[#136CED80]" : ""
//                   }`}
//                 onClick={() => setFilter("all")}
//               >
//                 all Invoices
//               </button>

//               <button
//                 className={`rounded-md h-8 w-12 hover:bg-[#136CED80] ${filter === "paid" ? "bg-[#136CED80]" : ""
//                   }`}
//                 onClick={() => setFilter("paid")}
//               >
//                 paid
//               </button>

//               <button
//                 className={`rounded-md h-8 w-20 hover:bg-[#136CED80] ${filter === "pending" ? "bg-[#136CED80]" : ""
//                   }`}
//                 onClick={() => setFilter("pending")}
//               >
//                 pending
//               </button>
//               <button
//                 className={`rounded-md h-8 w-20 hover:bg-[#136CED80] ${filter === "type" ? "bg-[#136CED80]" : ""}`}
//                 onClick={() => setFilter("type")}
//               >
//                 type
//               </button>

//             </div>
//             <div className="absolute right-28 w-[24%]">
//               <Searchinput
//                 icon={searchIcon}
//                 para="Search by Invoice no or client Name"
//                 value={search}
//                 onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//                   setSearch(e.target.value)
//                 }
//               />
//             </div>
//           </div>

//           <table className="w-full text-center">
//             <thead className="text-xl">
//               <tr className="grid grid-cols-6 font-iceberg font-normal">
//                 <th className="p-3 border">Invoice No</th>
//                 <th className="p-3 border">type</th>
//                 <th className="p-3 border">Client</th>
//                 <th className="p-3 border">Date Issued</th>
//                 <th className="p-3 border">Amount</th>
//                 <th className="p-3 border">Status</th>
//               </tr>
//             </thead>

//             <tbody>
//               {filteredInvoices.map((invoice, index) => (
//                 <tr
//                   key={index}
//                   className="hover:bg-gray-50 grid grid-cols-6"
//                 >
//                   <td className="p-3 border">{invoice.id}</td>
//                   <td className="p-3 border">{invoice.type}</td>
//                   <td className="p-3 border">{invoice.client}</td>
//                   <td className="p-3 border">{invoice.date}</td>
//                   <td className="p-3 border">
//                     ₹{invoice.amount.toLocaleString()}
//                   </td>
//                   <td className="p-3 border">
//                     .  {invoice.status}
//                   </td>
//                 </tr>
//               ))}

//               {filteredInvoices.length === 0 && (
//                 <tr>
//                   <td colSpan={6} className="p-5">
//                     No invoices found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecentInvoices;

// import React, { useState, useEffect } from "react";
// import searchIcon from "@/assets/filter/search.svg";
// import Searchinput from "../Filter/Searchinput";
// // import { getInvoices } from "@/utils/getInvoices";
// import { getInvoices } from "@/utils/getInvoice";

// export interface Invoice {
//   id: string;
//   type: string;
//   client: string;
//   date: string;
//   amount: number;
//   status: "paid" | "pending";
// }

// const RecentInvoices: React.FC = () => {

//   const [invoices, setInvoices] = useState<Invoice[]>([]);
//   const [filter, setFilter] = useState<"all" | "paid" | "pending" | "type">("all");
//   const [search, setSearch] = useState("");

//   // FETCH INVOICES FROM FIRESTORE
//   useEffect(() => {

//     const fetchInvoices = async () => {

//       const data = await getInvoices();

//       setInvoices(data);

//     };

//     fetchInvoices();

//   }, []);

//   const filteredInvoices = invoices.filter((item) => {

//     const matchSearch =
//       item.id.toLowerCase().includes(search.toLowerCase()) ||
//       item.client.toLowerCase().includes(search.toLowerCase()) ||
//       item.type.toLowerCase().includes(search.toLowerCase());

//     const matchStatus =
//       filter === "all"
//         ? true
//         : filter === "type"
//         ? true
//         : item.status === filter;

//     return matchSearch && matchStatus;

//   });

//   return (

//     <div>

//       <h2 className="text-3xl font-iceberg mb-4 mt-10">
//         Recent Invoices
//       </h2>

//       <div className="">
//         <div className="w-[93.5%] rounded-xl overflow-hidden border-2 border-black">

//           <div className="flex justify-between items-center p-5">

//             <div className="flex gap-14 font-iceberg text-xl">

//               <button
//                 className={`rounded-md h-8 w-28 hover:bg-[#136CED80] ${filter === "all" ? "bg-[#136CED80]" : ""}`}
//                 onClick={() => setFilter("all")}
//               >
//                 all Invoices
//               </button>

//               <button
//                 className={`rounded-md h-8 w-12 hover:bg-[#136CED80] ${filter === "paid" ? "bg-[#136CED80]" : ""}`}
//                 onClick={() => setFilter("paid")}
//               >
//                 paid
//               </button>

//               <button
//                 className={`rounded-md h-8 w-20 hover:bg-[#136CED80] ${filter === "pending" ? "bg-[#136CED80]" : ""}`}
//                 onClick={() => setFilter("pending")}
//               >
//                 pending
//               </button>

//               <button
//                 className={`rounded-md h-8 w-20 hover:bg-[#136CED80] ${filter === "type" ? "bg-[#136CED80]" : ""}`}
//                 onClick={() => setFilter("type")}
//               >
//                 type
//               </button>

//             </div>

//             <div className="absolute right-28 w-[24%]">

//               <Searchinput
//                 icon={searchIcon}
//                 para="Search by Invoice no or client Name"
//                 value={search}
//                 onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//                   setSearch(e.target.value)
//                 }
//               />

//             </div>

//           </div>

//           <table className="w-full text-center">

//             <thead className="text-xl">

//               <tr className="grid grid-cols-6 font-iceberg font-normal">

//                 <th className="p-3 border">Invoice No</th>
//                 <th className="p-3 border">type</th>
//                 <th className="p-3 border">Client</th>
//                 <th className="p-3 border">Date Issued</th>
//                 <th className="p-3 border">Amount</th>
//                 <th className="p-3 border">Status</th>

//               </tr>

//             </thead>

//             <tbody>

//               {filteredInvoices.map((invoice) => (

//                 <tr
//                   key={invoice.id}
//                   className="hover:bg-gray-50 grid grid-cols-6"
//                 >

//                   <td className="p-3 border">{invoice.id}</td>
//                   <td className="p-3 border">{invoice.type}</td>
//                   <td className="p-3 border">{invoice.client}</td>
//                   <td className="p-3 border">{invoice.date}</td>

//                   <td className="p-3 border">
//                     ₹{invoice.amount.toLocaleString()}
//                   </td>

//                   <td className="p-3 border">
//                     {invoice.status}
//                   </td>

//                 </tr>

//               ))}

//               {filteredInvoices.length === 0 && (

//                 <tr>
//                   <td colSpan={6} className="p-5">
//                     No invoices found
//                   </td>
//                 </tr>

//               )}

//             </tbody>

//           </table>

//         </div>
//       </div>
//     </div>

//   );
// };

// export default RecentInvoices;


import React, { useState, useEffect } from "react";
import searchIcon from "@/assets/filter/search.svg";
import Searchinput from "../Filter/Searchinput";
import { getInvoices } from "@/utils/getInvoice";

export interface Invoice {
  id: string;
  type: string;
  client: string;
  date: String;
  amount: number;
  status: "paid" | "pending";

}

const RecentInvoices: React.FC = () => {

  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [filter, setFilter] = useState<"all" | "paid" | "pending" | "type">("all");
  const [search, setSearch] = useState("");

  // FETCH INVOICES FROM FIRESTORE
  useEffect(() => {

    const fetchInvoices = async () => {

      const data = await getInvoices();

      const formattedData: Invoice[] = data.map((item: any) => ({
        id: item.id,
        type: item.type,
        client: item.client,
        amount: item.amount,

        // 🔥 FIX STATUS HERE
        status: item.status.toLowerCase(),

        date: item.date?.toDate ? item.date.toDate() : item.date,
      }));

      setInvoices(formattedData);

    };

    fetchInvoices();

  }, []);

  const filteredInvoices = invoices.filter((item) => {

    const matchSearch =
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.client.toLowerCase().includes(search.toLowerCase()) ||
      item.type.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      filter === "all"
        ? true
        : filter === "type"
        ? true
          : item.status === filter.toLowerCase() as "paid" | "pending";

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

              <button
                className={`rounded-md h-8 w-20 hover:bg-[#136CED80] ${filter === "type" ? "bg-[#136CED80]" : ""}`}
                onClick={() => setFilter("type")}
              >
                Type
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

              <tr className="grid grid-cols-6 font-iceberg font-normal">

                <th className="p-3 border">Invoice No</th>
                <th className="p-3 border">type</th>
                <th className="p-3 border">Client</th>
                <th className="p-3 border">Date Issued</th>
                <th className="p-3 border">Amount</th>
                <th className="p-3 border">Status</th>

              </tr>

            </thead>

            <tbody>

              {filteredInvoices.map((invoice) => (

                <tr
                  key={invoice.id}
                  className="hover:bg-gray-50 grid grid-cols-6"
                >

                  <td className="p-3 border">{invoice.id}</td>
                  <td className="p-3 border">{invoice.type}</td>
                  <td className="p-3 border">{invoice.client}</td>
                  <td className="p-3 border"> {invoice.date}

</td>

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

