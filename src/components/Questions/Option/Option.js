import React from "react";

const Option = ({ option, userAnswerHandler, id }) => {
  return (
    <div className="border py-4 px-6 flex items-center gap-2">
      <input
        onChange={(e) => userAnswerHandler(e, id)}
        className="radio radio-primary"
        type="radio"
        id="chooseOption"
        name="radio-1"
        value={option}
      />
      <label htmlFor="chooseOption">{option}</label>
    </div>
  );
};

export default Option;
