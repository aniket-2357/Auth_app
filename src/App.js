

// twilio recovery code - NJHE97C6GZYQBC1H79KMM7VJ
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';

import './App.css'; // Assuming you have a global CSS file for styling
import PostLoginScreen from './components/PostLoginScreen';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  
  // const apikey="s9PNuRJRcNWGVwmBJThRXA==eHx8deIW6dRpIaGO"
  return (
    <div className="background">
    <Router>
    <Navbar/>
      <AuthProvider>
        <Routes>
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            
          </Route>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path= "/postlogin" element={<PostLoginScreen />}/>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
        </Routes>
      </AuthProvider>
    </Router>
    </div>
  );
}

export default App;
