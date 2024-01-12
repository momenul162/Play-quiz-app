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
          <p className="my-6 pt-4 font-bold text-3xl text-[#030712]">Welcome to Quiz platform</p>
          <p className="px=3">
            A quiz is a powerful tool that engages learners and promotes active participation in the
            learning process. It goes beyond traditional assessment by providing immediate feedback
            and allowing learners to assess their understanding of a topic. Quizzes motivate and
            engage participants through the element of competition, making learning a fun and
            interactive experience. Moreover, quizzes facilitate retrieval practice, reinforcing
            memory and enhancing long-term retention of knowledge. With their ability to reinforce
            learning at different intervals, quizzes play a crucial role in optimizing learning
            outcomes.
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
