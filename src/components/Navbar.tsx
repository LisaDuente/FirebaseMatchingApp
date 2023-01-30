
import { Link } from 'react-router-dom';
import "../styles/navbar.css"
import { onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../lib/Firebase';
import Logout from './Logout';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';

function NavigationBar() {
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
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          MakeMeMatch
          {' '}
            <img
              alt=""
              src="background.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav>
          {
            user ?  
            <div>
              <Link className='link' to='/profil'>Profil</Link>
              <Link className='link' to='/home'>Dashboard</Link>
              <Logout classString='link'/>
            </div>
            :
            <div>
                <Link className='link' to='/login'>Login</Link>
                <Link className='link' to='/'>Sign up</Link>
            </div>
          }
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavigationBar;
