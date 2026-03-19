// import { db } from "@/firebase"
// import { collection, addDoc } from "firebase/firestore"

// type SaveInvoiceData = {
//   invoiceType: string;

//   invoiceId: string;

//   student?: {
//     studentName: string;
//     email: string;
//     phone: string;
//     college: string;
//   };

//   program?: {
//     internship: string;
//     batch: string;
//     start: string;
//     trainer: string;
//     enddate: string;
//   };

//   fees?: {
//     training: number;
//     certificate: number;
//     tax: number;
//     internship: number;
//     discount: number;
//   };

//   customer?: {
//     customer: string;
//     email: string;
//     office: string;
//     gst: string;
//     phone: string;
//     address: string;
//   };

//   product?: 
//     {
//       productName: string,
//       sub?:  string,
//       price: number,
//       tax:number
//     }[];

//   service?: {
//     serviceName: string;
//     price: number;
//     tax: number;
//   }[];


//   price: {
//     total: number;
//     due: number;
//     paid: number;
//     duedate: string;
//     paymentMethod: string;
//   };
// };


// export const saveInvoice = async (data: SaveInvoiceData) => {

//   try {

//     await addDoc(collection(db, "invoices"), {
//       ...data,
//       createdAt: new Date()
//     })

//     console.log("Invoice saved successfully")

//   } catch (error) {

//     console.error("Error saving invoice", error)

//   }

// }


// import { db } from "@/firebase"
// import { collection, getDocs } from "firebase/firestore"

// export const getInvoices = async () => {

//   const snapshot = await getDocs(collection(db, "invoices"))

//   const invoices = snapshot.docs.map((doc) => {

//     const data: any = doc.data()

//     return {

//       id: data.invoiceId,

//       type: data.invoiceType,

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

//       status: data.price?.due > 0 ? "Pending" : "Paid"

//     }

//   })

//   return invoices

// }


// import { db } from "@/firebase"
// import { collection, getDocs } from "firebase/firestore"

// type Invoice = {
//   id: string
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

//     const status: "Paid" | "Pending" =
//       data.price?.due > 0 ? "Pending" : "Paid"

//     return {
//       id: data.invoiceId || doc.id,
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


import { db } from "@/firebase"
import { collection, getDocs } from "firebase/firestore"

type Invoice = {
  id: string
  type: string
  client: string
  date: string
  amount: number
  status: "paid" | "pending" | "overdue"
}



export const getInvoices = async (): Promise<Invoice[]> => {

  const snapshot = await getDocs(collection(db, "invoices"))

  const invoices: Invoice[] = snapshot.docs.map((doc) => {

    const data: any = doc.data()

    const status: "paid" | "pending" =
      data.price?.due > 0 ? "pending" : "paid"

    return {
      id: doc.id,   // ✅ Firestore unique id
      type: (data.invoiceType || "").toLowerCase(),
      client:
        data.student?.studentName ||
        data.customer?.customer ||
        data.product?.[0]?.productName ||
        data.service?.[0]?.serviceName ||
        "N/A",
      // date: data.createdAt
      //   ? new Date(data.createdAt).toLocaleDateString()
      //   : "",
      date: new Date(data.createdAt).toLocaleDateString("en-IN"),

      amount: data.price?.total || 0,
      status
    }

  })

  return invoices

}

