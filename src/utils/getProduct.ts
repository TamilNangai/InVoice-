import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"

export type Product = {
  invoice: string
  name: string
  description: string
  category: string
  price: number
}

export const getProducts = async (): Promise<Product[]> => {

  const snapshot = await getDocs(collection(db, "Product-Details"))

  const products: Product[] = snapshot.docs.map((doc) => {

    const data = doc.data()

    return {
      id: doc.id,
      name: data.name || "",
      description: data.description || "",
      category: data.category || "",
      price: data.price || 0
    }

  })

  return products
}