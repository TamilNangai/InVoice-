// import { collection, addDoc, Timestamp } from "firebase/firestore";
// import { db } from "../firebase";

// type SaveSettingData = {

//   company: {
//     companyName: "...",
//     companyEmail: "...",
//     companyPhone: "...",
//     companyAddress: "..."

// }
// };

// export const saveSettings = async (data: SaveSettingData) => {
//   try {

//     const docRef = await addDoc(collection(db, "company-Details"), {
//       ...data,
//       createdAt: Timestamp.now(),
//     });

//     console.log("Settings saved with ID:", docRef.id);
//     alert("Settings Saved Successfully!");

//   } catch (error) {
//     console.error("Error saving settings:", error);
//     alert("Failed to Save Settings");
//   }
// };



// import { doc, setDoc, Timestamp } from "firebase/firestore";
// import { db } from "../firebase";

// type SaveSettingData = {
//   companyName: string;
//   companyEmail: string;
//   companyPhone: string;
//   companyAddress: string;
// };

// export const saveSettings = async (data: SaveSettingData) => {
//   try {

//     await setDoc(
//       doc(db, "company-Details", "company"),
//       {
//         ...data,
//         createdAt: Timestamp.now()
//       }
//     );

//   console.log("Company saved:", data);
//   alert("Settings Saved Successfully!");

// } catch (error) {
//   console.error("Error saving settings:", error);
//   alert("Failed to Save Settings");
// }
// };


// import { doc, setDoc, Timestamp } from "firebase/firestore";
// import { db } from "../firebase";

// type SaveSettingData = {
//   companyName: string;
//   companyEmail: string;
//   companyPhone: string;
//   companyAddress: string;
// };

// export const saveSettings = async (data: SaveSettingData) => {

//   await setDoc(
//     doc(db, "company-Details", "company"),
//     {
//       companyName: data.companyName,
//       companyEmail: data.companyEmail,
//       companyPhone: data.companyPhone,
//       companyAddress: data.companyAddress,
//       createdAt: Timestamp.now()
//     }
//   );

//   console.log("Company Saved:", data);
// };


// import { doc, setDoc, Timestamp } from "firebase/firestore";
// import { db } from "../firebase";

// type SaveSettingData = {
//   companyName: string;
//   companyEmail: string;
//   companyPhone: string;
//   companyAddress: string;
// };

// export const saveSettings = async (data: SaveSettingData) => {

//   const companyData = {
//     companyName: data.companyName || "",
//     companyEmail: data.companyEmail || "",
//     companyPhone: data.companyPhone || "",
//     companyAddress: data.companyAddress || "",
//     createdAt: Timestamp.now()
//   };

//   await setDoc(doc(db, "company-Details", "company"), companyData);

//   console.log("Saved:", companyData);
// };


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

    console.log("Company saved:", companyData);

    alert("Settings Saved Successfully!");

  } catch (error) {

    console.error("Error saving settings:", error);

    alert("Failed to Save Settings");

  }

};