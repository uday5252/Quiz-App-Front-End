import React, { useState, useContext, useEffect } from "react";
import { dataBasket } from "..";
import axios from 'axios'; // Import Axios for making HTTP requests
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation


import "./style.css";

function Result() {
  const { score, username, email, set } = useContext(dataBasket); // Retrieve email from context
  const navigate = useNavigate(); // Get navigate function for navigation
  console.log(email);

  useEffect(() => {
    // Send the score data to the Express route along with email
    axios.post('http://localhost:8000/send-email', { username, score, email })
      .then(response => {
        console.log(response.data);
        // After 5 seconds, navigate to the homepage
        setTimeout(() => {
          navigate("/homepage")
         set('homepage'); // Replace '/' with your homepage route
        }, 2000); // 5000 milliseconds = 5 seconds
      })
      .catch(error => {
        console.error('Error sending email:', error);
        // If there's an error, still navigate to the homepage after 5 seconds
        setTimeout(() => {
          navigate('/login'); // Replace '/' with your homepage route
        }, 2000); // 5000 milliseconds = 5 seconds
      });
  }, [score, username, email, navigate]);

  return (
    <div className="result">
      <h2 className="result-header">Congratulations, {username}!</h2>
      <p className="result-message">
        Your total score is: <span className="score">{score}</span>
      </p>
    </div>
  );
}

export default Result;
