import React from "react";
import "./Home.css";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topics/Topic";

const Home = () => {
  const topics = useLoaderData();

  return (
    <main className="">
      <section className="header-container">
        <div className="banner">
          <p className="mt-6 mb-10 pt-4 lg:pt-20 font-bold text-center text-3xl lg:text-6xl text-[#c42d6c]">
            Welcome to Quiz platform
          </p>
          <p className="container mx-auto text-center text-2xl text-slate-800">
            A quiz is a powerful tool that engages learners and promotes active participation in the
            learning process. It goes beyond traditional assessment by providing immediate feedback
            and allowing learners to assess their understanding of a topic.
            <br></br>
            Quizzes motivate and engage participants through the element of competition, making
            learning a fun and interactive experience.
          </p>
        </div>
      </section>
      <section className="container mx-auto mb-10">
        <p className="mt-12 mb-5 font-bold text-center text-3xl lg:text-5xl text-slate-800">
          Choose Your Question
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {topics.data.map((topic) => (
            <Topic key={topic.id} topic={topic}></Topic>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
