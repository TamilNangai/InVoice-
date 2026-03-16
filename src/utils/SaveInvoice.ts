import { db } from "@/firebase"
import { collection, addDoc } from "firebase/firestore"

type SaveInvoiceData = {
  invoiceType: string;

  invoiceId: string;

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
      sub?:  string,
      price: number,
      tax:number
    }[];

  service?: {
    serviceName: string;
    price: number;
    tax: number;
  }[];


  price: {
    total: number;
    due: number;
    paid: number;
    duedate: string;
    paymentMethod: string;
  };
};


export const saveInvoice = async (data: SaveInvoiceData) => {

  try {

    await addDoc(collection(db, "invoices"), {
      ...data,
      createdAt: new Date()
    })

    console.log("Invoice saved successfully")

  } catch (error) {

    console.error("Error saving invoice", error)

  }

}
