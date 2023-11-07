import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './bmi.css'

const BMI = () => {
  const isAuthenticated = localStorage.getItem('token') !== null;

  const [formData, setFormData] = useState({
    height: '',
    weight: '',
  });
  const [bmiResult, setBmiResult] = useState(null);
  const [dietPlan, setDietPlan] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateBMI = () => {
    setError(null);

    if (!formData.height || !formData.weight) {
      setError('Please enter both height and weight.');
      return;
    }

    fetch('https://dietsuggestion.onrender.com/api/bmi/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('BMI calculation failed.');
        }
      })
      .then((data) => {
        setBmiResult(data.bmi);
        setDietPlan(data.dietPlan);
      })
      .catch((error) => {
        console.error('Error calculating BMI:', error);
        setError('An error occurred while calculating BMI. Please try again.');
      });
  };

  return (
    <div className="container mt-5">
      <div className="bmi-container">
        <h2 className="bmi-title">BMI Calculator</h2>
        {isAuthenticated ? (
          <form>
            <div className="form-group" id="height-group">
              <label>Height (in cm)</label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your height"
              />
            </div>
            <div className="form-group" id="weight-group">
              <label>Weight (in kg)</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your weight"
              />
            </div>
            <button
              type="button"
              onClick={calculateBMI}
              className="btn btn-primary"
            >
              Calculate BMI
            </button>
          </form>
        ) : (
          <>
            <h4>You need to log in to access this page.</h4>
            <button type="button" className="btn">
              <Link to="/login" className="link">
                Get Started with us today itself...
              </Link>
            </button>
          </>
        )}

        {error && <div className="alert alert-danger">{error}</div>}
        {bmiResult && (
          <div className="result-container">
            <p className="result-text">
              Your BMI: <span className="result-bmi">{bmiResult.toFixed(2)}</span>
            </p>
          </div>
        )}
         {dietPlan && (
          <div className="container mt-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Diet Plan</h3>
              <p className="card-text">Category: {dietPlan.category}</p>
              <p className="card-text">Min BMI: {dietPlan.minBMI}</p>
              <p className="card-text">Max BMI: {dietPlan.maxBMI}</p>
              <p className="card-text">Daily Calorie Intake: {dietPlan.dailyCalorieIntake}</p>
              <ul className="list-group">
                {dietPlan.suggestedFoods.map((food, index) => (
                  <li key={index} className="list-group-item">{food}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default BMI;
