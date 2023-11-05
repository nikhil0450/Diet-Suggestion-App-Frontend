import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token');
    window.location.reload();
    navigate('/home');
  });

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
};

export default Logout;
