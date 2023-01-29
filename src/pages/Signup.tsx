import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../lib/Firebase'
import { db } from '../lib/Controller';
import { doc, setDoc } from 'firebase/firestore';
 
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
 
    const onSubmit = async (e: any) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed in
            const user = userCredential.user;
            //adds user with same id to database to be found by other users

            const contact = {
                discord: "",
                email: user.email,
                instagram: "",
                snapchat: ""
            }

            const data ={
                id: user.uid,
                name: username,
                contact: contact,
                preferences: []
            }
            await setDoc(doc(db, "User", user.uid),data)
            await setDoc(doc(db, "Friendlist", user.uid),{})
            console.log(user);
            navigate("/home")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (
    <main >        
        <section>
            <div>
                <div>                  
                    <h1> Sign Up </h1>                                                                            
                    <form>   
                    <div>
                            <label htmlFor="userName">
                                Username
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} 
                                required                                 
                                placeholder="Username"              
                            />
                        </div>                                                                                          
                        <div>
                            <label htmlFor="email-address">
                                Email address
                            </label>
                            <input
                                type="email"
                        
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Email address"                                
                            />
                        </div>

                        <div>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"              
                            />
                        </div>                                             
                        
                        <button
                            type="submit" 
                            onClick={onSubmit}                        
                        >  
                            Sign up                                
                        </button>
                                                                     
                    </form>
                   
                    <p>
                        Already have an account?{' '}
                        <NavLink to="/login" >
                            Sign in
                        </NavLink>
                    </p>                   
                </div>
            </div>
        </section>
    </main>
  )
}
 
export default Signup