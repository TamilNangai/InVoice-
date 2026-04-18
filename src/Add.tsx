import { collection, addDoc } from "firebase/firestore";
import {db} from './firebase'
const AddUser = () => {

  const addUser = async () => {
    try {
      await addDoc(collection(db, "users"), {
        name: "John",
        age: 21,
        city: "Chennai"
      });

  
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={addUser}>
      Add User
    </button>
  );
};

export default AddUser;