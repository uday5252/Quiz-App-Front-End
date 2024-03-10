import React, { useContext } from "react";
import { dataBasket } from "..";
import "./style.css"; // Import the CSS file
import "./style.css";
import { useNavigate } from "react-router-dom";

function QuizPage() {
  const { set, username } = useContext(dataBasket);
  const navigate = useNavigate()

  function startQuizClick() {
    navigate("/question")
    set("question");
  }

  return (
    <div className="homepage">
      <h1>Welcome <b style={{ fontSize: "25px", color: "black", fontWeight: 900 }}>{username}</b>! You are now logged in! Start your quiz!</h1>
      <button className="homepage-button" onClick={startQuizClick}>
        Start Quiz
      </button>
    </div>
  );
}

export default QuizPage;
