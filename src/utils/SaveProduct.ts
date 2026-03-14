import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

type SaveProductData = {
    companyname: string;
    companyaddress: string;
    companymailno: string;
};

export const saveProduct = async (data: SaveProductData) => {
    try {

        const docRef = await addDoc(collection(db, "Product-Details"), {
            ...data,
            createdAt: Timestamp.now(),
        });

        console.log("Product saved with ID:", docRef.id);
        alert("Product Saved Successfully!");

    } catch (error) {
        console.error("Error saving Product:", error);
        alert("Failed to Save Product");
    }
};