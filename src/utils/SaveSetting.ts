import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

type SaveSettingData = {
  company: {
    companyName: string;
    companyEmail: string;
    companyPhone: string;
    companyAddress: string;
  };
};

export const saveSettings = async (data: SaveSettingData) => {
  try {

    const docRef = await addDoc(collection(db, "settings"), {
      ...data,
      createdAt: Timestamp.now(),
    });

    console.log("Settings saved with ID:", docRef.id);
    alert("Settings Saved Successfully!");

  } catch (error) {
    console.error("Error saving settings:", error);
    alert("Failed to Save Settings");
  }
};