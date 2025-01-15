import React, { useState } from "react";
import Data from "../../data/Data";
const Category = ({ filterItems, categories }) => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <>
      <div>Category</div>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </>
  );
};

export default Category;
