import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const GoogleButton = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/dashboard');
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <button onClick={handleGoogleSignIn} className="btn btn-outline-primary w-100 my-3">
      Sign in with Google
    </button>
  );
};

export default GoogleButton;

