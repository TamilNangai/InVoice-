// import { db } from "@/firebase"
// import { collection, getDocs } from "firebase/firestore"

// type Invoice = {
//   invoiceId: string
//   type: string
//   client: string
//   date: string
//   amount: number
//   status: "Paid" | "Pending"
// }

// // type Invoice = {

// // }
// export const getInvoices = async (): Promise<Invoice[]> => {

//   const snapshot = await getDocs(collection(db, "invoices"))

//   const invoices: Invoice[] = snapshot.docs.map((doc) => {

//     const data: any = doc.data()

//     const status: "Paid" | "Pending" =
//       data.price?.due > 0 ? "Pending" : "Paid"

//     return {
//       invoiceId: doc.id,
//       type: data.invoiceType || "",
//       client:
//         data.student?.studentName ||
//         data.customer?.customer ||
//         data.product?.[0]?.productName ||
//         data.service?.[0]?.serviceName ||
//         "N/A",
//       date: data.createdAt
//         ? new Date(data.createdAt).toLocaleDateString()
//         : "",
//       amount: data.price?.total || 0,
//       status
//     }

//   })

//   return invoices

// }








// import { db } from "@/firebase"
// import { collection, getDocs } from "firebase/firestore"

// // type Invoice = {
// //   invoiceId: string
// //   type: string
// //   client: string
// //   date: string
// //   amount: number
// //   status: "Paid" | "Pending"
// // }



// export type Invoice = {
//   invoiceId: string
//   type: string
//   client: string
//   date: string
//   amount: number
//   status: "Paid" | "Pending"
// }

// export const getInvoices = async (): Promise<Invoice[]> => {

//   const snapshot = await getDocs(collection(db, "invoices"))

//   const invoices: Invoice[] = snapshot.docs.map((doc) => {

//     const data: any = doc.data()

//     // ✅ FIX 1: safer status check
//     const status: "Paid" | "Pending" =
//       data.price?.due && data.price.due > 0 ? "Pending" : "Paid"

//     return {
//       // ✅ FIX 2: use actual invoiceId if exists
//       invoiceId: data.invoiceId || doc.id,
//       type: data.invoiceType || "",

//       client:
//         data.student?.studentName ||
//         data.customer?.customer ||
//         data.product?.[0]?.productName ||
//         data.service?.[0]?.serviceName ||
//         "N/A",

//       // ✅ FIX 3: Firestore timestamp handling
//       date: data.createdAt
//         ? data.createdAt.toDate
//           ? data.createdAt.toDate().toLocaleDateString()
//           : new Date(data.createdAt).toLocaleDateString()
//         : "",

//       amount: data.price?.total || 0,

//       status
//     }

//   })

//   // ✅ FIX 4 (optional but useful): latest first
//   invoices.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

//   return invoices
// }










import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

export type Invoice = {
  uniqueId: string;  // 🔹 NEW
  invoiceId: string;
  type: string;
  client: string;
  date: string;
  amount: number;
  status: "Paid" | "Pending";
  pending: number;
  sub: string;
};

export const getInvoices = async (): Promise<Invoice[]> => {
  const snapshot = await getDocs(collection(db, "invoices"));

  const invoices: Invoice[] = snapshot.docs.map((doc) => {
    const data: any = doc.data();
    const status: "Paid" | "Pending" =
      data.price?.due && data.price.due > 0 ? "Pending" : "Paid";

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

      uniqueId: doc.id,          // 🔹 Firestore document ID for unique key
      invoiceId: data.invoiceId || doc.id,
      type: data.invoiceType || "",
      client:
        data.student?.studentName ||
        data.customer?.customer ||
        data.product?.[0]?.productName ||
        data.service?.[0]?.serviceName ||
        "N/A",
      // sub: data.sub || "" ,
      sub:
        data.product?.[0]?.productName ||          // ✅ from product form
        data.program?.internship ||        // (for internship invoices)
        data.service?.[0]?.serviceName ||  // (for service invoices)
        "",
      // sub: String(data.price?.subTotal || 0),
      pending: data.price?.due || 0,
      date: getFormattedDate(data.createdAt),
      amount: data.price?.total || 0,
      status,
    };
  });

  // Optional: sort latest first
  invoices.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return invoices;
};