import React from "react";

const Option = ({ option, userAnswerHandler, id }) => {
  return (
    <div className="border py-4 px-6">
      <input
        onChange={(e) => userAnswerHandler(e, id)}
        className="mr-1 bg-white"
        type="radio"
        id="chooseOption"
        name="option"
        value={option}
      />
      <label htmlFor="chooseOption">{option}</label>
    </div>
  );
};

export default Option;
