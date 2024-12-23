import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const Topic = ({ topic }) => {
  const { name, logo, id } = topic;

  const nevigate = useNavigate();

  const loadQuiz = () => {
    nevigate(`/quiz/${id}`);
  };

  return (
    <div className="m-3 border p-2 rounded-lg shadow-lg">
      <div className="bg-gray-300  border rounded-lg shadow">
        <img
          className="transition duration-300 ease-in-out transform hover:scale-110"
          src={logo}
          alt=""
        />
      </div>
      <div className="flex justify-between mt-3">
        <p className="text-xl font-semibold">{name}</p>
        <button
          onClick={loadQuiz}
          className="bg-blue-600 text-white py-2 px-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-110"
        >
          Start Quiz
          <FontAwesomeIcon className="ms-1" icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Topic;
