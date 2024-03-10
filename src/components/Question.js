import React, { useState, useContext, useEffect } from "react";
import { dataBasket } from "..";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";
import questions from "../Questions.json"; // Import questions from JSON file

function Question() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  // Initialize selectedAnswers with empty strings for each question
  useEffect(() => {
    setSelectedAnswers(Array.from({ length: questions.length }, () => ""));
  }, []);

  const { score, setScore, set } = useContext(dataBasket);

  function goToNextQuestion() {
    if (questions[currentQuestionIndex].Answer === selectedAnswers[currentQuestionIndex]) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentIndex => currentIndex + 1);
  }

  function collectAnswer(answer) {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(updatedAnswers);
  }

  function goToResults() {
    if (questions[currentQuestionIndex].Answer === selectedAnswers[currentQuestionIndex]) {
      setScore(score + 1);
    }
    navigate("/result");
    set("result");
  }

  function goToQuestion(index) {
    setCurrentQuestionIndex(index);
  }

  // Check if all questions are answered
  const allQuestionsAnswered = selectedAnswers.every(answer => answer !== "");

  return (
    <div>
      <Timer />
      <div className="question">
        <h3 className="question-title">
          Question {currentQuestionIndex + 1}: {questions[currentQuestionIndex].title}
        </h3>
        <div>
          {Object.keys(questions[currentQuestionIndex]).filter(key => key !== "title").map((choice, index) => (
            <button
              key={index}
              className={`answer-button ${selectedAnswers[currentQuestionIndex] === choice ? "selected" : ""}`}
              onClick={() => collectAnswer(choice)}
            >
              {questions[currentQuestionIndex][choice]}
            </button>
          ))}
          <div className="pagination">
            {Array.from({ length: questions.length }, (_, i) => (
              <button
                key={i}
                onClick={() => goToQuestion(i)}
                className={`page-button ${selectedAnswers[i] ? "active" : ""}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          {currentQuestionIndex === questions.length - 1 && allQuestionsAnswered ? (
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
