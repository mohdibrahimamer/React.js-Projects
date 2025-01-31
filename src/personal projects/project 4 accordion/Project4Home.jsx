import React, { useState } from "react";
import Data from "./data/Data";
import SingleCard from "./component/SingleCard";
import { FaPlus, FaMinus } from "react-icons/fa";
const Project4Home = () => {
  const [Questions, setQuestions] = useState(Data);
  console.log(Questions);
  return (
    <>
      <div>Project4Home</div>
      <div className="question-home">
        questions and answers asked about login
      </div>
      <div className="cards">
        {Questions.map((question) => {
          const { id, title, answer } = question;
          return <SingleCard key={id} {...question} />;
        })}
      </div>
    </>
  );
};

export default Project4Home;
