import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Head = () => {
  const isAuthenticated = localStorage.getItem('token') !== null;

  const buttonStyles = {
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
    <Container>
      <Row className="flex-md-row">
        <Col xs={12} md={6} className="text-center">
          <div className='m-5'>
            <h3 className='site-title my-5'>Your Personal Diet Suggestor</h3>
            <p>Get to know your BMI (Body-Mass-Index) & we will suggest you the diet accordingly.</p>
            {isAuthenticated ? (
              <h4 style={{fontFamily: "font-family: 'Montserrat', sans-serif"}}>Welcome</h4>
            ) : (
              <button type="button" className="btn " style={buttonStyles}>
                <Link to="/login" style={{ color: '#007bff', fontWeight: 'bold' }}>
                  Get Started with us today itself...
                </Link>
              </button>
            )}
          </div>
        </Col>
        <Col xs={12} md={6} className="text-center">
          <div className='m-5' style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="https://img.freepik.com/free-photo/top-view-arrangement-with-diet-planning-notepad_23-2149099885.jpg?w=360&t=st=1699115453~exp=1699116053~hmac=0afd4e49d98cf7798c2659f12d8f0c35f0a5bfe8b00d1c4245d9a55e6216b6e9"
              alt="Diet Planning"
              style={{ maxWidth: '40%', height: 'auto', margin: '10px 0px' }}
            />
            <img
              src="https://images.unsplash.com/photo-1522844990619-4951c40f7eda?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Healthy Food"
              style={{ maxWidth: '70%', height: 'auto', marginLeft: "30px" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Head;
