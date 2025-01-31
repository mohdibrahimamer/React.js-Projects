import React, { useState } from "react";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Data from "./data/Data";
const SliderHome = () => {
  const [people, setPeople] = useState(Data);
  const [index, setIndex] = useState(0);
  return (
    <>
      <div>Slider Home how are you </div>

      <div className="correction">
        <h1> yaha per react ki slider library use karo </h1>
        <h1> yaha per react ki slider library use karo </h1>
        <h1> yaha per react ki slider library use karo </h1>
        <h1> yaha per react ki slider library use karo </h1>
        <p>hello amer how are you</p>
      </div>

      <div className="reviews">
        <p> our Reviews </p>
        {people.map((person) => {
          const { id, name, title, quote, image } = person;
          return (
            <>

              <div className="review" key={id}>
                <h1>id = {id}</h1>
                <p>name = {name}</p>
                <p>title = {title}</p>
                <p>quote = {quote}</p>
                <div className="img">
                  <img src={image} alt={name} width={"100px"} />
                </div>
                <div className="button">
                  <button type="button">
                    <BsArrowLeftSquareFill />
                  </button>

                  <br />
                  <br />

                  <button type="button">
                    <BsArrowRightSquareFill />
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SliderHome;
