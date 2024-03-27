import React, { useState, createContext } from "react";
import { render } from "react-dom";
import QuizPage from "./components/QuizPage";
import Question from "./components/Question";
import Result from "./components/Result";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router } from 'react-router-dom';
import "./components/style.css";


export const dataBasket = createContext();

function App() {
  const [data, setData] = useState("homepage");
  const [score, setScore] = useState(0);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [maxScore, setMaxScore] = useState(100);
  const [loggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <dataBasket.Provider value={{ 
          loggedIn, 
          setIsLoggedIn, 
          set: setData, 
          score, 
          setScore, 
          username, 
          setUsername, 
          maxScore, 
          setMaxScore,
          email,
          setEmail
        }}>
          {data === "homepage" && <HomePage data={loggedIn}/>}
          {data === "quizpage" && <QuizPage />}
          {data === "login" && <Login />}
          {data === "register" && <Register />}
          {data === "question" && <Question />}
          {data === "result" && <Result />}
        </dataBasket.Provider>
      </div>
    </Router>
  );
}

render(<App />, document.getElementById("root"));
