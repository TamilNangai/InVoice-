import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getSettings = async () => {
  const snapshot = await getDocs(collection(db, "company-Details"));

  let data = null;

  snapshot.forEach((doc) => {
    data = doc.data();
  });

  return data;
};