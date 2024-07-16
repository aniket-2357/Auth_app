import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  
  
  // const [message, setMessage] = useState('');
  const [step, setStep] = useState(1);

  const { sendPasswordReset} = useAuth();
  const navigate = useNavigate();

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordReset(email);
      alert('Verification code sent. Please check your inbox. And follow the link given to reset your password.');
      navigate('/login')
      setStep(2);
    } catch (error) {
      alert('Error sending verification code. Please try again.');
      console.error(error);
    }
  };

  

  return (
    <div className="auth-container page-container">
      <h2>Forgot Password</h2>
      {step === 1 && (
        <form onSubmit={handleSubmitEmail}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Send email to reset Password</button>
          
        </form>
        
      )}
      
      
      
      
    </div>
  );
};

export default ForgotPassword;
