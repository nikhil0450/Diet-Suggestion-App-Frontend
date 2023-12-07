import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './custom.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const requestBody = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };

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
        navigate('/login');
        const token = data.token;

        localStorage.setItem('token', token);
        window.location.reload();

        console.log(data);
      })
      .catch((err) => {
        setError('Registration failed. Please check your information.');
        console.error('Registration Error:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 register-container bg-light">
          <h2 className="register-title">Register</h2>
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
            <div className="button">
              <button
                type="submit"
                className="btn btn-primary btn-block my-3 custom-btn"
                disabled={loading}
              >
                {loading ? 'Registering...' : 'Register'}
              </button>
            </div>
          </form>
          {error && <p className="text-danger mt-3">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;
