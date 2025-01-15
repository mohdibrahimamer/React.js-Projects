import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
const SingleCard = ({ id, title, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="card">
        <p>title = {title}</p>
        <button type="button" onClick={() => setShow(!show)} className="btn">
          {show ? <FaPlus /> : <FaMinus />}
        </button>

        {show && <p>answer = {answer}</p>}
      </div>
    </>
  );
};

export default SingleCard;
