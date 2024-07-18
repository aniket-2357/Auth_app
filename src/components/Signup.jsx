import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from './GoogleButton';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/Signup.css';

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate('/dashboard');
    } catch {
      alert("Please have the strong Password and password length should be more than or equal to 6")
      setError('Failed to create an account');
    }
    setLoading(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <div className="card shadow-lg p-4 rounded-3 card shadow-lg p-4 rounded-3 signup-card" style={{ maxWidth: '800px', width: '100%', backgroundColor: '#fff3e6' }}>
        <h2 className="text-center mb-4 text-primary text-center mb-4 signup-heading">Sign Up</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold text-secondary form-label fw-bold signup-label">Email</label>
            <input type="email" id="email" autoComplete="email" className="form-control border-primary form-control signup-input" ref={emailRef} required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold text-secondary">Password</label>
            <input type="password" id="password" autoComplete="new-password" className="form-control border-primary" ref={passwordRef} required />
          </div>
          <div className="mb-3">
            <label htmlFor="password-confirm" className="form-label fw-bold text-secondary">Password Confirmation</label>
            <input type="password" id="password-confirm" autoComplete="new-password" className="form-control border-primary" ref={passwordConfirmRef} required />
          </div>
          <div className="d-flex justify-content-center">
            <button disabled={loading} type="submit" className="btn btn-success w-100">Sign Up</button>
          </div>
        </form>
        <GoogleButton className="mt-3 w-100" />
        <div className="text-center mt-3">
          Already have an account? <Link to="/login" className="text-decoration-none text-primary">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
