import { useState, useEffect } from "react";
import BaseTable from "./BaseTable";
import EditInvoiceModal from "@/Components/Invoice/EditInvoiceModal";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import download from "@/assets/download.png";
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
    const [openMenuId, setOpenMenuId] = useState<string | null>(null);

    useEffect(() => {
        const closeMenu = () => setOpenMenuId(null);
        window.addEventListener("click", closeMenu);
        return () => window.removeEventListener("click", closeMenu);
    }, []);

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
        const s = status?.toLowerCase();
        switch (s) {
            case "paid": return "text-green-500";
            case "pending": return "text-yellow-500";
            case "overdue": return "text-red-500";
            default: return "";
        }
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
        <div className="w-[95%] border-2 border-black rounded-2xl overflow-x-auto overflow-y-visible">
            <BaseTable variant="grid">
                <BaseTable.Header>
                    <BaseTable.Row>
                        <BaseTable.HeadCell><div className="font-iceberg font-normal text-[22px]">Invoice NO</div></BaseTable.HeadCell>
                        <BaseTable.HeadCell><div className="font-iceberg font-normal text-[22px]">Type</div></BaseTable.HeadCell>
                        <BaseTable.HeadCell><div className="w-36 font-iceberg font-normal text-[22px] ">Client / Student Name</div></BaseTable.HeadCell>
                        <BaseTable.HeadCell><div className="font-iceberg  font-normal text-[22px]">Amount</div></BaseTable.HeadCell>
                        <BaseTable.HeadCell><div className="font-iceberg font-normal text-[22px]">Status</div></BaseTable.HeadCell>
                        <BaseTable.HeadCell><div className="font-iceberg font-normal text-[22px]">Pending</div></BaseTable.HeadCell>
                        <BaseTable.HeadCell><div className="font-iceberg  font-normal text-[22px]">Date</div></BaseTable.HeadCell>
                        <BaseTable.HeadCell>
                            <button className="border-2 rounded-md hover:bg-gray-200 px-2 py-2" onClick={handleBulkDownload}>
                                <img src={download} alt="download" />
                            </button>
                        </BaseTable.HeadCell>
                    </BaseTable.Row>
                </BaseTable.Header>

                <BaseTable.Body>
                    {currentRows.map((item) => {

                        const total = Math.round(item.amount ?? 0);
                        const pending = Math.round(item.pending ?? 0);
                        const displayStatus = pending === 0 ? "paid" : item.status;

                        return (
                            <BaseTable.Row key={item.uniqueId}>
                                <BaseTable.Cell>
                                    <div className="text-center">{item.invoiceId}</div>
                                </BaseTable.Cell>

                                <BaseTable.Cell>
                                    <div className="flex justify-center ">
                                        <span className={typeBadge(item.type)}>
                                            {formatLabel(item.type)}
                                        </span>
                                    </div>
                                </BaseTable.Cell>

                                <BaseTable.Cell>
                                    <div className="flex flex-col ">
                                        <span className="font-iceberg">{item.client}</span>
                                        <span className="text-sm text-gray-500">
                                            {item.sub || ""}
                                        </span>
                                    </div>
                                </BaseTable.Cell>

                                <BaseTable.Cell>
                                    <div className="text-center">₹ {total}/-</div>
                                </BaseTable.Cell>

                                <BaseTable.Cell>
                                    <span className={statusColor(displayStatus)}>
                                        • {formatLabel(displayStatus)}
                                    </span>
                                </BaseTable.Cell>

                                <BaseTable.Cell>
                                    <div className="text-center">₹ {pending}/-</div>
                                </BaseTable.Cell>
                                <BaseTable.Cell>
                                    <div className="text-center">{item.date}</div>
                                </BaseTable.Cell>

                                <BaseTable.Cell>
                                    <div className="relative flex justify-center">

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setOpenMenuId(openMenuId === item.uniqueId ? null : item.uniqueId);
                                            }}
                                            className="text-3xl font-bold"
                                        >
                                            ⋮
                                        </button>

                                        {openMenuId === item.uniqueId && (
                                            <div className="absolute bottom-8 right-0 bg-white border rounded shadow-md z-50 w-32">

                                                <button
                                                    onClick={() => {
                                                        setSelectedInvoice(item);
                                                        setShowModal(true);
                                                        setOpenMenuId(null);
                                                    }}
                                                    className="w-full px-3 py-2 hover:bg-gray-100 text-left"
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    onClick={() => handleDownload(item)}
                                                    className="w-full px-3 py-2 hover:bg-gray-100 text-left"
                                                >
                                                    Download
                                                </button>

                                            </div>
                                        )}
                                    </div>
                                </BaseTable.Cell>
                            </BaseTable.Row>
                        );
                    })}
                </BaseTable.Body>
            </BaseTable>

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

            <div className="flex justify-between items-center px-5 py-4 border-t">
                <div>
                    Showing {startIndex + 1} to {Math.min(startIndex + rowsPerPage, invoices.length)}
                    of {invoices.length} Results
                </div>

                <div className="flex gap-4">
                    <button
                        onClick={() => setCurrentPage((prev) => prev > 1 ? prev - 1 : prev)}
                        disabled={currentPage === 1}
                        className="px-3 py-1 border rounded bg-gray-200"
                    >
                        &#8249;
                    </button>

                    <button
                        onClick={() => setCurrentPage((prev) => prev < totalPages ? prev + 1 : prev)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 border rounded bg-gray-200"
                    >
                        &#8250;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InvoicedetailsTable;