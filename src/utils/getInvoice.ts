import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

export type Invoice = {
  uniqueId: string;
  invoiceId: string;
  type: string;
  client: string;
  date: string;
  dueDate: string;
  amount: number;
  status: "paid" | "pending" | "overdue";
  pending: number;
  sub: string;
  email?: string;
  phone?: string;
  gst?: number;
  payment?: string;
  rawData?: any; // 🔹 Add rawData to store full database record
};


export const getInvoices = async (): Promise<Invoice[]> => {
  const snapshot = await getDocs(collection(db, "invoices"));

  const invoices: Invoice[] = snapshot.docs.map((doc) => {
    const data: any = doc.data();
    // Status check
    data.status ||
      (data.price?.due && data.price.due > 0 ? "pending" : "paid");
    const history = data.paymentHistory || [];
    const latestPayment = history.length > 0 ? history[history.length - 1] : null;

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

      email: data.customer?.email || data.student?.email || "",
      phone: data.customer?.phone || data.student?.phone || "",

      date: getFormattedDate(data.createdAt),

      // ✅ USE latest payment history
      dueDate: latestPayment?.DueDate || data.price?.duedate || "",

      amount: data.price?.total ?? data.amount ?? 0,

      // ✅ IMPORTANT MAPPING
      paidAmount: latestPayment?.paid ?? data.price?.paid ?? 0,
      pending: latestPayment?.due ?? data.price?.due ?? 0,

      gst: data.gst || 0,
      payment: data.price?.paymentMethod || "",

      batch: data.program?.batch || "",
      startDate: data.program?.start || "",
      endDate: data.program?.enddate || "",

      status:
        latestPayment?.due === 0
          ? "paid"
          : latestPayment?.due > 0
            ? "pending"
            : data.status ||
            (data.price?.due && data.price.due > 0 ? "pending" : "paid"),

      rawData: data,
      paymentHistory: history,
    };

  });

  // Optional: sort latest first
  invoices.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return invoices;
};