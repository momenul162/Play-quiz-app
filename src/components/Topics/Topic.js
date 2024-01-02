import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Topic = ({ topic }) => {
  const { name, logo, id } = topic;

  const nevigate = useNavigate();

  const loadQuiz = () => {
    nevigate(`/quiz/${id}`);
  };

  return (
    <div className="m-3 border p-2 rounded-lg">
      <div className="bg-gray-300  border rounded-lg shadow">
        <img className="" src={logo} alt="" />
      </div>
      <div className="flex justify-between mt-3">
        <p>{name}</p>
        <button onClick={loadQuiz} className="bg-blue-600 text-white py-1 px-4 rounded-lg">
          Start Quiz
          <FontAwesomeIcon className="ms-1" icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Topic;
