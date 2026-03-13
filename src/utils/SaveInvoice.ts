import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

type SaveInvoiceData = {
  invoiceType: string;

  student?: {
    studentName: string;
    email: string;
    phone: string;
    college: string;
  };

  program?: {
    internship: string;
    batch: string;
    start: string;
    trainer: string;
    enddate: string;
  };

  fees?: {
    training: number;
    certificate: number;
    tax: number;
    internship: number;
    discount: number;
  };

  customer?: {
    customer: string;
    email: string;
    office: string;
    gst: string;
    phone: string;
    address: string;
  };

  product?: 
    {
      productName: string,
      sub:  string,
      price: number,
      tax:number
    };

  service?: {
    serviceName: string;
    price: number;
    tax: number;
  }[];


  price: {
    total: string;
    due: string;
    paid: string;
    duedate: string;
    paymentMethod: string;
  };
  data?: {
    companyName: string;
    companyEmail: string;
    companyPhone: string;
    companyAddress: string;
  };
};

export const saveInvoice = async (data: SaveInvoiceData) => {
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

