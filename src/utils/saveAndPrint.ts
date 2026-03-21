import { saveInvoice } from "./SaveInvoice";

// export const saveAndPrint = async (
//   invoicePayload: any,
//   billRef: React.RefObject<HTMLDivElement>
// ) => {

//   await saveInvoice(invoicePayload);
//   if (!billRef.current) return;

//   const printContent = billRef.current.innerHTML;
//   const originalContent = document.body.innerHTML;

//   document.body.innerHTML = printContent;
//   window.print();
//   document.body.innerHTML = originalContent;

//   window.location.reload();
// };


// export const saveAndPrint = async (
//   invoicePayload: any,
//   billRef: React.RefObject<HTMLDivElement>
// ) => {

//   await saveInvoice(invoicePayload);

//   if (!billRef.current) return;

//   const iframe = document.createElement("iframe");
//   iframe.style.position = "fixed";
//   iframe.style.right = "0";
//   iframe.style.bottom = "0";
//   iframe.style.width = "0";
//   iframe.style.height = "0";
//   iframe.style.border = "0";

//   document.body.appendChild(iframe);

//   const doc = iframe.contentWindow?.document;

//   if (!doc) return;

//   doc.open();

//   doc.write(`
//     <html>
//       <head>
//         <title>Invoice</title>

//         <!-- ✅ IMPORT YOUR ACTUAL CSS -->
//         <link rel="stylesheet" href="/src/index.css" />

//         <style>
//           body {
//             padding: 20px;
//             background: white;
//           }

//           @media print {
//             .print\\:hidden {
//               display: none !important;
//             }
//           }
//         </style>
//       </head>

//       <body>
//         ${billRef.current.outerHTML}
//       </body>
//     </html>
//   `);

//   doc.close();

//   iframe.onload = () => {
//     iframe.contentWindow?.focus();
//     iframe.contentWindow?.print();

//     setTimeout(() => {
//       document.body.removeChild(iframe);
//     }, 1000);
//   };
// };




// utils/saveAndPrint.ts
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
// import { saveInvoice } from "./yourSaveInvoiceFunction"; // your existing saveInvoice
import { getFunctions, httpsCallable } from "firebase/functions";
import { showSuccess } from "./alert"; // optional: to show success message

/**
 * saveAndPrint - saves invoice, prints via iframe, generates PDF, and optionally emails it
 * @param invoicePayload - the invoice data to save
 * @param billRef - ref to the Bill DOM element
 * @param fileName - name for PDF file (e.g., Invoice_1234.pdf)
 */
export const saveAndPrint = async (
  
  invoicePayload: any,
  billRef: React.RefObject<HTMLDivElement>,
  fileName?: string
) => {
  
  // 1️⃣ Save invoice to database
  await saveInvoice(invoicePayload);
  if (!billRef.current) return;

  // 2️⃣ EXISTING IFRAME PRINT
  const iframe = document.createElement("iframe");
  iframe.style.position = "fixed";
  iframe.style.right = "0";
  iframe.style.bottom = "0";
  iframe.style.width = "0";
  iframe.style.height = "0";
  iframe.style.border = "0";
  document.body.appendChild(iframe);

  const doc = iframe.contentWindow?.document;
  if (!doc) return;

  doc.open();
  doc.write(`
    <html>
      <head>
        <title>Invoice</title>
        <link rel="stylesheet" href="/src/index.css" />
        <style>
          body { padding: 20px; background: white; }
          @media print { .print\\:hidden { display: none !important; } }
        </style>
      </head>
      <body>
        ${billRef.current.outerHTML}
      </body>
    </html>
  `);
  doc.close();

  iframe.onload = () => {
    iframe.contentWindow?.focus();
    iframe.contentWindow?.print();
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 1000);
  };

  // 3️⃣ PDF GENERATION (if fileName provided)
  if (fileName && billRef.current) {
    const canvas = await html2canvas(billRef.current, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210; // A4 width
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

    // Save PDF locally
    pdf.save(fileName);

    // Return PDF Blob for emailing
    const pdfBlob = pdf.output("blob");

    // 4️⃣ SEND PDF VIA EMAIL
    const reader = new FileReader();
    reader.readAsDataURL(pdfBlob);
    
    reader.onloadend = async () => {
      const base64data = (reader.result as string).split(",")[1];

      const functions = getFunctions();
      const sendInvoiceEmail = httpsCallable(functions, "sendInvoiceEmail");

      await sendInvoiceEmail({
        email: invoicePayload.customer.email,
        invoiceId: invoicePayload.invoiceId,
        pdfBase64: base64data,
        fileName,
      });

      showSuccess("Invoice saved, printed, PDF generated, and emailed successfully!");
    };

    return pdfBlob;
    
  }
};



//   const printContent = billRef.current.innerHTML;
//   const originalContent = document.body.innerHTML;

//   document.body.innerHTML = printContent;
//   window.print();
//   document.body.innerHTML = originalContent;

//   window.location.reload();
// };