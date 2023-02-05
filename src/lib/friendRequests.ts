import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db, friendsCollection } from "./Controller";

export async function sendfriendRequest(requestUser: string, userId: string) {
  const docRef = doc(friendsCollection, requestUser);
  const dataReq = await getDoc(docRef).then((doc) => {
    return doc.data();
  });

  const docRef2 = doc(friendsCollection, userId);
  const dataSend = await getDoc(docRef2).then((doc) => {
    return doc.data();
  });

  if (
    dataReq?.hasOwnProperty(userId) &&
    dataSend?.hasOwnProperty(requestUser)
  ) {
    alert("Request already send!");
    return;
  }

  //send friend request
  await updateDoc(doc(db, "Friendlist", userId), {
    [`${requestUser}`]: { status: "PENDING" },
  });
  await updateDoc(doc(db, "Friendlist", requestUser), {
    [`${userId}`]: { status: "PENDING" },
  });
  alert("Send friend request!");
}
