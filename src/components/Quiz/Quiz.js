import React, { useState } from "react";
import Question from "../Questions/Question";

const Quiz = ({ quizs }) => {
  const { questions, name } = quizs;
  const [result, setResult] = useState({});
  const [userAnswer, setUserAnswer] = useState([]);

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
      <p className="text-3xl text-sky-400 my-4 text-center font-bold">
        Quiz of <span className="text-purple-600">{name}</span>
      </p>
      {questions.map((quiz, index) => (
        <Question
          key={quiz.id}
          quiz={quiz}
          index={index}
          userAnswerHandler={userAnswerHandler}
        ></Question>
      ))}
      <div className="text-center">
        <button
          onClick={() => {
            rightAns(questions);
            document.getElementById("my_modal_5").showModal();
          }}
          className="px-28 py-3 bg-sky-600 my-10 font-bold text-white rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        >
          Finish
        </button>
        <dialog id="my_modal_5" className="modal sm:modal-middle text-center bg-gray-200">
          <div className="modal-box bg-gray-100">
            <h3 className="font-bold text-2xl mb-4 text-blue-700">Your Result!</h3>
            <div className="text-start ms-20">
              <h3 className="mb-3 text-lg">
                Total Answer:
                <span className="text-primary font-bold text-lg"> {result?.total}</span>
              </h3>
              <h3 className="mb-3 text-lg">
                Correct Answer:
                <span className="text-success font-bold text-lg"> {result?.correctAnswer}</span>
              </h3>
              <h3 className="mb-3 text-lg">
                Wrong Answer:
                <span className="text-error font-bold text-lg"> {result?.wrongAnswer}</span>
              </h3>
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-primary btn-outline px-6">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Quiz;
