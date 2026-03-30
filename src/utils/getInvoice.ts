import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

export type Invoice = {
  uniqueId: string;  // 🔹 NEW
  invoiceId: string;
  type: string;
  client: string;
  date: string;
  dueDate:string;
  amount: number;
  status: "paid" | "pending" |"overdue";
  pending: number;
  sub: string;
  email?:string;
  phone?:string;
  gst?:number;
  payment?:string;
};



export const getInvoices = async (): Promise<Invoice[]> => {
  const snapshot = await getDocs(collection(db, "invoices"));

  const invoices: Invoice[] = snapshot.docs.map((doc) => {
    const data: any = doc.data();
    const status: "paid" | "pending" | "overdue" =
      data.status ||
      (data.price?.due && data.price.due > 0 ? "pending" : "paid");


    const getFormattedDate = (createdAt: any) => {
      if (!createdAt) return "";

      const dateObj = createdAt.toDate
        ? createdAt.toDate()
        : new Date(createdAt);

      return dateObj
        .toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        })
        .replace(",", ""); 
    };



    return {
      uniqueId: doc.id,
      invoiceId: data.invoiceId || doc.id,
      type: data.invoiceType || "",
      email: data.customer?.email || data.student?.email || "",
      phone: data.customer?.phone || data.student?.phone || "",
      dueDate:data.price?.duedate || "",
      payment: data.price?.paymentMethod || "",
      gst: data.gst || 0,
      batch: data.program?.batch || "",
      startDate: data.program?.start || "",
      endDate: data.program?.enddate || "",
      client:
        data.student?.studentName ||
        data.customer?.customer ||
        data.product?.[0]?.productName ||
        data.service?.[0]?.serviceName ||
        "N/A",


      sub:
        data.product?.[0]?.productName ||
        data.program?.internship ||
        data.service?.[0]?.serviceName ||
        "",

      pending: data.pending ?? data.price?.due ?? 0,

      date: getFormattedDate(data.createdAt),

      amount: data.price?.total ?? data.amount ?? 0,

      status:
        data.status ||
        (data.price?.due && data.price.due > 0 ? "pending" : "paid"),
      
      
    };

  });

  // Optional: sort latest first
  invoices.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return invoices;
};