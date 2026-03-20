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


export const saveAndPrint = async (
  invoicePayload: any,
  billRef: React.RefObject<HTMLDivElement>
) => {

  await saveInvoice(invoicePayload);

  if (!billRef.current) return;

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

        <!-- ✅ IMPORT YOUR ACTUAL CSS -->
        <link rel="stylesheet" href="/src/index.css" />

        <style>
          body {
            padding: 20px;
            background: white;
          }

          @media print {
            .print\\:hidden {
              display: none !important;
            }
          }
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
};
