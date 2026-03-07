import { useState } from "react";
import BaseTable from "./BaseTable";
const InvoicedetailsTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 6;
    const invoices = [{ no: "INV-2025-012", type: "Internship", name: "Hariharan S", sub: "HR Internship", amount: "5000/-", status: "Paid", pending: "5000/-", date: "Dec 28,2025" }, { no: "INV-2025-011", type: "Product", name: "Swetha S", sub: "Invoice Management", amount: "100000/-", status: "Pending", pending: "100000/-", date: "Dec 02,2025" }, { no: "INV-2025-010", type: "Internship", name: "Tamil K", sub: "Web Development Internship", amount: "10000/-", status: "Over Due", pending: "10000/-", date: "Nov 28,2025" }, { no: "INV-2025-009", type: "Product", name: "Akash K", sub: "Attendance Management", amount: "200000/-", status: "Paid", pending: "200000/-", date: "Nov 02,2025" }, { no: "INV-2025-008", type: "Others", name: "Akash K", sub: "Some things", amount: "20000/-", status: "Pending", pending: "20000/-", date: "Oct 28,2025" }, { no: "INV-2025-007", type: "Internship", name: "Swetha S", sub: "Digital Marketing Internship", amount: "4000/-", status: "Over Due", pending: "4000/-", date: "Oct 02,2025" }, { no: "INV-2025-006", type: "Product", name: "Arun", sub: "CRM System", amount: "60000/-", status: "Paid", pending: "60000/-", date: "Sep 28,2025" }, { no: "INV-2025-005", type: "Internship", name: "Meena", sub: "AI Internship", amount: "8000/-", status: "Pending", pending: "8000/-", date: "Sep 02,2025" }, { no: "INV-2025-012", type: "Internship", name: "Hariharan S", sub: "HR Internship", amount: "5000/-", status: "Paid", pending: "5000/-", date: "Dec 28,2025" }, { no: "INV-2025-011", type: "Product", name: "Swetha S", sub: "Invoice Management", amount: "100000/-", status: "Pending", pending: "100000/-", date: "Dec 02,2025" }, { no: "INV-2025-010", type: "Internship", name: "Tamil K", sub: "Web Development Internship", amount: "10000/-", status: "Over Due", pending: "10000/-", date: "Nov 28,2025" }, { no: "INV-2025-009", type: "Product", name: "Akash K", sub: "Attendance Management", amount: "200000/-", status: "Paid", pending: "200000/-", date: "Nov 02,2025" }, { no: "INV-2025-008", type: "Others", name: "Akash K", sub: "Some things", amount: "20000/-", status: "Pending", pending: "20000/-", date: "Oct 28,2025" }, { no: "INV-2025-007", type: "Internship", name: "Swetha S", sub: "Digital Marketing Internship", amount: "4000/-", status: "Over Due", pending: "4000/-", date: "Oct 02,2025" }, { no: "INV-2025-006", type: "Product", name: "Arun", sub: "CRM System", amount: "60000/-", status: "Paid", pending: "60000/-", date: "Sep 28,2025" }, { no: "INV-2025-005", type: "Internship", name: "Meena", sub: "AI Internship", amount: "8000/-", status: "Pending", pending: "8000/-", date: "Sep 02,2025" }, { no: "INV-2025-012", type: "Internship", name: "Hariharan S", sub: "HR Internship", amount: "5000/-", status: "Paid", pending: "5000/-", date: "Dec 28,2025" }, { no: "INV-2025-011", type: "Product", name: "Swetha S", sub: "Invoice Management", amount: "100000/-", status: "Pending", pending: "100000/-", date: "Dec 02,2025" }, { no: "INV-2025-010", type: "Internship", name: "Tamil K", sub: "Web Development Internship", amount: "10000/-", status: "Over Due", pending: "10000/-", date: "Nov 28,2025" }, { no: "INV-2025-009", type: "Product", name: "Akash K", sub: "Attendance Management", amount: "200000/-", status: "Paid", pending: "200000/-", date: "Nov 02,2025" }, { no: "INV-2025-008", type: "Others", name: "Akash K", sub: "Some things", amount: "20000/-", status: "Pending", pending: "20000/-", date: "Oct 28,2025" }, { no: "INV-2025-007", type: "Internship", name: "Swetha S", sub: "Digital Marketing Internship", amount: "4000/-", status: "Over Due", pending: "4000/-", date: "Oct 02,2025" }, { no: "INV-2025-006", type: "Product", name: "Arun", sub: "CRM System", amount: "60000/-", status: "Paid", pending: "60000/-", date: "Sep 28,2025" }, { no: "INV-2025-005", type: "Internship", name: "Meena", sub: "AI Internship", amount: "8000/-", status: "Pending", pending: "8000/-", date: "Sep 02,2025" },];
    const totalPages = Math.ceil(invoices.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const currentRows = invoices.slice(startIndex, startIndex + rowsPerPage);
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
        <div className="max-w-6xl mx-auto mt-10 border-2 border-black rounded-2xl overflow-hidden">
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
    {/* Footer */ }
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