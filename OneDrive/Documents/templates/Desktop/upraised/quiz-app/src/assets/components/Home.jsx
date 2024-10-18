import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="bg"></div>
      <div className="group"></div>
      <div className="circle"></div>
      <h1 className="quiz">Quiz</h1>
      <Link to="/quiz">
        <div className="start-button">
          <span className="start-text">Start</span>
        </div>
      </Link>
    </div>
  );
};

export default Home;
