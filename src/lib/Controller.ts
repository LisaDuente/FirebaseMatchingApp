import { app } from "./Firebase";
import { collection, getFirestore } from "firebase/firestore";

export const db = getFirestore(app);

//USER COLLECTION

export const userCollection = collection(db, "User");
export const hobbyCollection = collection(db, "Hobby");
export const friendsCollection = collection(db, "Friendlist");
