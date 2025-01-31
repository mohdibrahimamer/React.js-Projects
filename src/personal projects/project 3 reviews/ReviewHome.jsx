import React from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { RiDoubleQuotesR } from "react-icons/ri";
import Review from "./components/Review";
const ReviewHome = () => {
  return (
    <>
      <div>Review home</div>
      <div className="reviews">our reviews</div>
      <div className="review">
        <Review />
      </div>
    </>
  );
};

export default ReviewHome;
