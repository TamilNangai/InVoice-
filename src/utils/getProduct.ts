import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"

export type Product = {
  invoiceId: string
  name: string
  description: string
  category: string
  maxprice: string
  minprice: string
}

export const getProducts = async (): Promise<Product[]> => {

  const snapshot = await getDocs(collection(db, "Product-Details"))

  const products: Product[] = snapshot.docs.map((doc) => {

    const data = doc.data()

    return {
      invoiceId: data.invoiceId || doc.id,
      name: data.name || "",
      description: data.description || "",
      category: data.category || "",
      minprice: data.minprice || "",
      maxprice: data.maxprice || "",
    }

  })

  return products
}