

import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

interface InvoiceData {
  invoiceType: string;
  companyDetails: any;
  // items: any;
  priceDetails: any;
}

export const saveInvoice = async (data: InvoiceData) => {
  try {
    const docRef = await addDoc(collection(db, "invoices"), {
      ...data,
      createdAt: Timestamp.now(),
    });

    console.log("Invoice saved with ID:", docRef.id);
    alert("Invoice Saved Successfully!");
  } catch (error) {
    console.error("Error saving invoice:", error);
    alert("Failed to Save Invoice");
  }
};