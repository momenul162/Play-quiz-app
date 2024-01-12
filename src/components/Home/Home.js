import React from "react";
import "./Home.css";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topics/Topic";

const Home = () => {
  const topics = useLoaderData();

  return (
    <header>
      <section className="header-container">
        <div className="banner">
          <p className="my-6 pt-4 lg:pt-20 font-bold text-center text-3xl lg:text-4xl text-[#be185d]">
            Welcome to Quiz platform
          </p>
          <p className="px-3 lg:px-48 text-center text-white">
            A quiz is a powerful tool that engages learners and promotes active participation in the
            learning process. It goes beyond traditional assessment by providing immediate feedback
            and allowing learners to assess their understanding of a topic.
            <br></br>
            Quizzes motivate and engage participants through the element of competition, making
            learning a fun and interactive experience.
          </p>
        </div>
      </section>
      <section className="my-10 grid md:grid-cols-2 lg:grid-cols-4">
        {topics.data.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </section>
    </header>
  );
};

export default Home;
