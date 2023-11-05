import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const isAuthenticated = localStorage.getItem('token') !== null;


  return (<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/home">myCare</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bmi">BMI</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            {isAuthenticated ? (
             
            <li className="nav-item">
              <Link className="nav-link" to="/logout">Logout</Link>
            </li>
              
            ) : (
              <>
              <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
              </li> 
             </>
            )}
          </ul>
        </div>
      </div>
      </nav>
      </>
  );
};

export default Navbar;




