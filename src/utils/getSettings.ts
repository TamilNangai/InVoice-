// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase";

// export const getSettings = async () => {
//   const snapshot = await getDocs(collection(db, "company-Details"));

//   let data = null;

//   snapshot.forEach((doc) => {
//     data = doc.data();
//   });

//   return data;
// };
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase";

// export const getSettings = async () => {

//   const snapshot = await getDocs(collection(db, "company-Details"));

//   if (!snapshot.empty) {
//     return snapshot.docs[0].data();
//   }

//   return null;

// };

// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase";

// export const getSettings = async () => {
//   try {
//     const snapshot = await getDocs(collection(db, "company-Details"));

//     if (snapshot.empty) {
//       console.log("No company data found");
//       return null;
//     }

//     const doc = snapshot.docs[0]; // get first document
//     return doc.data();

//   } catch (error) {
//     console.error("Error fetching company settings:", error);
//     return null;
//   }
// };

// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../firebase";

// export const getSettings = async () => {

//   const docRef = doc(db, "company-Details", "company");
//   const snapshot = await getDoc(docRef);

//   if (snapshot.exists()) {
//     return snapshot.data();
//   }

//   return null;
// };


// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase";

// export const getSettings = async () => {
//   try {

//     const snapshot = await getDocs(collection(db, "company-Details"));

//     let data = null;

//     snapshot.forEach((doc) => {
//       const companyData = doc.data();

//       data = companyData.company; 
//     });

//     return data;

//   } catch (error) {
//     console.error("Error fetching settings:", error);
//     return null;
//   }
// };

// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../firebase";

// export const getSettings = async () => {
//   try {

//     const docRef = doc(db, "company-Details", "company");
//     const snapshot = await getDoc(docRef);

//     if (snapshot.exists()) {
//       return snapshot.data();
//     }

//     return null;

//   } catch (error) {
//     console.error("Error fetching company:", error);
//     return null;
//   }
// };



import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const getSettings = async () => {

  const ref = doc(db, "company-Details", "company");

  const snapshot = await getDoc(ref);

  if (snapshot.exists()) {
    return snapshot.data();
  }

  return null;
};