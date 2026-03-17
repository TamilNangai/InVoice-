import { db } from "@/firebase"
import { collection, getDocs } from "firebase/firestore"

type Invoice = {
  invoiceId: string
  type: string
  client: string
  date: string
  amount: number
  status: "Paid" | "Pending"
}
 
// type Invoice = {

// }
export const getInvoices = async (): Promise<Invoice[]> => {

  const snapshot = await getDocs(collection(db, "invoices"))

  const invoices: Invoice[] = snapshot.docs.map((doc) => {

    const data: any = doc.data()

    const status: "Paid" | "Pending" =
      data.price?.due > 0 ? "Pending" : "Paid"

    return {
      invoiceId: doc.id,
      type: data.invoiceType || "",
      client:
        data.student?.studentName ||
        data.customer?.customer ||
        data.product?.[0]?.productName ||
        data.service?.[0]?.serviceName ||
        "N/A",
      date: data.createdAt
        ? new Date(data.createdAt).toLocaleDateString()
        : "",
      amount: data.price?.total || 0,
      status
    }

  })

  return invoices

}

