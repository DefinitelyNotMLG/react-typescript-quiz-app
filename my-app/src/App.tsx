import React, { useState } from 'react';
import { fetchQuizQuestions } from "./API"
//components
import QuestionCard from "./components/QuestionCard";
//Types
import { questionState, Difficulty } from "./API";

type answerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: any;
}

const Total_Questions = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<questionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<answerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);


  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      Total_Questions,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);

  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //Users Answer
      const answer = e.currentTarget.value;
      //Check answer
      const correct = questions[number].correct_answer === answer;
      // add score if answer is correct
      if (correct) setScore((prev) => prev + 1)
      //save answer in user array
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswer((prev) => [...prev, answerObject]);
    }
  }

  const nextQuestion = () => {
    //move onto the next question if not the last question
    const nextQuestion = number + 1;
    if (nextQuestion === Total_Questions) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }

  }

  return (
    <div className="App">
      <h1>React Quiz</h1>
      {gameOver || userAnswer.length === Total_Questions ? (
        <button className="start" onClick={startTrivia}>Start</button>) : null}
      {!gameOver ? <p className="score">Score:</p> : null}
      {loading ? <p>Loading Questions</p> : null}
      {!loading && !gameOver && (
        <QuestionCard
          questionNr={number + 1}
          totalQuestions={Total_Questions}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswer ? userAnswer[number] : undefined}
          callback={checkAnswer}
        />
      )}
      {!gameOver && !loading && userAnswer.length === number + 1 && number !== Total_Questions - 1 ? (
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      ) : null}
    </div>
  );
}

export default App;
