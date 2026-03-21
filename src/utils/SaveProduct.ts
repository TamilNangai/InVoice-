import { doc, setDoc, Timestamp } from "firebase/firestore"
import { db } from "../firebase"

type SaveProductData = {
    
    name: string
    description: string
    category: string
    maxprice: string
    minprice: string
}

export const saveProduct = async (data: SaveProductData) => {

    try {

        const productId = "PROD-" + Date.now()

        const productData = {
            name: data.name || "",
            description: data.description || "",
            category: data.category || "",
            minprice: data.minprice || "",
            maxprice: data.maxprice || "",
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