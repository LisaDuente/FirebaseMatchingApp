import { DocumentData, QuerySnapshot } from "firebase/firestore";
import { auth } from "./Firebase";
import { matchCounter } from "../types/matchCounter";
import { User } from "../types/user";

export function getAllUsers(snapshot: QuerySnapshot<DocumentData>): User[] {
  return snapshot.docs
    .map((doc) => {
      return {
        id: doc.id,
        name: doc.data().name,
        contact: doc.data().contact,
        password: doc.data().password,
        preferences: doc.data().preferences,
        ...doc.data(),
      };
    })
    .filter((doc) => doc.id !== auth.currentUser!.uid);
}

export function getCurrentUser(snapshot: QuerySnapshot<DocumentData>): User {
  return snapshot.docs
    .map((doc) => {
      return {
        id: doc.id,
        name: doc.data().name,
        contact: doc.data().contact,
        password: doc.data().password,
        preferences: doc.data().preferences,
        ...doc.data(),
      };
    })
    .filter((doc) => doc.id === auth.currentUser!.uid)[0];
}

export function getMatchesWithCounter(
  users: User[],
  user: User
): matchCounter[] {
  const matchCounters: matchCounter[] = [];
  users.map((match: User) => {
    let counter = 0;
    const matchedPrefs: string[] = [];
    user.preferences.map((pref) => {
      if (match.preferences.includes(pref)) {
        counter++;
        matchedPrefs.push(pref);
      }
    });
    const percent = (counter / user.preferences.length) * 100;
    matchCounters.push({
      user: match,
      counter: counter,
      matches: matchedPrefs,
      percentage: percent,
    });
  });
  return matchCounters;
}
