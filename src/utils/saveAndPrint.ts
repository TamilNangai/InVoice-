import { saveInvoice } from "./SaveInvoice";
import { jsPDF } from "jspdf";
import { showSuccess, showError } from "./alert";

export const saveAndPrint = async (
  invoicePayload: any,
  fileName: string = `Invoice_${Date.now()}.pdf`
) => {
  try {
    // 1️⃣ Save to Firebase
    await saveInvoice(invoicePayload);
    showSuccess("Invoice saved successfully!");

    // 2️⃣ Background PDF + Email
    (async () => {
      try {
        const doc = new jsPDF("p", "mm", "a4");

        const data = invoicePayload || {};
        const fees = data.fees || {};
        const type = data.invoiceType || "invoice";
        const price = data.price || {};
        const margin = 15;
        const paytype = price.paymentMethod || "N/A";
        const dis = data.discount || fees.discount || 0;
        const tax = fees.tax || data.product?.[0]?.tax || data.service?.[0]?.tax || 0;
        const invoiceDate = data.date || new Date().toLocaleDateString();
        const dueDate = price.duedate || data.dueDate || "-";

        let y = 20;

        const pageWidth = doc.internal.pageSize.getWidth();
        const contentWidth = pageWidth - margin * 2;

        const formatCurrency = (num: any) => {
          const val = parseFloat(num) || 0;
          return val.toLocaleString("en-IN", { minimumFractionDigits: 2 });
        };

        const drawLine = (yPos: number) => {
          doc.setDrawColor(200);
          doc.line(margin, yPos, margin + contentWidth, yPos);
        };

        const drawItem = (name: string, sub: string, amt: number) => {
          doc.setFont("courier", "bold");
          doc.text(name, margin + 5, y);
          doc.text(formatCurrency(amt), margin + contentWidth - 5, y, {
            align: "right",
          });

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

        const drawTotalRow = (label: string, value: any, isTotal = false) => {
          doc.setFontSize(14)
          if (isTotal) {
            doc.setFont("courier", "bold");
            doc.setTextColor(19, 108, 237);
          } else {
            doc.setFont("courier", "normal");
            doc.setTextColor(0);
          }

          doc.text(label, margin + contentWidth * 0.4, y);
          doc.text(formatCurrency(value), margin + contentWidth - 5, y, {
            align: "right",
          });

          doc.setTextColor(0);
          y += 6;
        };

        // =========================
        // 1. HEADER
        // =========================
        doc.setFont("courier", "bold");
        doc.setFontSize(28);
        doc.text("DesFlyer", margin, y);

        const badgeText = (data.invoiceType || "INVOICE").toUpperCase();
        doc.setFontSize(10);

        const badgeWidth = doc.getTextWidth(badgeText) + 10;
        doc.setFillColor(59, 130, 246);
        doc.roundedRect(pageWidth - margin - badgeWidth, y - 7, badgeWidth, 8, 1, 1, "F");

        doc.setTextColor(255);
        doc.text(badgeText, pageWidth - margin - badgeWidth + 5, y - 1);
        doc.setTextColor(0);

        y += 8;

        doc.setFontSize(10);
        doc.setFont("courier", "normal");
        doc.text("Incubation Cell, Kings College of Engineering, Punalkumlam", margin, y);
        y += 5;
        doc.text("desflyer.tech@gmail.com | +91 8525913433", margin, y);

        drawLine(y + 5);
        y += 15;

        // =========================
        // 2. BILL TO + INVOICE DETAILS
        // =========================
        const customer = data.student || data.customer;

        doc.setFont("courier", "bold");
        doc.setTextColor('#000');
        doc.setFontSize(12);
        doc.text("BILL TO", margin, y);
        doc.text("Invoice Details", margin + contentWidth / 2 + 10, y);

        y += 8;

        doc.setFont("courier", "bold");
        doc.setTextColor('#000');
        doc.setFontSize(14)
        doc.text(
          customer?.studentName || customer?.customer || "N/A",
          margin,
          y
        );
        doc.setFontSize(12)
        doc.setTextColor('#000');
        doc.text(
          `Invoice : #${data.invoiceId}`,
          margin + contentWidth / 2 + 10,
          y
        );

        y += 6;
        doc.setTextColor('#000');
        doc.setFontSize(12);
        doc.text(customer?.email || "", margin, y);
        doc.text(
          `Date: ${new Date().toLocaleDateString()}`,
          margin + contentWidth / 2 + 10,
          y
        );

        y += 6;
        doc.setTextColor('#000');
        doc.text(customer?.phone || "", margin, y);
        doc.text(
          `Due Date: ${price.duedate || "-"}`,
          margin + contentWidth / 2 + 10,
          y
        );

        // =========================
        // 3. BOX SECTION
        // =========================
        y += 12;
        doc.setDrawColor(0);
        doc.setLineWidth(0.2);
        doc.roundedRect(margin, y, contentWidth, 25, 3, 3);

        if (type.toLowerCase() === "internship") {
          doc.setFontSize(12);
          doc.text(data.program?.traininghead || "Training Program", margin + 5, y + 8);
          doc.setFont("courier", "bold");
          doc.setFontSize(14);
          doc.text(data.program?.internship || data.sub || "", margin + 5, y + 15);
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
          doc.text(invoiceDate, margin + 10, y + 16);
          doc.text(dueDate, margin + colWidth + 10, y + 16);
          doc.text(data.invoiceId || "-", margin + (colWidth * 2) + 10, y + 16);
        }

        // =========================
        // 4. ITEMS
        // =========================
        y += 40;
        doc.setFont("courier", "bold");
        doc.setFontSize(14);
        doc.text("Description", margin + 5, y);
        doc.text("Amount", margin + contentWidth - 25, y);

        y += 10;
        drawLine(y);
        y += 10;

        doc.setFont("courier", "normal");

        if (fees.training) drawItem("Training Fee", "Program fee", fees.training);
        if (fees.certificate)
          drawItem("Certification Fee", "Certificate processing", fees.certificate);
        if (fees.internship)
          drawItem("Internship Fee", "Hands-on training", fees.internship);

        data.product?.forEach((p: any) =>
          drawItem(p.productName, p.sub || "Product", p.price)
        );

        data.service?.forEach((s: any) =>
          drawItem(s.serviceName, "Service", s.price)
        );

        // =========================
        // 5. TOTALS
        // =========================
        y += 5;

        const subtotal =
          fees.training + fees.certificate + fees.internship ||
          data.product?.reduce((a: number, b: any) => a + b.price, 0) ||
          data.service?.reduce((a: number, b: any) => a + b.price, 0) ||
          price.total;

        drawTotalRow("Subtotal", subtotal);
        drawTotalRow("Discount", dis);
        drawTotalRow(
          `GST(${tax}%)`,
          (subtotal * tax) / 100
        );

        y += 5;
        drawLine(y);
        y += 6;

        drawTotalRow("Total Amount", price.total || subtotal, true);
        drawTotalRow(`Paid Amount(${paytype})`, price.paid || 0);
        drawTotalRow("Due Amount", price.due || 0);

        // =========================
        // 6. FOOTER
        // =========================
        y += 20;
        doc.setFontSize(10);
        doc.text("© 2025 DesFlyer. All rights reserved", margin, y);
        y += 5;
        doc.text(
          "If you have any questions, please contact support.",
          margin,
          y
        );
        y += 5;
        doc.text("Thank you for Choosing us!", margin, y);

        // =========================
        // SAVE
        // =========================
        doc.save(fileName);

        // =========================
        // EMAIL
        // =========================
        const pdfBase64 = doc.output("datauristring").split(",")[1];

        const recipientEmail =
          customer?.email || data.student?.email || data.customer?.email;

        if (recipientEmail && (window as any).electronAPI?.sendInvoiceEmail) {
          await (window as any).electronAPI.sendInvoiceEmail({
            to: recipientEmail,
            subject: `Invoice - ${data.invoiceId}`,
            body: `Dear ${customer?.studentName || customer?.customer || "Customer"},\n\nPlease find your invoice attached.`,
            pdfBase64,
            fileName,
          });
        }
      } catch (err) {
        console.error("PDF generation failed:", err);
      }
    })();
  } catch (error: any) {
    console.error("Save failed:", error);
    showError(error.message);
  }
};

