// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../firebase";

// export const getSettings = async () => {

//   const ref = doc(db, "company-Details", "company");

//   const snapshot = await getDoc(ref);

//   if (snapshot.exists()) {
//     return snapshot.data();
//   }

//   return null;
// };

import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export type CompanyData = {
  companyName: string;
  companyEmail: string;
  companyPhone: string;
  companyAddress: string;
};

export const getSettings = async (): Promise<CompanyData | null> => {

  const ref = doc(db, "company-Details", "company");

  const snapshot = await getDoc(ref);

  if (snapshot.exists()) {
    return snapshot.data() as CompanyData; // ✅ FIX
  }

  return null;
};