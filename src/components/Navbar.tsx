
import { Link } from 'react-router-dom';
import "../styles/navbar.css"
import { onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../lib/Firebase';
import Logout from './Logout';

function Navbar() {
  const [user, setUser] = useState(null)
  onAuthStateChanged(auth, (user: any) => {
          if (user) {
            setUser(user);
          } else {
            setUser(null)
            }
          }
        );
  return (
   <nav className="navbar">
        <h1>Match Me Super App</h1>
        <div className='links'>
          {
            user ?  
            <div>
              <Link className='link' to='/profil'>Profil</Link>
              <Link className='link' to='/home'>Home</Link>
              <Logout classString='link'/>
            </div>
            :
            <div>
                <Link className='link' to='/login'>Login</Link>
                <Link className='link' to='/'>Sign up</Link>
            </div>
          }
        </div>
   </nav>
  );
}

export default Navbar;
