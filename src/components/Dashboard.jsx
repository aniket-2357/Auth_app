// src/components/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
// import PostLoginScreen from './PostLoginScreen';


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
    <>
    {/* <div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr/>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div> */}
    <div className="d-flex justify-content-center align-items-center vh-100 page-container">
      
      <div className="card" style={{width:'18rem'}} >
     
      
      
      
  <img src="https://static.vecteezy.com/system/resources/previews/005/163/927/original/login-success-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Login Successful !</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/postlogin" className="btn btn-primary my-2 d-flex justify-content-center">Go to Postlogin Screen</a>
    <button type="button" className="btn btn-primary d-flex justify-content-center " onClick={handleLogout}>Logout</button>
  </div>
</div>
      
    </div>
    </>
  );
};

export default Dashboard;
