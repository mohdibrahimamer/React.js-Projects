import React, { useState, useEffect } from "react";
import SingleTour from "./component/Tour";
const url = "https://fakestoreapi.com/products";
const ToursHome = () => {
  const [tours, setTours] = useState([]);
  const [Show, SetShow] = useState(false);
  console.log(tours);

  //   yaha per get tours functionality likhre
  const GetTours = async () => {
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
    console.log(tours);
  };

  useEffect(() => {
    GetTours();
  }, []);
  return (
    <>
      <div>ToursHome</div>
      <h1> our products</h1>
      {tours.map((tour) => {
        const { id, title, price, description, image, category } = tour;
        return (
          <>
            <SingleTour key={id} {...tour} Show={Show} />

            <button
              type="button"
              onClick={() => setTours(tours.filter((tour) => tour.id !== id))}
            >
              not interested
            </button>
            <hr />
          </>
        );
      })}
    </>
  );
};

export default ToursHome;
