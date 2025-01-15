import React, { useState } from "react";
import Data from "../../data/Data";
import Category from "../category/Category";
//  new "Set" yaha per category unique values return karta
const allCategories = ["all", ...new Set(Data.map((item) => item.category))];
const Menu = () => {
  const [MenuItems, SetMenuItems] = useState(Data);
  // state mien declare kara ine
  const [categories, SetCategories] = useState(allCategories);

  //   yaha per filter item create karney ki functionality likhre
  // filteritems function mien "category" parameter assume karey
  const filterItems = (category) => {
    if (category === "all") {
      SetMenuItems(Data);
      return;
    }

    {
      /* if (category === "breakfast") {
      const newItems = Data.filter((item) => item.category === "breakfast");
      SetMenuItems(newItems);
      return;
    }

    if (category === "lunch") {
      const newItems = Data.filter((item) => item.category === "lunch");
      SetMenuItems(newItems);
      return;
    }

    if (category === "shakes") {
      const newItems = Data.filter((item) => item.category === "shakes");
      SetMenuItems(newItems);
      return;
    }
   } */
    }

    // yaha per "item.category" data ko reprenst kara
    // yaha per "category"  filteritems function k parameter ko reprenst kara
    // const newItems = MenuItems.filter((item) => item.category === category);
    // yaha per "Data" ko directly filter karey agar "Data" ko "useState" istemal karey toh functionality break hori
    const newItems = Data.filter((item) => item.category === category);
    SetMenuItems(newItems);
  };

  return (
    <>
      <div>Menu</div>
      <div className="category">
        <Category filterItems={filterItems} categories={categories} />
      </div>
      <div className="items">
        {MenuItems.map((item) => {
          const { id, title, category, price, img, desc } = item;
          return (
            <div className="items" key={id}>
              <div className="item">
                <h1>id = {id}</h1>
                <p>title = {title}</p>
                <div className="img">
                  <img src={img} alt={title} width={"100px"} />
                </div>
                <p>price = {price}</p>
                <p>description = {desc}</p>
                <p>category = {category}</p>
                <hr />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
