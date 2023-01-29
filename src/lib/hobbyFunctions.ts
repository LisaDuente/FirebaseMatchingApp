import {
  doc,
  DocumentData,
  QuerySnapshot,
  updateDoc,
} from "firebase/firestore";
import { Hobby } from "../types/hobby";
import { User } from "../types/user";
import { db } from "./Controller";

export function getAllHobbies(snapshot: QuerySnapshot<DocumentData>): Hobby[] {
  return snapshot.docs.map((doc) => {
    return {
      Moba: doc.data().Moba,
      BattleRoyal: doc.data().BattleRoyale,
      Shooter: doc.data().Shooter,
      Casual: doc.data().Casual,
      MMORPG: doc.data().MMORPG,
      ...doc.data(),
    };
  });
}

export async function addHobby(user: User, hobby: string) {
  user.preferences.push(hobby);
  if (user.id) {
    await updateDoc(doc(db, "User", user.id), {
      preferences: user.preferences,
    });
  }
}

export async function deleteHobby(user: User, hobby: string) {
  user.preferences = user.preferences.filter((string) => string !== hobby);
  if (user.id) {
    await updateDoc(doc(db, "User", user.id), {
      preferences: user.preferences,
    });
  }
}
