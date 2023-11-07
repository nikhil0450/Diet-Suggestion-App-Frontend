import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
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


  return ( 
    <div>
      {isAuthenticated ? ( 
        
        <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className='about-title'>About Our Diet Suggestion App</h2>
            <p>
              Welcome to our Diet Suggestion App, where we aim to help you achieve your health and fitness goals through personalized diet plans and recommendations. We understand that maintaining a healthy diet can be challenging, and our mission is to make it easier for you.
            </p>
            <p>
              Our team of experienced nutritionists and dietitians work tirelessly to provide you with the best dietary guidance tailored to your unique needs. We're passionate about helping you lead a healthier lifestyle and reach your desired weight and fitness level.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://cdn.pixabay.com/photo/2018/04/18/18/47/hands-3331216_1280.jpg" 
              alt="Our Team"
              className="img-fluid rounded-circle"
            />
          </div>
        </div>
  
        <div className="mt-5">
          <h3>Our Team</h3>
          <p>
            Meet our dedicated team of nutrition experts who are committed to providing you with the best dietary solutions. With years of experience, they are here to guide you on your journey to better health.
          </p>
          <ul className="list-group">
            <li className="list-group-item">Nikhil Kulkarni - Nutritionist</li>
            <li className="list-group-item">Varad Gawane - Dietitian</li>
            <li className="list-group-item">Viraj Pawar - Fitness Trainer</li>
          </ul>
        </div>
      </div>
        
       ) : (
        <>
        <h2 style={{ textAlign: 'center', margin: "15px 0px"}} className='about-title'>About Us</h2>
        <h4 style={{ textAlign: 'center', margin: "15px 0px"}}>You need to log in to access this page.</h4>
        <button type="button" className="btn btn-link" style={buttonStyles}>
              <Link to="/login" style={linkStyles}>
                Get Started with us today itself...
              </Link>
            </button>
        </>
       ) }

  </div>   
  );
}

export default AboutUs;
