import { saveInvoice } from "./SaveInvoice";

export const saveAndPrint = async (
  invoicePayload: any,
  billRef: React.RefObject<HTMLDivElement>
) => {

  await saveInvoice(invoicePayload);
  if (!billRef.current) return;

  const printContent = billRef.current.innerHTML;
  const originalContent = document.body.innerHTML;

  document.body.innerHTML = printContent;
  window.print();
  document.body.innerHTML = originalContent;

  window.location.reload();
};