import React, { useState } from 'react';
import { fetchQuizQuestions } from "./API"
//components
import QuestionCard from "./components/QuestionCard";
//Types
import { Difficulty } from "./API";

const Total_Questions = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(Total_Questions, Difficulty.EASY))


  const startTrivia = async () => {


  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={startTrivia}>Start</button>
      <p className="score">Score:</p>
      <p>Loading Questions</p>
      {/*<QuestionCard
        questionNr={number + 1}
        totalQuestions={Total_Questions}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswer[number] : undefined}
        callback={checkAnswer}
      />*/}
      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
