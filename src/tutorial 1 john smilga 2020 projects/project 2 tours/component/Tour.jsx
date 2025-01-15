import React, { useState } from "react";

const Tour = ({ id, title, price, description, image, category }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <div>Tour</div>
      <div className="tour">
        <div className="img">
          <img src={image} alt={title} width={"100px"} />
        </div>

        <div className="heading">
          <p className="title">{title}</p>
          <p className="price">${price}</p>
          <p className="desc">
            {/* yaha per "substring" ek function hai 0 to 100 words show karta  */}
            {readMore ? description : `${description.substring(0, 100)}...`}
            <button type="button" onClick={() => setReadMore(!readMore)}>
              {readMore ? "show less" : "show more"}
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Tour;
