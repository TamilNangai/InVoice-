import jsPDF from "jspdf";
import { Invoice } from "@/types/invoice";
import { getSettings } from "./getSettings";

export const generateInvoicePDF = async (inv: Invoice): Promise<jsPDF> => {
    const doc = new jsPDF("p", "mm", "a4");
    const settings = await getSettings();
    const data = inv.rawData || {};

    let y = 20;
    const margin = 15;
    const pageWidth = doc.internal.pageSize.getWidth();
    const contentWidth = pageWidth - (margin * 2);

    const latestPayment =
        inv.paymentHistory && inv.paymentHistory.length > 0
            ? inv.paymentHistory[inv.paymentHistory.length - 1]
            : null;
    // --- HELPERS ---
    const formatCurrency = (num: any): string => {
        const val = parseFloat(num) || 0;
        return val.toLocaleString('en-IN', { minimumFractionDigits: 2 });
    };

    const drawLine = (yPos: number) => {
        doc.setDrawColor(200);
        doc.line(margin, yPos, margin + contentWidth, yPos);
    };

    // --- 1. HEADER ---
    doc.setFont("courier", "bold");  // Changed font family here
    doc.setFontSize(28);
    doc.setTextColor("#000");
    const companyTitle = settings?.companyName || "Your Company";
    doc.text(companyTitle, margin, y);

    // --- TYPE BADGE (matches table UI) ---

    let badgeColor = [59, 130, 246]; // <-- Changed to bright blue #3B82F6 (service)

    const badgeText = inv.type.toUpperCase();
    doc.setFontSize(12);
    const badgeWidth = doc.getTextWidth(badgeText) + 10;
    doc.setFillColor(badgeColor[0], badgeColor[1], badgeColor[2]);
    doc.roundedRect(pageWidth - margin - badgeWidth, y - 7, badgeWidth, 8, 1, 1, "F");
    doc.setTextColor(255);
    doc.setFont("courier", "bold");  // Use same font in badge text
    doc.text(badgeText, pageWidth - margin - badgeWidth + 5, y - 1);

    doc.setFont("courier", "normal");  // Set font for the rest of the document
    doc.setFontSize(10);
    doc.setTextColor(80);
    y += 8;
    doc.text("Incubation Cell, Kings College of Engineering, Punalkumlam", margin, y);
    y += 5;
    doc.text("desflyer.tech@gmail.com | +91 8525913433", margin, y);

    y += 10;
    drawLine(y);

    // --- 2. BILL TO & DETAILS ---
    y += 15;
    doc.setFont("courier", "bold");
    doc.setFontSize(12);
    doc.setTextColor("#000");
    doc.text("BILL TO", margin, y);
    doc.text("Invoice Details", margin + (contentWidth / 2) + 10, y);

    y += 8;
    doc.setFont("courier", "bold");
    doc.setFontSize(14);
    doc.setTextColor("#000");
    doc.text(inv.client || "N/A", margin, y);

    doc.setFont("courier", "normal");
    doc.setFontSize(12);
    doc.setTextColor('#000');
    doc.text(`Invoice :#${inv.invoiceId}`, margin + (contentWidth / 2) + 10, y);

    y += 6;
    doc.setTextColor('#000');
    doc.text(inv.email || "", margin, y);
    doc.setTextColor('#000');
    doc.text(`Date: ${inv.date}`, margin + (contentWidth / 2) + 10, y);

    y += 6;
    doc.text(inv.phone || "", margin, y);
    if (inv.dueDate) {
        doc.text(`Due Date: ${inv.dueDate}`, margin + (contentWidth / 2) + 10, y);
    }

    // --- 3. BOX SECTION (Internship / Product / Service) ---
    y += 12;
    doc.setDrawColor(0);
    doc.setLineWidth(0.2);
    doc.roundedRect(margin, y, contentWidth, 25, 3, 3);

    if (inv.type.toLowerCase() === "internship") {
        doc.setFontSize(12);
        doc.text(data.program?.traininghead || "Training Program", margin + 5, y + 8);
        doc.setFont("courier", "bold");
        doc.setFontSize(14);
        doc.text(data.program?.internship || inv.sub || "", margin + 5, y + 15);
        doc.setFont("courier", "normal");
        doc.setFontSize(9);
        doc.text(`Batch: ${data.program?.batch || "N/A"}`, margin + 5, y + 21);
        doc.text(`Duration: ${data.program?.start || ""} - ${data.program?.enddate || ""}`, margin + contentWidth - 70, y + 21);
    } else {
        const colWidth = contentWidth / 3;
        doc.setFont("courier", "bold");
        doc.setFontSize(12);
        doc.text("Invoice Date", margin + 10, y + 8);
        doc.text("Due Date", margin + colWidth + 10, y + 8);
        doc.text("Reference", margin + (colWidth * 2) + 10, y + 8);

        doc.setFont("courier", "normal");
        doc.text(latestPayment?.DueDate || inv.date, margin + 10, y + 16);
        doc.text(inv.dueDate || "-", margin + colWidth + 10, y + 16);
        doc.text(inv.invoiceId, margin + (colWidth * 2) + 10, y + 16);
    }

    // --- 4. DETAILS TABLE ---
    y += 35;
    doc.setFont("courier", "bold");
    doc.setFontSize(16);
    doc.setTextColor('#000');
    doc.text(data.fees?.feehead || "Description", margin + 5, y);
    doc.text("Amount", margin + contentWidth - 25, y);

    y += 4;
    doc.setDrawColor(150);
    doc.line(margin, y, margin + contentWidth, y);

    y += 10;
    doc.setFont("courier", "normal");
    doc.setFontSize(14);

    const drawItem = (name: string, sub: string, amt: number) => {
        doc.setFont("courier", "bold");
        doc.text(name, margin + 5, y);
        doc.text(formatCurrency(amt), margin + contentWidth - 5, y, { align: "right" });
        if (sub) {
            y += 7;
            doc.setFont("courier", "normal");
            doc.setFontSize(12);
            doc.setTextColor("#000");
            doc.text(sub, margin + 5, y);
            doc.setTextColor("#000");
            doc.setFontSize(14);
        }
        y += 10;
        doc.line(margin, y - 5, margin + contentWidth, y - 5);
    };

    if (inv.type.toLowerCase() === "internship") {
        if (data.fees?.training) drawItem("Training Fee", "Professional training program", data.fees.training);
        if (data.fees?.certificate) drawItem("Certification Fee", "Official certification and processing", data.fees.certificate);
        if (data.fees?.internship) drawItem("Internship Fee", "Hands-on internship experience", data.fees.internship);
    } else if (data.product) {
        data.product.forEach((p: any) => drawItem(p.productName, p.sub || "Product Item", p.price));
    } else if (data.service) {
        data.service.forEach((s: any) => drawItem(s.serviceName, "Service Item", s.price));
    } else {
        drawItem(inv.sub || "Charges", "General invoice item", inv.amount);
    }

    // --- 5. TOTALS ---
    y += 5;
    const totalsX = margin + (contentWidth * 0.4);

    const drawTotalRow = (label: string, value: any, isTotal = false) => {
        if (isTotal) {
            doc.setFont("courier", "bold");
            doc.setFontSize(14);
            doc.setTextColor(19, 108, 237); // #136CED (a blue similar to badge color)
        } else {
            doc.setFont("courier", "normal");
            doc.setFontSize(14);
            doc.setTextColor('#000');
        }
        doc.text(label, totalsX, y);
        doc.text(formatCurrency(value), margin + contentWidth - 5, y, { align: "right" });
        doc.setTextColor('#000');
        y += 7;
    };

    const fees = data.fees || {};
    const price = data.price || {};

let gstAmount = 0;
let gstPercent = 0;

if (inv.type.toLowerCase() === "internship") {
    const taxPercent = data.fees?.tax || 0;

    const internshipSubtotal =
        (fees.training || 0) +
        (fees.certificate || 0) +
        (fees.internship || 0);

    gstAmount = (internshipSubtotal * taxPercent) / 100;
    gstPercent = taxPercent;

} else if (data.product) {

    const subtotal = data.product.reduce((acc: number, p: any) => {
        return acc + (p.price || 0);
    }, 0);

    gstAmount = data.product.reduce((acc: number, p: any) => {
        const tax = p.tax || 0;
        return acc + ((p.price || 0) * tax / 100);
    }, 0);

    gstPercent = subtotal > 0 ? (gstAmount / subtotal) * 100 : 0;

} else if (data.service) {

    const subtotal = data.service.reduce((acc: number, s: any) => {
        return acc + (s.price || 0);
    }, 0);

    gstAmount = data.service.reduce((acc: number, s: any) => {
        const tax = s.tax || 0;
        return acc + ((s.price || 0) * tax / 100);
    }, 0);

    gstPercent = subtotal > 0 ? (gstAmount / subtotal) * 100 : 0;
}
    const subtotal = data.invoiceType === "internship"
        ? (fees.training + fees.certificate + fees.internship)
        : (data.product?.reduce((acc: any, p: any) => acc + p.price, 0) || data.service?.reduce((acc: any, s: any) => acc + s.price, 0) || inv.amount);

    const totalAmount = price.total || inv.amount;

    const paidAmount = latestPayment
        ? latestPayment.paid
        : price.paid || (inv.amount - (inv.pending || 0));

    const dueAmount = latestPayment
        ? latestPayment.pending
        : price.due || (inv.pending || 0);
    // const gst = data.invoiceType == 'internship'
    //             ? (data.fees.tax) : (data.gst)
    console.log(data.gst)
    drawTotalRow("Subtotal", subtotal);
    drawTotalRow("Discount", fees.discount || 0);
    drawTotalRow(`GST (${gstPercent}%)`, gstAmount);

    doc.line(totalsX, y - 2, margin + contentWidth, y - 2);
    y += 5;
    drawTotalRow("Total Amount", totalAmount, true);
    y += 3;
    drawTotalRow("Paid Amount", paidAmount);
    drawTotalRow("Due Amount", dueAmount);

    // footer
    y += 20;
    doc.setFont("courier", "normal");
    doc.setFontSize(10);
    doc.setTextColor(80);
    doc.text("© 2025 DesFlyer. All rights reserved", margin, y);
    y += 5;
    doc.text("If you have any questions about this invoice, Please Contact Us...", margin, y);
    y += 5;
    doc.text("Thank you for Choosing us!", margin, y);

    return doc;
};