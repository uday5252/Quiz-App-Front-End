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

  useEffect(() => {
    if (timerExpired) {
      setTimeout(() => {
        window.alert("Time's up! Please close this tab or window.");
      }, 1000); // Delaying the alert to ensure it is displayed after the component renders
    }
  }, [timerExpired]);

  // Calculate hours, minutes, and remaining seconds
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className="timer-container">
      <h3 className="timer-heading">Time Remaining:</h3>
      <div className="timer">
        {hours < 10 ? '0' + hours : hours}:
        {minutes < 10 ? '0' + minutes : minutes}:
        {remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}
      </div>
      {timerExpired && <p>Time's up! Please close this tab or window.</p>}
    </div>
  );
}

export default Timer;
