// import { collection, getDocs } from "firebase/firestore"
// import { db } from "../firebase"

// export type Product = {
//   id: string
//   name: string
//   description: string
//   category: string
//   price: number
// }

// export const getProducts = async (): Promise<Product[]> => {

//   try {

//     const querySnapshot = await getDocs(
//       collection(db, "Product-Details")
//     )

//     const products: Product[] = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       name: doc.data().name,
//       description: doc.data().description,
//       category: doc.data().category,
//       price: doc.data().price
//     }))

//     console.log("Fetched Products:", products)

//     return products

//   } catch (error) {

//     console.error("Error fetching products:", error)

//     return []

//   }

// }

import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"

export type Product = {
  id: string
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