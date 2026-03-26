import React, { useState } from "react";
import QuestionList from "./QuestionList";
import './Quiz.css'
function Quiz() {
  const Questions = [
  {
    question: "What is npm?",
    options: ["Node Package Manager", "Error","No package Module", "All of the above"],
    answers: "Node Package Manager",
  },
  {
    question: "What is 2 + 1?",
    options: ["3", "33", "4", "16"],
    answers: "3",
  },
  {
    question: "Which language is used in React?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answers: "JavaScript",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "None",
    ],
    answers: "Hyper Text Markup Language",
  },
  {
    question: "Which hook is used for state in React?",
    options: ["useFetch", "useState", "useEffect", "useData"],
    answers: "useState",
  },
  {
    question: "Which company developed React?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    answers: "Facebook",
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
  <div className="quiz-container">
      {currentQuestionIndex < Questions.length ? (
        <div>
          <p>Question {currentQuestionIndex + 1} / {Questions.length}</p>
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
       <div className="score">🎉 Your Score: {score}</div>
      )}
    </div>
  );
}

export default Quiz;
