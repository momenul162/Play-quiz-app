import React from "react";
import Option from "./Option/Option";

const Question = ({ quiz, rightAns, userAnswerHandler }) => {
  return (
    <section className="shadow-lg my-4 py-4">
      <div>
        <p className="text-2xl md-mx-24">{quiz.question}</p>
      </div>
      <form className="grid md:grid-cols-2 md:mx-24 my-8">
        {quiz.options.map((option, idx) => (
          <Option
            userAnswerHandler={userAnswerHandler}
            key={idx}
            option={option}
            quiz={quiz}
            rightAns={rightAns}
            id={quiz.id}
          ></Option>
        ))}
      </form>
    </section>
  );
};

export default Question;
