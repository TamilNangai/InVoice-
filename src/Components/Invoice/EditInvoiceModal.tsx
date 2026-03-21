import { useState, useEffect } from "react";
import { db } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";

type Props = {
    invoice: any;
    onClose: () => void;
    onUpdate: (updated: any) => void;
};

const EditInvoiceModal: React.FC<Props> = ({ invoice, onClose, onUpdate }) => {
    const [total] = useState(Math.round(invoice.amount + (invoice.pending ?? 0))); // total = amount + pending
    const [pending, setPending] = useState(Math.round(invoice.pending ?? 0));
    const [status, setStatus] = useState(invoice.status);

    // Auto-update status whenever pending changes
    useEffect(() => {
        const roundedPending = Math.round(pending);

        if (roundedPending === 0) setStatus("paid");
        else if (roundedPending > 0) setStatus("pending");
        else setStatus(invoice.status);
    }, [pending, invoice.status]);

    const handleSave = async () => {
        try {
            const roundedPending = Math.round(pending);
            const updatedAmount = total - roundedPending; // auto-calc amount

            const updatedData = {
                amount: updatedAmount >= 0 ? updatedAmount : 0,
                pending: roundedPending,
                status,
            };

            const ref = doc(db, "invoices", invoice.uniqueId);
            await updateDoc(ref, updatedData);

            // Pass updated invoice back to table
            onUpdate({ ...invoice, ...updatedData });
            onClose();
        } catch (err) {
            console.error("Update failed", err);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white border border-black rounded-lg p-6 w-[400px] shadow-xl">

                <h2 className="text-xl font-bold mb-4">Edit Invoice</h2>

                {/* Amount (auto-updates) */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Amount</label>
                    <div className="w-full border p-2 rounded text-gray-700">
                        ₹ {total - Math.round(pending)}/-
                    </div>
                </div>

                {/* Pending (editable) */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Pending</label>
                    <input
                        type="number"
                        value={pending}
                        onChange={(e) => setPending(Number(e.target.value))}
                        className="w-full border p-2 rounded"
                    />
                </div>

                {/* Status */}
                <div className="mb-4 ">
                    <label className="block text-gray-700 font-medium mb-1">Status</label>
                    <div
                        className={`w-full  p-2 border border-black rounded-lg ${status === "paid"
                                ? " text-green-700"
                                : status === "pending"
                                    ? " text-yellow-700"
                                    : " text-red-700"
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
                    <button onClick={handleSave} className="px-3 py-1 bg-blue-500 text-white rounded">
                        Save
                    </button>
                </div>

            </div>
        </div>
    );
};

export default EditInvoiceModal;
