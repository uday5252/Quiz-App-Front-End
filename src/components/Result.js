import React, { useContext, useEffect } from "react";
import { dataBasket } from "..";
import axios from 'axios'; // Import Axios for making HTTP requests

import "./style.css";

function Result() {
  const { score, username } = useContext(dataBasket);

  useEffect(() => {
    // Send the score data to the Express route
    axios.post('http://localhost:8000/update-score', { username, score })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error updating score:', error);
      });
  }, [score, username]);

  return (
    <div className="result">
      <h2 className="result-header">Congratulations</h2>
      <p className="result-message">
        Your total score is: <span className="score">{score}</span>
      </p>
    </div>
  );
}

export default Result;
