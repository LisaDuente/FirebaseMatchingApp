import { doc, DocumentData, getDoc, onSnapshot, QuerySnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import ProfilCard from '../components/ProfilComponents/ProfilCard';
import { hobbyCollection, userCollection } from '../lib/Controller';
import { auth } from '../lib/Firebase';
import { User } from '../types/user';
import "../styles/profil.css"
import { Hobby } from '../types/hobby';

function Profil() {

  const [currUser, setCurrUser] = useState<User>();
  const [hobby, setHobby] = useState<Hobby>()
  const id: string =  auth.currentUser?.uid as string;
 
  useEffect(() => {
    const docRef = doc(userCollection, id)
    getDoc(docRef).then((doc: DocumentData) => {
      setCurrUser({
        id: doc.id,
        name: doc.data().name,
        contact: doc.data().contact,
        ...doc.data()
      })
    })
    
    }, [])

  return (
    <div className='profilContainer'>
      <ProfilCard user={currUser} />
    </div>
   
  );
}

export default Profil;
