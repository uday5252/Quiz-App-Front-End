import React, { useState, useContext } from "react";
import { dataBasket } from "..";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";
import questions from "../Questions.json"; // Import questions from JSON file

function Question() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answerChoosen, setAnswerChoosen] = useState("");
  const { score, setScore, set } = useContext(dataBasket);

  function goToNextQuestion() {
    if (questions[currentQuestionIndex].Answer === answerChoosen) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setAnswerChoosen(""); // Reset selected answer for the next question
  }

  function collectAnswer(answer) {
    setAnswerChoosen(answer);
  }

  function goToResults() {
    if (questions[currentQuestionIndex].Answer === answerChoosen) {
      setScore(score + 1);
    }
    navigate("/result");
    set("result");
  }

  return (
    <div>
      <Timer />
      <div className="question">
        <h3 className="question-title">
          Question {currentQuestionIndex + 1}: {questions[currentQuestionIndex].title}
        </h3>
        <div>
          <button
            className={`answer-button ${
              answerChoosen === "A" ? "selected" : ""
            }`}
            onClick={() => collectAnswer("A")}
          >
            {questions[currentQuestionIndex].A}
          </button>
          <button
            className={`answer-button ${
              answerChoosen === "B" ? "selected" : ""
            }`}
            onClick={() => collectAnswer("B")}
          >
            {questions[currentQuestionIndex].B}
          </button>
          <button
            className={`answer-button ${
              answerChoosen === "C" ? "selected" : ""
            }`}
            onClick={() => collectAnswer("C")}
          >
            {questions[currentQuestionIndex].C}
          </button>
          <button
            className={`answer-button ${
              answerChoosen === "D" ? "selected" : ""
            }`}
            onClick={() => collectAnswer("D")}
          >
            {questions[currentQuestionIndex].D}
          </button>

          {currentQuestionIndex === questions.length - 1 ? (
            <button className="submit-button" onClick={goToResults}>
              Submit
            </button>
          ) : (
            <button className="next-button" onClick={goToNextQuestion}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Question;
