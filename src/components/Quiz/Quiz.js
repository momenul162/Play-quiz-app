import React, { useState } from "react";
import Question from "../Questions/Question";
import Result from "../Result/Result";

const Quiz = ({ quizs }) => {
  const { questions, name } = quizs;
  const [result, setResult] = useState();
  const [userAnswer, setUserAnswer] = useState([]);

  console.log(result);
  const rightAns = (answerSheet) => {
    const initialValue = {
      correctAnswer: 0,
      wrongAnswer: 0,
      total: userAnswer.length,
    };

    const result = answerSheet.reduce((accumulator, currrent) => {
      const findAnswer = userAnswer.find((item) => item.id === currrent.id);

      if (findAnswer) {
        findAnswer.value === currrent.correctAnswer
          ? (accumulator.correctAnswer += 1)
          : (accumulator.wrongAnswer += 1);
      }
      return accumulator;
    }, initialValue);
    setResult(result);
  };

  const userAnswerHandler = (event, id) => {
    const answer = { value: event.target.value, id };
    const prevState = [...userAnswer];
    const index = userAnswer.findIndex((item) => item.id === id);
    if (index !== -1) {
      prevState[index] = answer;
    } else {
      prevState.push(answer);
    }
    setUserAnswer(prevState);
  };

  return (
    <div>
      <p className="text-3xl text-sky-400 my-4">Quiz of {name}</p>
      {questions.map((quiz) => (
        <Question key={quiz.id} quiz={quiz} userAnswerHandler={userAnswerHandler}></Question>
      ))}
      <div>
        <button
          onClick={() => rightAns(questions)}
          className="px-28 py-3 bg-sky-600 my-10 font-bold text-white rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        >
          Finish
        </button>
      </div>
      <p>{result?.total}</p>
    </div>
  );
};

export default Quiz;
