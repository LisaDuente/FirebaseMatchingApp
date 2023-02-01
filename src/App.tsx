
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { auth } from './lib/Firebase';
import "./styles/app.css"
import Home from './pages/DashBoard';
import Login from './pages/Login';
import Profil from './pages/Profil';
import Signup from './pages/Signup';
import Hello from './pages/Hello';


function App() {

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
    <Routes>
        <Route path='/' element={<Hello />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<ProtectedRoute isAuthenticated={user ? true : false}  authenticationPath="/" outlet={<Home />} />} />
        <Route path="/profil" element={<ProtectedRoute isAuthenticated={user ? true : false}  authenticationPath="/" outlet={<Profil />} />} />
    </Routes>
  );
}

export default App;
