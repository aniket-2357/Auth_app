import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
        headers: {
          'X-Api-Key': 's9PNuRJRcNWGVwmBJThRXA==eHx8deIW6dRpIaGO',
        },
      });
      const data = await response.json();
      setQuote(data[0].quote);
      setAuthor(data[0].author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote(); // Fetch initial quote

    const intervalId = setInterval(() => {
      fetchQuote();
    }, 5000); // Fetch new quote every 5 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <div className="home-container page-container">
      <div className="welcome-container">
        <h1>Welcome to Our Authentication App</h1>
        <p>Please login or sign up to continue.</p>
      </div>
      <div className="quote-container">
        <blockquote className="blockquote text-center mt-4">
          <p className="mb-0">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      </div>
    </div>
  );
};

export default Home;
