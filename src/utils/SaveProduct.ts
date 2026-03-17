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

        // console.log("Product saved:", productData)

        // alert("Product Saved Successfully!")

    } catch (error) {

        console.error("Error saving product:", error)

        alert("Failed to Save Product")

    }

}