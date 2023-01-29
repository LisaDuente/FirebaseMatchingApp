
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { auth } from './lib/Firebase';

import Home from './pages/Home';
import Login from './pages/Login';
import Profil from './pages/Profil';
import Signup from './pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Route path="/" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<ProtectedRoute isAuthenticated={user ? true : false}  authenticationPath="/login" outlet={<Home />} />} />
        <Route path="/profil" element={<ProtectedRoute isAuthenticated={user ? true : false}  authenticationPath="/login" outlet={<Profil />} />} />
    </Routes>
  );
}

export default App;
