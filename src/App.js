import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import BMI from './components/BMI';
import AboutUs from './components/AboutUs';
import Logout from './components/Logout';

const App = () => {
  const [authenticated, setAuthenticated] = useState(localStorage.getItem('token') !== null);

  const handleLogin = () => {
    setAuthenticated(true);
  };

  useEffect(() => {
    // Check if the user is not authenticated and on the root URL
    if (!authenticated && window.location.pathname === '/') {
      window.location.pathname = '/home'; // Redirect to /home
    }
  }, [authenticated]);

  return (
    <Router>
      <Navbar authenticated={authenticated} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/about" element={<AboutUs />} />
        {authenticated ? (
          <>
            <Route path="/logout" element={<Logout handleLogout={() => { setAuthenticated(false); }} />} />
          </>
        ) : (
          <Route path="/logout" element={<Navigate to="/home" />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
