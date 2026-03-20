import { useState } from "react";
import BaseTable from "./BaseTable";
import { getInvoices } from "@/utils/getInvoice";
import { useEffect } from "react";


export type Invoice = {
    uniqueId: string;      
    invoiceId: string;    
    type: string;           
    client: string;        
    amount: number;        
    status: "paid" | "pending" | "overdue";
    pending?: number;       
    date: string;         
    sub?: string;          
};

interface InvoiceDetailsTableProps {
    invoices: Invoice[];
}

const InvoicedetailsTable: React.FC<InvoiceDetailsTableProps> = ({ invoices }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 6;

    const totalPages = Math.ceil(invoices.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const currentRows = invoices.slice(startIndex, startIndex + rowsPerPage);

    const typeBadge = (type: string) => {
        const t = type.toLowerCase();

        if (t === "internship") return "px-3 py-1 text-xs rounded-md font-medium bg-blue-500 text-white";
        if (t === "product") return "px-3 py-1 text-xs rounded-md font-medium bg-green-500 text-white";
        if (t === "others") return "px-3 py-1 text-xs rounded-md font-medium bg-gray-400 text-white";
        if (t === "service") return "px-3 py-1 text-xs rounded-md font-medium bg-[#FFCC00] text-white";


        return "px-3 py-1 text-xs rounded-md font-medium";
    };
    const statusColor = (status: string) => {
        const s = status.toLowerCase();
        switch (s) {
            case "paid": return "text-green-500";
            case "pending": return "text-yellow-500";
            case "overdue": return "text-red-500";
            default: return "";

        }
    };
    return (
        <div className="w-[95%]   border-2 border-black rounded-2xl  overflow-hidden">
            <BaseTable variant="grid" >
                <BaseTable.Header>
                    <BaseTable.Row>
                        <BaseTable.HeadCell><div className="font-iceberg  font-normal text-[22px] ">Invoice NO</div></BaseTable.HeadCell>
                        <BaseTable.HeadCell><div className="font-iceberg  font-normal text-[22px]">Type</div></BaseTable.HeadCell>
                        <BaseTable.HeadCell><div className="w-36 font-iceberg  font-normal text-[22px] text-center">Client  /  Student Name</div></BaseTable.HeadCell>
                        <BaseTable.HeadCell><div className="font-iceberg  font-normal text-[22px]">Amount</div></BaseTable.HeadCell>
                        <BaseTable.HeadCell><div className="font-iceberg  font-normal text-[22px]">Status</div></BaseTable.HeadCell>
                        <BaseTable.HeadCell><div className="font-iceberg  font-normal text-[22px]">Pending</div></BaseTable.HeadCell>
                        <BaseTable.HeadCell><div className="font-iceberg  font-normal text-[22px]">Date</div></BaseTable.HeadCell>
                        <BaseTable.HeadCell><button className="border-2 rounded-md hover:bg-blue-400 bg-blue-500 text-white px-2 py-2" >Download</button> </BaseTable.HeadCell>
                    </BaseTable.Row>
                </BaseTable.Header>
                <BaseTable.Body>
                    {currentRows.map((item) => (
                        <BaseTable.Row key={item.uniqueId}> 
                            <BaseTable.Cell><div className="font-sanchez text-[16px] text-center">{item.invoiceId}</div> </BaseTable.Cell>
                            <BaseTable.Cell>  <div className="flex justify-center items-center">
                                <span className={`font-iceberg text-[14px] ${typeBadge(item.type)}`}>{item.type}</span></div></BaseTable.Cell>
                            <BaseTable.Cell>
                                <div className="flex flex-col">
                                    <span className="font-iceberg text-[18px] text-black">
                                        {item.client}
                                    </span>
                                    <span className="font-sanchez text-[13px] text-gray-500 leading-tight">
                                        {item.sub || ""}
                                    </span>
                                </div>
                            </BaseTable.Cell>
                            <BaseTable.Cell><div className="text-[16px] font-sanchez text-center">₹ {item.amount}/-</div></BaseTable.Cell>
                            <BaseTable.Cell><span className={`font-medium text-[16px] font-sanchez text-center ${statusColor(item.status)}`} >•   {item.status}</span></BaseTable.Cell>
                            <BaseTable.Cell><div className="text-[16px] font-sanchez text-center">₹ {item.pending}/-</div></BaseTable.Cell>
                            <BaseTable.Cell><div className="text-[16px] font-sanchez text-center">{item.date}</div></BaseTable.Cell>
                            <BaseTable.Cell>  <div className="flex justify-center items-center">
                                <button className="text-3xl font-bold hover:text-gray-700"> ⋮ </button></div></BaseTable.Cell>
                        </BaseTable.Row>))
                    }
                </BaseTable.Body >
            </BaseTable >

            < div className="flex justify-between items-center px-5 py-4 border-t" >
                < div className="font-sanchez text-[20px] text-gray-700 " >
                    Showing {startIndex + 1} to{" "} {Math.min(startIndex + rowsPerPage, invoices.length)}
                    of{" "} {invoices.length} Results
                </ div >
                < div className="flex gap-4" >
                    < button onClick={() => setCurrentPage((prev) => prev > 1 ? prev - 1 : prev)} disabled={currentPage === 1} className="px-3 py-1 border border-black rounded bg-gray-200 disabled:opacity-50" > &#8249;
                    </ button >
                    < button onClick={() => setCurrentPage((prev) => prev < totalPages ? prev + 1 : prev)} disabled={currentPage === totalPages} className="px-3 py-1 border border-black rounded bg-gray-200 disabled:opacity-50" > &#8250;
                    </ button >
                </ div >

            </div >
        </div>
    );
};
export default InvoicedetailsTable;


// import { useState, useEffect } from "react";
// import BaseTable from "./BaseTable";

// export type Invoice = {
//     uniqueId: string;
//     invoiceId: string;
//     type: string;
//     client: string;
//     amount: number;
//     status: "Paid" | "Pending" | "Over Due";
//     pending?: number;
//     date: string;
//     sub?: string;
// };

// // ✅ ADD THIS
// type Props = {
//     invoices: Invoice[];
// };

// // ✅ ACCEPT PROPS HERE
// const InvoicedetailsTable: React.FC<Props> = ({ invoices }) => {

//     const [currentPage, setCurrentPage] = useState(1);
//     const rowsPerPage = 6;

//     // ❌ REMOVE fetching (you already get data from parent)
//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         const data = await getInvoices();
//     //         setInvoices(data);
//     //     };
//     //     fetchData();
//     // }, []);

//     const totalPages = Math.ceil(invoices.length / rowsPerPage);

//     const startIndex = (currentPage - 1) * rowsPerPage;

//     const currentRows = invoices.slice(
//         startIndex,
//         startIndex + rowsPerPage
//     );

//     const typeBadge = (type: string) => {
//         const t = type.toLowerCase();

//         if (t === "internship") return "px-3 py-1 text-xs rounded-md font-medium bg-blue-500 text-white";
//         if (t === "product") return "px-3 py-1 text-xs rounded-md font-medium bg-green-500 text-white";
//         if (t === "others") return "px-3 py-1 text-xs rounded-md font-medium bg-gray-400 text-white";
//         if (t === "service") return "px-3 py-1 text-xs rounded-md font-medium bg-red-500 text-white";

//         return "px-3 py-1 text-xs rounded-md font-medium";
//     };

//     const statusColor = (status: string) => {
//         switch (status) {
//             case "Paid": return "text-green-500";
//             case "Pending": return "text-yellow-500";
//             case "Over Due": return "text-red-500";
//             default: return "";
//         }
//     };

//     return (
//         <div className="w-[95%] border-2 border-black rounded-2xl overflow-hidden">
//             <BaseTable variant="grid">
//                 <BaseTable.Header>
//                     <BaseTable.Row>
//                         <BaseTable.HeadCell><div className="font-iceberg text-[22px]">Invoice NO</div></BaseTable.HeadCell>
//                         <BaseTable.HeadCell><div className="font-iceberg text-[22px]">Type</div></BaseTable.HeadCell>
//                         <BaseTable.HeadCell><div className="w-36 font-iceberg text-[22px] text-center">Client / Student Name</div></BaseTable.HeadCell>
//                         <BaseTable.HeadCell><div className="font-iceberg text-[22px]">Amount</div></BaseTable.HeadCell>
//                         <BaseTable.HeadCell><div className="font-iceberg text-[22px]">Status</div></BaseTable.HeadCell>
//                         <BaseTable.HeadCell><div className="font-iceberg text-[22px]">Pending</div></BaseTable.HeadCell>
//                         <BaseTable.HeadCell><div className="font-iceberg text-[22px]">Date</div></BaseTable.HeadCell>
//                         <BaseTable.HeadCell><button className="border-2 rounded-md hover:bg-blue-400 bg-blue-500 text-white px-2 py-2">Download</button></BaseTable.HeadCell>
//                     </BaseTable.Row>
//                 </BaseTable.Header>

//                 <BaseTable.Body>
//                     {currentRows.map((item) => (
//                         <BaseTable.Row key={item.uniqueId}>
//                             <BaseTable.Cell><div className="text-center">{item.invoiceId}</div></BaseTable.Cell>

//                             <BaseTable.Cell>
//                                 <div className="flex justify-center font-iceberg ">
//                                     <span className={`text-[14px] ${typeBadge(item.type)}`}>{item.type}</span>
//                                 </div>
//                             </BaseTable.Cell>

//                             <BaseTable.Cell>
//                                 <div className="flex flex-col">
//                                     <span className="font-iceberg text-[18px]">{item.client}</span>
//                                     <span className="text-gray-500 text-[14px] font-sanchez">{item.sub || ""}</span>
//                                 </div>
//                             </BaseTable.Cell>

//                             <BaseTable.Cell><div className="text-center">₹ {item.amount}/-</div></BaseTable.Cell>

//                             <BaseTable.Cell>
//                                 <span className={`${statusColor(item.status)}`}>• {item.status}</span>
//                             </BaseTable.Cell>

//                             <BaseTable.Cell><div className="text-center">₹ {item.pending}/-</div></BaseTable.Cell>

//                             <BaseTable.Cell><div className="text-center">{item.date}</div></BaseTable.Cell>

//                             <BaseTable.Cell>
//                                 <div className="flex justify-center">
//                                     <button className="text-3xl font-bold">⋮</button>
//                                 </div>
//                             </BaseTable.Cell>
//                         </BaseTable.Row>
//                     ))}
//                 </BaseTable.Body>
//             </BaseTable>

//             <div className="flex justify-between items-center px-5 py-4 border-t">
//                 <div>
//                     Showing {startIndex + 1} to {Math.min(startIndex + rowsPerPage, invoices.length)} of {invoices.length} Results
//                 </div>

//                 <div className="flex gap-4">
//                     <button
//                         onClick={() => setCurrentPage((prev) => prev > 1 ? prev - 1 : prev)}
//                         disabled={currentPage === 1}
//                         className="px-3 py-1 border rounded bg-gray-200 disabled:opacity-50"
//                     >
//                         &#8249;
//                     </button>

//                     <button
//                         onClick={() => setCurrentPage((prev) => prev < totalPages ? prev + 1 : prev)}
//                         disabled={currentPage === totalPages}
//                         className="px-3 py-1 border rounded bg-gray-200 disabled:opacity-50"
//                     >
//                         &#8250;
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default InvoicedetailsTable;