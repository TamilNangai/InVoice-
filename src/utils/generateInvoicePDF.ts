import jsPDF from "jspdf";
import { Invoice } from "@/types/invoice";

export const generateInvoicePDF = (inv: Invoice): jsPDF => {
    const doc = new jsPDF();
    let y = 20;

    // --- HELPERS ---
    const safeText = (text: any) => (text && text.toString().trim() !== "" ? text.toString() : "-");

    const formatCurrency = (num: number | string | undefined): string => {
        const value = Number(num);
        return isNaN(value) ? "0.00" : value.toLocaleString('en-IN', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    };

    // --- 1. HEADER (BRANDING) ---
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor(0, 0, 0);
    doc.text("DesFlyer", 15, y);

    // Blue Badge for Type
    const badgeText = `${inv.type || "General"} Invoice`;
    doc.setFillColor(25, 118, 240);
    doc.roundedRect(145, 12, 50, 10, 2, 2, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.text(badgeText, 150, 18.5);

    // Address & Contact
    doc.setTextColor(80, 80, 80);
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    y += 8;
    doc.text("237 DesFlyer, Kings College of Engineering", 15, y);
    y += 4;
    doc.text(`${inv.email || "desflyer.tech@gmail.com"} | +91 85259 13433`, 15, y);

    y += 8;
    doc.setDrawColor(220, 220, 220);
    doc.line(15, y, 195, y);

    // --- 2. BILL TO & INVOICE DETAILS ---
    y += 12;
    doc.setTextColor(0);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text(inv.type === "Internship" ? "BILLED TO STUDENT" : "BILL TO", 15, y);
    doc.text("Invoice Details", 140, y);

    y += 7;
    doc.setFontSize(11);
    doc.text(safeText(inv.client), 15, y); // Name

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(`Invoice #: ${safeText(inv.invoiceId)}`, 140, y);

    y += 5;
    // Added address line here to fix your "missing address" issue
    // doc.text(safeText(inv.address || inv.location), 15, y);
    // doc.text(`Date: ${safeText(inv.date)}`, 140, y);
    doc.text(safeText(inv.email), 15, y);
    doc.text(`Date: ${safeText(inv.date || "N/A")}`, 140, y );
    y += 5;
    doc.text(safeText(inv.phone), 15, y);
    doc.text(`Due Date: ${safeText(inv.dueDate)}`, 140, y);

    if (inv.university) {
        y += 7;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9);
        doc.text(safeText(inv.university), 15, y);
    }

    // --- 3. DYNAMIC HIGHLIGHT BOX ---
    y += 10;
    doc.setDrawColor(0);
    doc.roundedRect(15, y, 180, 22, 2, 2);

    if (inv.type === "internship") {
        doc.setFontSize(8);
        doc.text("Program Enrolled", 20, y + 7);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.text(safeText(inv.programName || inv.sub), 20, y + 13);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.text(`Batch: ${safeText(inv.batch || "N/A")}`, 20, y + 18);
        doc.text(`Duration: ${safeText(inv.startDate + " - " + inv.endDate || "N/A")}`, 110, y + 18);
    } else {
        doc.setFontSize(9);
        doc.setFont("helvetica", "bold");
        doc.text("Product/Service", 20, y + 8);
        doc.setFont("helvetica", "normal");
        doc.text(safeText(inv.sub || "General Service"), 20, y + 15);
    }

    // --- 4. TABLE SECTION ---
    y += 35;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("Description", 17, y);
    doc.text("Amount (INR)", 170, y);

    y += 3;
    doc.setDrawColor(235, 235, 235);
    doc.line(15, y, 195, y);

    y += 8;
    const itemsList = inv.items && inv.items.length > 0
        ? inv.items
        : [{ name: inv.sub || "General Charges", id: inv.invoiceId, amount: inv.amount }];

    let runningSubtotal = 0;

    itemsList.forEach(item => {
        const itemAmount = Number(item.amount) || 0;
        runningSubtotal += itemAmount;

        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(0);
        doc.text(safeText(item.name), 17, y);
        doc.text(formatCurrency(itemAmount), 193, y, { align: "right" });

        y += 5;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(120, 120, 120);
        doc.text(`${safeText(item.id || inv.invoiceId)} | Service Item`, 17, y);

        y += 8;
        doc.line(15, y - 4, 195, y - 4);
        doc.setTextColor(0);
    });

    // --- 5. CALCULATION SECTION ---
    y += 5;
    const drawTotalRow = (label: string, value: any, isTotal = false) => {
        if (isTotal) {
            doc.setFont("helvetica", "bold");
            doc.setTextColor(25, 118, 240);
        } else {
            doc.setFont("helvetica", "normal");
            doc.setTextColor(50);
        }
        doc.text(label, 130, y);
        doc.text(isTotal ? `Rs. ${formatCurrency(value)}` : formatCurrency(value), 193, y, { align: "right" });
        y += 7;
    };

    // Robust Math Logic
    const subtotalToUse = Number(inv.subtotal) || runningSubtotal;
    const discount = Number(inv.discount) || 0;
    const gstRate = Number(inv.gst) || 0;
    const gstAmt = (subtotalToUse * gstRate) / 100;
    const finalAmt = subtotalToUse + gstAmt - discount;
    const paidAmount = Number(inv.paidAmount) || 0;

    drawTotalRow("Subtotal", subtotalToUse);
    drawTotalRow("Discount", discount);
    drawTotalRow(`GST (${gstRate}%)`, gstAmt);

    y += 2;
    doc.setDrawColor(200);
    doc.line(130, y, 195, y);
    y += 7;

    drawTotalRow("Total Amount", finalAmt, true);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(0);
    drawTotalRow("Paid Amount", paidAmount);

    doc.setFont("helvetica", "bold");
    drawTotalRow("Balance Due", finalAmt - paidAmount);

    return doc;
};