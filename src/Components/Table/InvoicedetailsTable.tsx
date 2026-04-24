import { useState } from "react";
import BaseTable from "./BaseTable";
import EditInvoiceModal from "@/Components/Invoice/EditInvoiceModal";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import download from "@/assets/download.png";
import edit from "@/assets/edit.png";
import { generateInvoicePDF } from "@/utils/generateInvoicePDF";
import { formatLabel } from "@/utils/formatLabel";
import { Invoice } from "@/types/invoice";

interface InvoiceDetailsTableProps {
    invoices: Invoice[];
    onUpdateInvoice: (updated: Invoice) => void;
}

const InvoicedetailsTable: React.FC<InvoiceDetailsTableProps> = ({ invoices, onUpdateInvoice }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
    const [showModal, setShowModal] = useState(false);
    // const [openMenuId, setOpenMenuId] = useState<string | null>(null);

    // useEffect(() => {
    //     const closeMenu = () => setOpenMenuId(null);
    //     window.addEventListener("click", closeMenu);
    //     return () => window.removeEventListener("click", closeMenu);
    // }, []);

    const rowsPerPage = 6;
    const totalPages = Math.ceil(invoices.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const currentRows = invoices.slice(startIndex, startIndex + rowsPerPage);

    const typeBadge = (type: string) => {
        const t = type.toLowerCase();

        if (t === "internship") return "px-3 py-1  rounded-md font-medium bg-blue-500 text-white";
        if (t === "product") return "px-3 py-1  rounded-md font-medium bg-green-500 text-white";
        if (t === "others") return "px-3 py-1  rounded-md font-medium bg-gray-400 text-white";
        if (t === "service") return "px-3 py-1  rounded-md font-medium bg-[#FFCC00] text-white";

        return "px-3 py-1  rounded-md font-medium";
    };

    const statusColor = (status: string) => {
        const s = status?.toLowerCase();
        switch (s) {
            case "paid": return "text-green-500";
            case "pending": return "text-yellow-500";
            case "overdue": return "text-red-500";
            default: return "";
        }
    };

    const parseDate = (dateStr?: string) => {
        if (!dateStr) return null;
        const [day, month, year] = dateStr.split("-").map(Number);
        return new Date(year, month - 1, day);
    };

    // ✅ ONLY USE FLAT STRUCTURE (your type)
    const formatInvoice = (inv: Invoice) => ({
        ...inv,
        subtotal: inv.amount ?? 0,
        paidAmount: inv.paidAmount ?? 0,
        pending: inv.pending ?? 0,
    });

    const handleBulkDownload = async () => {
        const zip = new JSZip();

        for (const inv of invoices) {
            const doc = await generateInvoicePDF(formatInvoice(inv));
            const pdfBlob = doc.output("blob");
            zip.file(`Invoice_${inv.invoiceId}.pdf`, pdfBlob);
        }

        const date = new Date().toISOString().split("T")[0];
        const zipBlob = await zip.generateAsync({ type: "blob" });
        saveAs(zipBlob, `Invoices_Batch_${date}.zip`);
    };

    const handleDownload = async (invoice: Invoice) => {
        const doc = await generateInvoicePDF(formatInvoice(invoice));
        doc.save(`Invoice_${invoice.invoiceId}.pdf`);
    };

    return (
        <div className="w-full border-2 border-black rounded-2xl m-2 lg:m-4 xl:m-8 ">

            {/* Scrollable table area */}
            <div className="overflow-x-auto">
                <BaseTable variant="grid">
                    <BaseTable.Header>
                        <BaseTable.Row>
                            <BaseTable.HeadCell><div className="font-iceberg font-normal  lg:text-xl whitespace-nowrap px-1">Invoice NO / Type</div></BaseTable.HeadCell>
                            <BaseTable.HeadCell className="hidden xl:table-cell"><div className="font-iceberg font-normal  lg:text-xl whitespace-nowrap lg:px-1  ">Date</div></BaseTable.HeadCell>
                            <BaseTable.HeadCell><div className="font-iceberg font-normal  lg:text-xl whitespace-nowrap px-1">Client / Student Name</div></BaseTable.HeadCell>
                            <BaseTable.HeadCell><div className="font-iceberg font-normal  lg:text-xl whitespace-nowrap px-1">Amount</div></BaseTable.HeadCell>
                            <BaseTable.HeadCell className="hidden xl:table-cell"><div className="font-iceberg font-normal  lg:text-xl whitespace-nowrap px-1  ">Paid</div></BaseTable.HeadCell>
                            <BaseTable.HeadCell><div className="font-iceberg font-normal  lg:text-xl whitespace-nowrap px-1">Pending</div></BaseTable.HeadCell>
                            <BaseTable.HeadCell><div className="font-iceberg font-normal  lg:text-xl whitespace-nowrap px-1">Status</div></BaseTable.HeadCell>
                            
                            <BaseTable.HeadCell>
                                <button className="rounded-md hover:bg-gray-200 p-1 md:p-2 " onClick={handleBulkDownload}>
                                    <img src={download} alt="download" className="w-3 h-3 md:w-5 md:h-5" />
                                </button>
                            </BaseTable.HeadCell>
                        </BaseTable.Row>
                    </BaseTable.Header>

                    <BaseTable.Body>
                        {currentRows.map((item) => {
                            const total = Math.round(item.amount ?? 0);
                            const pending = Math.round(item.pending ?? 0);
                            let displayStatus = "pending";

                            const dueDate = parseDate(item.dueDate);
                            const today = new Date();

                            if (pending === 0) {
                                displayStatus = "paid";
                            } else if (dueDate && today > dueDate) {
                                displayStatus = "overdue";
                            } else {
                                displayStatus = "pending";
                            }

                            return (
                                <BaseTable.Row key={item.uniqueId}>
                                    <BaseTable.Cell>
                                        <div className="text-center  whitespace-nowrap">{item.invoiceId}</div>
                                        <div className="flex justify-center text-sm md:text-sm lg:text-xl ">
                                            <span className={typeBadge(item.type)}>
                                                {formatLabel(item.type)}
                                            </span>
                                        </div>
                                    </BaseTable.Cell>

                                    <BaseTable.Cell className="hidden xl:table-cell">
                                        <div className="text-center   whitespace-nowrap">{item.date}</div>
                                    </BaseTable.Cell>

                                    <BaseTable.Cell>
                                        <div className="flex flex-col">
                                            <span className="font-iceberg  whitespace-nowrap">{item.client}</span>
                                            <span className=" text-gray-500 whitespace-nowrap">{item.sub || ""}</span>
                                        </div>
                                    </BaseTable.Cell>

                                    <BaseTable.Cell>
                                        <div className="text-center  whitespace-nowrap">₹ {total}/-</div>
                                    </BaseTable.Cell>

                                    <BaseTable.Cell className="hidden xl:table-cell">
                                        <div></div>
                                    </BaseTable.Cell>

                                    <BaseTable.Cell>
                                        <div className="text-center  whitespace-nowrap">₹ {pending}/-</div>
                                    </BaseTable.Cell>

                                    <BaseTable.Cell>
                                        <span className={`${statusColor(displayStatus)}  whitespace-nowrap`}>
                                            {formatLabel(displayStatus)}
                                        </span>
                                    </BaseTable.Cell>

                                    {/* <BaseTable.Cell>
                                        <div className="relative flex justify-center">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setOpenMenuId(openMenuId === item.uniqueId ? null : item.uniqueId);
                                                }}
                                                className="text-xl md:text-3xl font-bold"
                                            >
                                                ⋮
                                            </button>

                                            {openMenuId === item.uniqueId && (
                                                <div className="absolute bottom-8 right-0 bg-white border rounded shadow-md z-50 w-24 md:w-32">
                                                    <button
                                                        onClick={() => { setSelectedInvoice(item); setShowModal(true); setOpenMenuId(null); }}
                                                        className="w-full px-2 md:px-3 py-1.5 md:py-2 hover:bg-gray-100 text-left  md:text-sm"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDownload(item)}
                                                        className="w-full px-2 md:px-3 py-1.5 md:py-2 hover:bg-gray-100 text-left  md:text-sm"
                                                    >
                                                        Download
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </BaseTable.Cell> */}
                                    <BaseTable.Cell>
                                        <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-4">
                                            <button
                                                onClick={() => { setSelectedInvoice(item); setShowModal(true); }}
                                               
                                            >
                                                <img className="w-3 h-3 md:w-5 md:h-5" src={edit} alt={edit} />
                                            </button>
                                            <button
                                                onClick={() => handleDownload(item)}
                                            >
                                                <img className="w-3 h-3 md:w-5 md:h-5" src={download} alt={download} />
                                            </button>
                                        </div>
                                    </BaseTable.Cell>
                                </BaseTable.Row>
                            );
                        })}
                    </BaseTable.Body>
                </BaseTable>
            </div>

            {/* Pagination - outside scroll area */}
            {showModal && selectedInvoice && (
                <EditInvoiceModal
                    invoice={selectedInvoice}
                    onClose={() => setShowModal(false)}
                    onUpdate={(updated) => {
                        onUpdateInvoice(updated);
                        setShowModal(false);
                    }}
                />
            )}

            <div className="flex justify-between items-center px-3 md:px-5 py-3 md:py-4 border-t">
                <div className=" md:text-sm">
                    Showing {startIndex + 1} to {Math.min(startIndex + rowsPerPage, invoices.length)} of {invoices.length} Results
                </div>
                <div className="flex gap-2 md:gap-4">
                    <button
                        onClick={() => setCurrentPage((prev) => prev > 1 ? prev - 1 : prev)}
                        disabled={currentPage === 1}
                        className="px-2 md:px-3 py-1 border rounded bg-gray-200 text-sm disabled:opacity-50"
                    >
                        &#8249;
                    </button>
                    <button
                        onClick={() => setCurrentPage((prev) => prev < totalPages ? prev + 1 : prev)}
                        disabled={currentPage === totalPages}
                        className="px-2 md:px-3 py-1 border rounded bg-gray-200 text-sm disabled:opacity-50"
                    >
                        &#8250;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InvoicedetailsTable;