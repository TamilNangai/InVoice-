import { useState } from "react";
import { db } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { Invoice } from "@/types/invoice";

type Props = {
    invoice: Invoice;
    onClose: () => void;
    onUpdate: (updated: Invoice) => void;
};

const EditInvoiceModal: React.FC<Props> = ({ invoice, onClose }) => {

    // ✅ Safe (price always exists from table normalization)
    const totalAmount = Math.round(invoice.amount ?? 0);
    const paid = Math.round(invoice.paidAmount ?? 0);
    const initialPending = Math.round(invoice.pending ?? 0);
const parseDate = (dateStr?: string) => {
    if (!dateStr) return;

    // ISO format
    if (dateStr.includes("-") && dateStr.split("-")[0].length === 4) {
        return new Date(dateStr);
    }

    // dd-mm-yyyy fallback
    const parts = dateStr.split("-");
    if (parts.length === 3) {
        const [day, month, year] = parts.map(Number);
        return new Date(year, month - 1, day);
    }

    return null;
};
const dueDateFromInvoice = invoice.dueDate;

    const [dueAmount, setDueAmount] = useState(0);

    // ✅ Live calculations
    const updatedPaid = paid + dueAmount;
    const updatedPending = Math.max(initialPending - dueAmount, 0);
    const now = new Date();

    const TodayDate = `${String(now.getDate()).padStart(2, "0")}-${String(
        now.getMonth() + 1
    ).padStart(2, "0")}-${now.getFullYear()}`;

let status: "paid" | "pending" | "overdue" = "pending";

if (updatedPending === 0) {
    status = "paid";
} else {
    const dueDateObj = parseDate(dueDateFromInvoice);

    if (dueDateObj) {
        const today = new Date();

        today.setHours(0, 0, 0, 0);
        dueDateObj.setHours(0, 0, 0, 0);

        if (today > dueDateObj) {
            status = "overdue";
        } else {
            status = "pending";
        }
    }
}


    const handleSave = async () => {
        try {
            const updatedData = {
                paymentHistory: [
                    ...(invoice.paymentHistory || []),
                    {
                        pending: updatedPending,
                        DueDate: TodayDate,
                        paid: updatedPaid,
                        due: dueAmount,
                    }
                ],
                status,

            };

            const ref = doc(db, "invoices", invoice.uniqueId);
            await updateDoc(ref, updatedData);
          

            onClose();
        } catch (err) {
            console.error("Update failed", err);
        }
    };


    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white border border-black rounded-lg p-6 w-[400px] shadow-xl">

                <h2 className="text-xl font-bold mb-4">Edit Invoice</h2>

                {/* Paid Amount */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Paid Amount</label>
                    <div className="w-full border p-2 rounded text-gray-700">
                        ₹ {updatedPaid}/-
                    </div>
                </div>

                {/* Total */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Total Amount</label>
                    <div className="w-full border p-2 rounded text-gray-700">
                        ₹ {totalAmount}/-
                    </div>
                </div>

                {/* Pending */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Pending</label>
                    <div className="w-full border p-2 rounded text-gray-700">
                        ₹ {updatedPending}/-
                    </div>
                </div>

                {/* Due Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Due Amount</label>
                    <input
                        type="number"
                        value={dueAmount}
                        onChange={(e) => {
                            const value = Number(e.target.value);

                            // ✅ Prevent overpayment
                            if (value >= 0 && value <= initialPending) {
                                setDueAmount(value);
                            }
                        }}
                        className="w-full border p-2 rounded"
                    />
                </div>

                {/* Status */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Status</label>
                    <div
                        className={`w-full p-2 border border-black rounded-lg ${status === "paid"
                            ? "text-green-700"
                            : status === "pending"
                                ? "text-yellow-700"
                                : "text-red-700"
                            }`}
                    >
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-3">
                    <button onClick={onClose} className="px-3 py-1 bg-gray-200 rounded">
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={dueAmount <= 0}
                        className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
                    >
                        Save
                    </button>
                </div>

            </div>
        </div>
    );
};

export default EditInvoiceModal;