import React, { useState, useEffect } from 'react';
import './style.css'; // Import the external CSS file

function Timer() {
  const [seconds, setSeconds] = useState(600); // 10 minutes in seconds
  const [timerExpired, setTimerExpired] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(prevSeconds => prevSeconds - 1);
      } else {
        clearInterval(intervalId);
        setTimerExpired(true);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  // Convert remaining seconds to minutes and seconds
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className="timer-container">
      <h3 className="timer-heading">Time Remaining:</h3>
      <div className="timer">
        {minutes}:{remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
      </div>
      {timerExpired && <p>Time's up!</p>}
    </div>
  );
}

export default Timer;
