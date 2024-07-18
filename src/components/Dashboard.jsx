import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out', error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-3 rounded" style={{ width: '18rem' }}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/005/163/927/original/login-success-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
          className="card-img-top"
          alt="Login Successful"
        />
        <div className="card-body text-center">
          <h5 className="card-title">Login Successful!</h5>
          <p className="card-text">Welcome to your Dashboard.</p>
          <button type="button" className="btn btn-primary mb-3" onClick={handleLogout}>
            Logout
          </button>
          <a href="/postlogin" className="btn btn-secondary d-block">
            Go to Postlogin Screen
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
