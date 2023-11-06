import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BMI = () => {
  const isAuthenticated = localStorage.getItem('token') !== null;

  const buttonStyles = {
    width: "100%",
    textAlign : "center",
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
    transition: 'color 0.2s',
  };

  const linkStyles = {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
  };

  linkStyles[':hover'] = {
    color: '#0056b3',
  };

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
    <div>
      <h2 style={{ textAlign: 'center', margin: "15px 0px"}}>BMI Calculator</h2>
      {isAuthenticated ? (
        <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 p-10">
            <form>
              <div className="form-group">
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
              <div className="form-group">
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
              <button type="button" onClick={calculateBMI} className="btn btn-primary btn-block my-2">
                Calculate BMI
              </button>
            </form>
          </div>
        </div>
      </div>
      
      ) : (
        <>
        <h4 style={{ textAlign: 'center' }}>You need to log in to access this page.</h4>
        <button type="button" className="btn btn-link" style={buttonStyles}>
              <Link to="/login" style={linkStyles}>
                Get Started with us today itself...
              </Link>
            </button>
        </>
      )} 

      <div>
        {error && <div className="alert alert-danger">{error}</div>}
        {bmiResult && <p style={{ textAlign: "center" }}>
  Your BMI: <span style={{ backgroundColor: "#2c307a", color: "white", padding: "4px 8px", borderRadius: "4px" }}>{bmiResult.toFixed(2)}</span>
</p>

}
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
