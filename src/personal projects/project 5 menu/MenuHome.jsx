import React, { useState } from "react";
import Data from "./data/Data";
import Category from "./components/category/Category";
import Menu from "./components/menu/Menu";
const MenuHome = () => {
  // yaha per fileter items ka function create karey

  return (
    <>
      <div>MenuHome</div>
      <h1>
        {" "}
        yeh project ko phir se acha dekho zara dynamic values ko add karo
      </h1>

      <Menu />
      <div className="items"></div>
    </>
  );
};

export default MenuHome;
