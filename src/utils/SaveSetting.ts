import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

type SaveSettingData = {
  companyName: string;
  companyEmail: string;
  companyPhone: string;
  companyAddress: string;
};

export const saveSettings = async (data: SaveSettingData) => {

  try {

    const companyData = {
      companyName: data.companyName || "",
      companyEmail: data.companyEmail || "",
      companyPhone: data.companyPhone || "",
      companyAddress: data.companyAddress || "",
      createdAt: Timestamp.now()
    };

    await setDoc(doc(db, "company-Details", "company"), companyData);

    // console.log("Company saved:", companyData);

    alert("Settings Saved Successfully!");

  } catch (error) {

    // console.error("Error saving settings:", error);

    alert("Failed to Save Settings");

  }

};