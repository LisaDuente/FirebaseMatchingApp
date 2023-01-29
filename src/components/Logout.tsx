import React from 'react';
import {  signOut } from "firebase/auth";
import {auth} from '../lib/Firebase';
import { useNavigate } from 'react-router-dom';

 type logoutProps = {
    classString: string
 }
function Logout(props:logoutProps) {
    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }
   
    return <a href='/' className={props.classString} onClick={handleLogout}>Logout</a>
                     
}
 
export default Logout;