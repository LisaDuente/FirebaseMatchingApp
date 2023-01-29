import { doc, updateDoc } from "firebase/firestore";
import { ContactInputs } from "../types/formInputs";
import { db } from "./Controller";

export default async function updateContactInfo(
  userId: string | undefined,
  userEmail: string,
  input: ContactInputs
) {
  if (userId) {
    await updateDoc(doc(db, "User", userId), {
      contact: { ...input, email: userEmail },
    });
  }
}
