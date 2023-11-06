import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const requestBody = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };

    // Make the registration request using fetch
    fetch('https://dietsuggestion.onrender.com/api/auth/register', requestBody)
      .then((response) => {
        if (response.ok) {
          alert("Registration Successful!");
          return response.json();
        } else {
          throw new Error('Registration failed');
        }
      })
      .then((data) => {
        Navigate('/Login');
        const token = data.token;

        localStorage.setItem('token', token);
        window.location.reload();

        console.log(data);
      })
      .catch((err) => {
        setError('Registration failed. Please check your information.');
        console.error('Registration Error:', err);
      });
  };

  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2 className="text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block my-3">
            Register
          </button>
        </form>
        {error && <p className="text-danger mt-3">{error}</p>}
      </div>
    </div>
  </div>
  

  );
};

export default Register;
