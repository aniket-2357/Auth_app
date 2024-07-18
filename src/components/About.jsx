import React from 'react';
import '../styles/About.css'; // Import your CSS file

const About = () => {
  return (
    <div >
      <h2 className="screen-title">About Our Project</h2>
      <div className="about-content">
        <p>
          Welcome to our authentication app! This project aims to provide a secure and seamless
          authentication experience using Google authentication.
        </p>
        <p>
          Our app allows users to sign up securely, log in with their Google accounts, and access a
          personalized dashboard post-login. It also features real-time updates using an analog
          clock and customizable speed control.
        </p>
        <p>
          Explore the features and functionalities we offer to enhance your authentication and
          user experience.
        </p>
      </div>
    </div>
  );
};

export default About;
