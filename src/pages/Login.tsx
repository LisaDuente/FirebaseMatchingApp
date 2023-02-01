import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../lib/Firebase';
import {  NavLink, useNavigate } from 'react-router-dom'
import { Card, Form, Button} from 'react-bootstrap';
import "../styles/login.css"

 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e:any) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(

        <Card className='loginCard' >
            <Card.Title> Welcome Back! </Card.Title>
            <Card.Body className='loginCardBody'>
                <Form className='loginForm'>
                    <Form.Group className="mb-3" controlId="emailFormLogin">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder='userName@mail.se' onChange={(e)=>setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="passwordFormLogin">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                    </Form.Group>
                    <Button variant='dark' className="loginButton" type='submit' onClick={onLogin} >Login</Button>
                </Form>
            </Card.Body>
        </Card>
        // <>
        //     <main >        
        //         <section>
        //             <div>                                            
        //                 <p> FocusApp </p>                       
                                                       
        //                 <form>                                              
        //                     <div>
        //                         <label htmlFor="email-address">
        //                             Email address
        //                         </label>
        //                         <input
        //                             id="email-address"
        //                             name="email"
        //                             type="email"                                    
        //                             required                                                                                
        //                             placeholder="Email address"
        //                             onChange={(e)=>setEmail(e.target.value)}
        //                         />
        //                     </div>

        //                     <div>
        //                         <label htmlFor="password">
        //                             Password
        //                         </label>
        //                         <input
        //                             id="password"
        //                             name="password"
        //                             type="password"                                    
        //                             required                                                                                
        //                             placeholder="Password"
        //                             onChange={(e)=>setPassword(e.target.value)}
        //                         />
        //                     </div>
                                                
        //                     <div>
        //                         <button                                    
        //                             onClick={onLogin}                                        
        //                         >      
        //                             Login                                                                  
        //                         </button>
        //                     </div>                               
        //                 </form>
                       
        //                 <p className="text-sm text-white text-center">
        //                     No account yet? {' '}
        //                     <NavLink to="/signup">
        //                         Sign up
        //                     </NavLink>
        //                 </p>
                                                   
        //             </div>
        //         </section>
        //     </main>
        // </>
    )
}
 
export default Login