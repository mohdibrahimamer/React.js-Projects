import React from "react";

const List = ({ id, name, age, image, handleClick }) => {
  return (
    <>
      <div>List</div>
      <div className="person">
        <h1>id={id}</h1>
        <p>name={name}</p>
        <i>age={age}</i>
        <img src={image} alt={name} width={"100px"} />
        <button type="button" onClick={handleClick}>
          {" "}
          remove{" "}
        </button>
      </div>
    </>
  );
};

export default List;
