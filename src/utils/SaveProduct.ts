// import { collection, addDoc, Timestamp } from "firebase/firestore";
// import { db } from "../firebase";

// type SaveProductData = {

// };

// export const saveProduct = async (data: SaveProductData) => {
//     try {

//         const docRef = await addDoc(collection(db, "Product-Details"), {
//             ...data,
//             createdAt: Timestamp.now(),
//         });

//         console.log("Product saved with ID:", docRef.id);
//         alert("Product Saved Successfully!");

//     } catch (error) {
//         console.error("Error saving Product:", error);
//         alert("Failed to Save Product");
//     }
// };

// import { collection, addDoc, Timestamp } from "firebase/firestore";
// import { db } from "../firebase";

// type SaveProductData = {
//   name: string
//   description: string
//   category: string
//   price: number
// }

// export const saveProduct = async (data: SaveProductData) => {

//   try {

//     await addDoc(collection(db, "Product-Details"), {
//       ...data,
//       createdAt: Timestamp.now()
//     })

//     console.log("Product saved:", data)

//     alert("Product Saved Successfully!")

//   } catch (error) {

//     console.error("Error saving product:", error)

//     alert("❌ Failed to Save Product")

//   }

// }

// import { collection, addDoc, Timestamp } from "firebase/firestore"
// import { db } from "../firebase"

// type SaveProductData = {
//   name: string
//   description: string
//   category: string
//   price: number
// }

// export const saveProduct = async (data: SaveProductData) => {

//   try {

//     const productData = {
//       name: data.name || "",
//       description: data.description || "",
//       category: data.category || "",
//       price: data.price || 0,
//       createdAt: Timestamp.now()
//     }

//     const docRef = await addDoc(
//       collection(db, "Product-Details"),
//       productData
//     )

//     console.log("Product saved:", productData)

//     alert("Product Saved Successfully!")

//     return docRef.id   // useful for table refresh

//   } catch (error) {

//     console.error("Error saving product:", error)

//     alert("❌ Failed to Save Product")

//     throw error
//   }

// }

import { doc, setDoc, Timestamp } from "firebase/firestore"
import { db } from "../firebase"

type SaveProductData = {
    name: string
    description: string
    category: string
    price: number
}

export const saveProduct = async (data: SaveProductData) => {

    try {

        const productId = "PROD-" + Date.now()

        const productData = {
            name: data.name || "",
            description: data.description || "",
            category: data.category || "",
            price: data.price || 0,
            createdAt: Timestamp.now()
        }

        await setDoc(
            doc(db, "Product-Details", productId),
            productData
        )

        console.log("Product saved:", productData)

        alert("Product Saved Successfully!")

    } catch (error) {

        console.error("Error saving product:", error)

        alert("Failed to Save Product")

    }

}