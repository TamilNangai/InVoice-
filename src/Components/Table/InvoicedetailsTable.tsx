import { useState } from "react";
import BaseTable from "./BaseTable";
type Props = {
    invoices: any[];
};

const InvoicedetailsTable = ({ invoices }: Props) => {

        const [currentPage, setCurrentPage] = useState(1);
        const rowsPerPage = 6;

        const totalPages = Math.ceil(invoices.length / rowsPerPage);

        const startIndex = (currentPage - 1) * rowsPerPage;

        const currentRows = invoices.slice(
            startIndex,
            startIndex + rowsPerPage
        );



    const typeBadge = (type: string) => {
        const base = "px-3 py-1 text-xs rounded-md font-medium";

        switch (type) {
            case "Internship": return `${base} bg-blue-500 text-white`;
            case "Product": return `${base} bg-green-500 text-white`;
            case "Others": return `${base} bg-gray-400 text-white`;
            default: return base;
        }
    };
    const statusColor = (status: string) => {
        switch (status) {
            case "Paid": return "text-green-500";
            case "Pending": return "text-yellow-500";
            case "Over Due": return "text-red-500";
            default: return "";

        }
    };
    return (
        <div className="w-[95%]   border-2 border-black rounded-2xl overflow-hidden">
            <BaseTable variant="grid">
                <BaseTable.Header>
                    <BaseTable.Row>
                        <BaseTable.HeadCell><div className="font-iceberg text-[22px]">Invoice NO</div></BaseTable.HeadCell>
                        <BaseTable.HeadCell><div className="font-iceberg text-[22px]">Type</div></BaseTable.HeadCell>
                        <BaseTable.HeadCell><div className="font-iceberg text-[22px]">Client / Student Name</div></BaseTable.HeadCell>
                        <BaseTable.HeadCell><div className="font-iceberg text-[22px]">Amount</div></BaseTable.HeadCell>
                        <BaseTable.HeadCell><div className="font-iceberg text-[22px]">Status</div></BaseTable.HeadCell>
                        <BaseTable.HeadCell><div className="font-iceberg text-[22px]">Pending</div></BaseTable.HeadCell>
                        <BaseTable.HeadCell><div className="font-iceberg text-[22px]">Date</div></BaseTable.HeadCell>
                        <BaseTable.HeadCell> </BaseTable.HeadCell>
                    </BaseTable.Row>
                </BaseTable.Header>
                <BaseTable.Body> 
                {currentRows.map((item, index) => (
                    <BaseTable.Row key={index}>                              
                        <BaseTable.Cell><div className="font-sanchez text-[16px]">{item.no}</div> </BaseTable.Cell>
                        <BaseTable.Cell><span className={`font-iceberg text-[14px] ${typeBadge(item.type)}`}>{item.type}</span></BaseTable.Cell>
                        <BaseTable.Cell><div className="font-medium font-iceberg text-[18px]">{item.name}</div> <div className="text-[12px] font-sanchez text-gray-600">{item.sub}</div></BaseTable.Cell>
                        <BaseTable.Cell><div className="text-[16px] font-sanchez">₹{item.amount}</div></BaseTable.Cell>
                        <BaseTable.Cell><span className={`font-medium text-[16px] font-sanchez ${statusColor(item.status)}`} >• {item.status}</span></BaseTable.Cell>
                        <BaseTable.Cell><div className="text-[16px] font-sanchez">{item.pending}</div></BaseTable.Cell>
                        <BaseTable.Cell><div className="text-[16px] font-sanchez">{item.date}</div></BaseTable.Cell>
                        <BaseTable.Cell><button className="text-3xl font-bold hover:text-gray-700"> ⋮ </button></BaseTable.Cell>
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