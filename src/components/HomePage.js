// HomePage.js
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import QuizPage from './QuizPage';
import Question from './Question';
import Result from './Result';
import "./style.css"

function HomePage(props) {
  // Define an array of motivational quotes
  const quotes = [
    "Believe in yourself and all that you are.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "The only way to do great work is to love what you do.",
    "The future belongs to those who believe in the beauty of their dreams."
  ];

  // Randomly select a quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div style={{ 
      backgroundImage: `url(https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`, // Set background image
      backgroundSize: 'cover',
      backgroundPosition: 'center center', // Center the background image both horizontally and vertically
      height: '100vh', // Full viewport height
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div style={{ color: 'rgba(0, 0, 0, 0.8)', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{marginTop: -300, marginLeft: 100, color: 'darkblue', fontSize: '3em', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Welcome to MERN Quiz!</h1>
        <p style={{ marginTop: 20, marginLeft: 100, color: 'darkblue', fontSize: '1.5em', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{randomQuote}</p>
        <div style={{ marginTop: 20 }}>
          <Link to="/login" style={{ marginRight: 20, color: 'white', backgroundColor: 'darkblue', padding: '10px 20px', textDecoration: 'none', borderRadius: 5 }}>Login</Link>
          <Link to="/register" style={{ color: 'white', backgroundColor: 'darkblue', padding: '10px 20px', textDecoration: 'none', borderRadius: 5 }}>Register</Link>
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/quizpage" element={<QuizPage />} />
          <Route path="/question" element={<Question />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </div>
  );
}

export default HomePage;
