import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { RiDoubleQuotesR } from "react-icons/ri";
import Data from "../data/Data";
const Review = () => {
  const [index, SetIndex] = useState(0);
  // usestate k data ko aisa zarurat padhne per dekha sakte
  const { id, image, name, title, description } = Data[index];
  console.log(Data);

  const CheckNumber = (number) => {
    if (number > Data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return Data.length - 1;
    }
    return number;
  };

  // yaha per randomPerson ki functionkality likhre
  const RandomPerson = () => {
    let random = Math.floor(Math.random() * Data.length);
    console.log("random number", random);
    if (random === index) {
      random = index + 1;
    }
    SetIndex(random);
  };

  return (
    <>
      <div>Review component</div>
      <div className="review">
        <p>id = {id}</p>
        <img src={image} alt={name} width={"100px"} />
        <div className="details">
          <p className="name">name = {name}</p>
          <p className="title">title = {title}</p>
          <p className="description">description = {description}</p>
        </div>
      </div>

      <div className="buttons">
        <div className="right">
          <button type="button" onClick={() => SetIndex(index + 1)}>
            <FaAngleRight />
          </button>
        </div>

        <div className="left">
          <button type="button" onClick={() => SetIndex(index - 1)}>
            <FaAngleLeft />
          </button>
        </div>

        <div className="surprise">
          <button type="button" onClick={RandomPerson}>
            {" "}
            surpise me
          </button>
        </div>
      </div>
    </>
  );
};

export default Review;
