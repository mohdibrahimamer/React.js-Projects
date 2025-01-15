import React, { useState } from "react";
import List from "./component/List";
import Data from "./data/Data";
const Project1Home = () => {
  const [People, setPeople] = useState(Data);
  const handleClick = () => {
    setPeople([]);
  };
  return (
    <>
      <div>Project1Home</div>
      <h1> {People.length} birthdays today </h1>
      {People.map((person) => {
        const { id, name, age, image } = person;
        return (
          <>
            <List key={id} {...person} handleClick={handleClick} />
          </>
        );
      })}
    </>
  );
};

export default Project1Home;
