import React, { useState } from "react";
import QuestionList from "./QuestionList";
import './src/component/Quiz.css'
function Quiz() {
  const Questions = [
    {
      question: "what is npm",
      options: ["node package manager", "error", "all of the above"],
      answers: "node package manager",
    },
    {
      question: "what is 2+1",
      options: ["3", "33", "4", "16"],
      answers: "3",
    },
  ];

  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0); // added (required)

  const handleClick = (option) => {
    setCurrentAnswer(option);
    if (option === Questions[currentQuestionIndex].answers)
      // fixed answer → answers
      setScore(score + 1);
  };

  const handleNextQuestion = () => {
    setcurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentAnswer(null);
  };

  return (
    <div>
      {currentQuestionIndex < Questions.length ? (
        <div>
          <QuestionList
            question={Questions[currentQuestionIndex].question}
            options={Questions[currentQuestionIndex].options}
            handleClick={handleClick}
            currentAnswer={currentAnswer}
          />
          <button
            disabled={currentAnswer == null}
            className={currentAnswer === null ? "button-disable" : "button "}
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
        </div>
      ) : (
        <div> YOUR SCORE IS {score}</div>
      )}
    </div>
  );
}

export default Quiz;
