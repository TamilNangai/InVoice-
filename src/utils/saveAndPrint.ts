// import { saveInvoice } from "./SaveInvoice";
// import html2canvas from "html2canvas";
// import { jsPDF } from "jspdf";
// import { showSuccess, showError } from "./alert";

// /**
//  * saveAndPrint - saves invoice, generates PDF, downloads it, emails it, and prints it.
//  * @param invoicePayload - the invoice data to save
//  * @param billRef - ref to the Bill DOM element
//  * @param fileName - name for PDF file (e.g., Invoice_1234.pdf)
//  */
// export const saveAndPrint = async (
//   invoicePayload: any,
//   billRef: React.RefObject<HTMLDivElement>,
//   fileName: string = `Invoice_${Date.now()}.pdf`
// ) => {
//   try {
//     // 1️⃣ Save invoice to database (reuse existing logic)
//     await saveInvoice(invoicePayload);

//     if (!billRef.current) {
//       throw new Error("Bill reference not found");
//     }

//     // 2️⃣ Generate PDF from existing Bill component
//     const canvas = await html2canvas(billRef.current, {
//       scale: 2,
//       useCORS: true,
//       logging: false,
//       onclone: (clonedDoc) => {
//         // Find the cloned bill element
//         const clonedBill = clonedDoc.querySelector('.w-full.border.rounded-xl');
//         if (clonedBill instanceof HTMLElement) {
//           // Reduce font size for PDF fit
//           clonedBill.style.fontSize = "12px";
//           // Target all elements with specific font sizes and scale them down
//           const allTextElements = clonedBill.querySelectorAll('*');
//           allTextElements.forEach((el: any) => {
//             if (el instanceof HTMLElement) {
//               const currentSize = window.getComputedStyle(el).fontSize;
//               if (currentSize) {
//                 const numericSize = parseFloat(currentSize);
//                 el.style.fontSize = `${numericSize * 0.8}px`; // Scale down by 20%
//               }
//             }
//           });

//           // Hide elements that shouldn't be in the PDF
//           // (Print button and Terms & Conditions are usually marked with print:hidden)
//           const elementsToHide = clonedDoc.querySelectorAll(".print\\:hidden");
//           elementsToHide.forEach((el: any) => {
//             if (el instanceof HTMLElement) {
//               el.style.display = "none";
//             }
//           });

//           // Also hide the small header button if it's there
//           const headerButton = clonedBill.querySelector('div > div > div > button');
//           if (headerButton instanceof HTMLElement) {
//             headerButton.style.display = 'none';
//           }
//         }
//       }
//     });

//     const imgData = canvas.toDataURL("image/png");
//     const pdf = new jsPDF("p", "mm", "a4");

//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
//     const pageHeight = pdf.internal.pageSize.getHeight();

//     // Scale down if the content is taller than A4
//     let finalWidth = pdfWidth;
//     let finalHeight = pdfHeight;

//     if (pdfHeight > pageHeight) {
//       const ratio = pageHeight / pdfHeight;
//       finalWidth = pdfWidth * ratio;
//       finalHeight = pageHeight;

//       // Center horizontally if scaled down
//       const xOffset = (pdfWidth - finalWidth) / 2;
//       pdf.addImage(imgData, "PNG", xOffset, 0, finalWidth, finalHeight);
//     } else {
//       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//     }

//     // 3️⃣ Save/download PDF to user's PC
//     pdf.save(fileName);

//     // 4️⃣ Prepare PDF for email attachment (Base64)
//     const pdfBase64 = pdf.output("datauristring").split(",")[1];

//     // 5️⃣ Send email automatically by node mailer (via Electron IPC)
//     const recipientEmail = invoicePayload.student?.email || invoicePayload.customer?.email;

//     if (recipientEmail && (window as any).electronAPI?.sendInvoiceEmail) {
//       const emailResult = await (window as any).electronAPI.sendInvoiceEmail({
//         to: recipientEmail,
//         subject: `Your Invoice - ${invoicePayload.invoiceId}`,
//         body: `Dear ${invoicePayload.student?.studentName || "Customer"},\n\nPlease find your invoice #${invoicePayload.invoiceId} attached.\n\nThank you!`,
//         pdfBase64: pdfBase64,
//         fileName: fileName,
//       });

//       if (!emailResult.success) {
//         console.error("Email sending failed:", emailResult.error);
//         // We still continue as the invoice is saved and PDF downloaded
//       }
//     }

//     // 6️⃣ Open default browser print dialog
//     // We can use a temporary iframe to print just the bill content without the full window
//     const printWindow = document.createElement("iframe");
//     printWindow.style.position = "absolute";
//     printWindow.style.top = "-1000px";
//     document.body.appendChild(printWindow);

//     const doc = printWindow.contentWindow?.document;
//     if (doc) {
//       doc.open();
//       doc.write(`
//         <html>
//           <head>
//             <title>Print Invoice</title>
//             <style>
//               body { margin: 0; padding: 0; }
//               @media print {
//                 @page { margin: 10mm; }
//               }
//             </style>
//             <link rel="stylesheet" href="/src/index.css" />
//           </head>
//           <body>
//             ${billRef.current.outerHTML}
//           </body>
//         </html>
//       `);
//       doc.close();

//       setTimeout(() => {
//         printWindow.contentWindow?.focus();
//         printWindow.contentWindow?.print();
//         setTimeout(() => {
//           document.body.removeChild(printWindow);
//         }, 1000);
//       }, 500);
//     }

//     showSuccess("Invoice saved, PDF generated, and email sent successfully!");

//   } catch (error: any) {
//     console.error("Save and Print failed:", error);
//     showError(`Operation failed: ${error.message}`);
//   }
// };

import { saveInvoice } from "./SaveInvoice";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { showSuccess, showError } from "./alert";

/**
 * saveAndPrint - saves invoice, generates PDF, downloads it, emails it, and prints it.
 * @param invoicePayload - the invoice data to save
 * @param billRef - ref to the Bill DOM element
 * @param fileName - name for PDF file (e.g., Invoice_1234.pdf)
 */
export const saveAndPrint = async (
  invoicePayload: any,
  billRef: React.RefObject<HTMLDivElement>,
  fileName: string = `Invoice_${Date.now()}.pdf`
) => {
  try {
    // 1️⃣ Save invoice to database (reuse existing logic)
    await saveInvoice(invoicePayload);

    if (!billRef.current) {
      throw new Error("Bill reference not found");
    }

    // 2️⃣ Generate PDF from existing Bill component
    const canvas = await html2canvas(billRef.current, {
      scale: 2,
      useCORS: true,
      logging: false,
      onclone: (clonedDoc) => {
        const clonedBill = clonedDoc.querySelector('.w-full.border.rounded-xl');

        if (clonedBill instanceof HTMLElement) {
          // 🔹 Adjust height & padding to remove empty space
          clonedBill.style.height = "auto";
          clonedBill.style.minHeight = "auto";
          clonedBill.style.paddingBottom = "0px";
          clonedBill.style.marginBottom = "0px";

          // 🔹 Hide empty divs that may create space
          const emptyDivs = clonedBill.querySelectorAll("div");
          emptyDivs.forEach((el) => {
            if (el instanceof HTMLElement) {
              if (!el.innerText.trim() && el.children.length === 0) {
                el.style.display = "none";
              }
            }
          });

          // 🔹 Hide print-hidden elements
          const elementsToHide = clonedDoc.querySelectorAll(".print\\:hidden");
          elementsToHide.forEach((el) => {
            if (el instanceof HTMLElement) el.style.display = "none";
          });

          // 🔹 Adjust font sizes
          const allTextElements = clonedBill.querySelectorAll("*");
          allTextElements.forEach((el: any) => {
            if (el instanceof HTMLElement) {
              const currentSize = window.getComputedStyle(el).fontSize;
              if (currentSize) {
                const numericSize = parseFloat(currentSize);
                el.style.fontSize = `${numericSize * 0.8}px`; // Scale down by 20%
              }
            }
          });
        }

        // Optional: shrink full-screen layouts like min-h-screen
        const fullHeightElements = clonedDoc.querySelectorAll(".min-h-screen");
        fullHeightElements.forEach((el) => {
          if (el instanceof HTMLElement) el.style.minHeight = "auto";
        });
      }
    });

    // Optional: crop canvas if needed
    const croppedCanvas = document.createElement("canvas");
    const ctx = croppedCanvas.getContext("2d");
    const trimmedHeight = canvas.height; // Adjust if needed, e.g., canvas.height - 50
    croppedCanvas.width = canvas.width;
    croppedCanvas.height = trimmedHeight;
    ctx?.drawImage(canvas, 0, 0, canvas.width, trimmedHeight);

    const imgData = croppedCanvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (croppedCanvas.height * pdfWidth) / croppedCanvas.width;
    const pageHeight = pdf.internal.pageSize.getHeight();

    // Scale down if taller than A4
    let finalWidth = pdfWidth;
    let finalHeight = pdfHeight;

    if (pdfHeight > pageHeight) {
      const ratio = pageHeight / pdfHeight;
      finalWidth = pdfWidth * ratio;
      finalHeight = pageHeight;
      const xOffset = (pdfWidth - finalWidth) / 2;
      pdf.addImage(imgData, "PNG", xOffset, 0, finalWidth, finalHeight);
    } else {
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    }

    // 3️⃣ Save/download PDF to user's PC
    pdf.save(fileName);

    // 4️⃣ Prepare PDF for email (Base64)
    const pdfBase64 = pdf.output("datauristring").split(",")[1];

    // 5️⃣ Send email automatically via Electron IPC
    const recipientEmail = invoicePayload.student?.email || invoicePayload.customer?.email;
    if (recipientEmail && (window as any).electronAPI?.sendInvoiceEmail) {
      const emailResult = await (window as any).electronAPI.sendInvoiceEmail({
        to: recipientEmail,
        subject: `Your Invoice - ${invoicePayload.invoiceId}`,
        body: `Dear ${invoicePayload.student?.studentName || "Customer"},\n\nPlease find your invoice #${invoicePayload.invoiceId} attached.\n\nThank you!`,
        pdfBase64,
        fileName,
      });

      if (!emailResult.success) {
        console.error("Email sending failed:", emailResult.error);
      }
    }

    // 6️⃣ Open default print dialog
    const printWindow = document.createElement("iframe");
    printWindow.style.position = "absolute";
    printWindow.style.top = "-1000px";
    document.body.appendChild(printWindow);

    const doc = printWindow.contentWindow?.document;
    if (doc) {
      doc.open();
      doc.write(`
        <html>
          <head>
            <title>Print Invoice</title>
            <style>
              body { margin: 0; padding: 0; }
              @media print { @page { margin: 10mm; } }
            </style>
            <link rel="stylesheet" href="/src/index.css" />
          </head>
          <body>
            ${billRef.current.outerHTML}
          </body>
        </html>
      `);
      doc.close();

      setTimeout(() => {
        printWindow.contentWindow?.focus();
        printWindow.contentWindow?.print();
        setTimeout(() => document.body.removeChild(printWindow), 1000);
      }, 500);
    }

    showSuccess("Invoice saved, PDF generated, and email sent successfully!");

  } catch (error: any) {
    console.error("Save and Print failed:", error);
    showError(`Operation failed: ${error.message}`);
  }
};