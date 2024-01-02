import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const QuizDetails = () => {
  const quizs = useLoaderData();

  return <div>{<Quiz quizs={quizs.data}></Quiz>}</div>;
};

export default QuizDetails;
