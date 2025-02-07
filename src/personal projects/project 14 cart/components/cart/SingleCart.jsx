import React from 'react'
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";
const SingleCart = ({ id, title, price, quantity, img, info, company, removeItem, IncreaseItem }) => {


    const DecreaseItem = () => {


    }
    return (
        <>
            <div>SingleCart</div>

            <div className="cart">

                <div key={id}>
                    <h1>id = {id}</h1>
                    <p>title={title}</p>
                    <img src={img} alt={title} width={"100px"} />
                    <p> price={price}</p>
                    <button type='button' onClick={() => removeItem(id)}> remove</button>

                    <p> info= {info}</p>
                    <p> company={company}</p>
                    <div className="btn-containers">
                        <button type='button' onClick={IncreaseItem}>
                            <FaArrowAltCircleUp />
                        </button>
                        <p>quantity={quantity}</p>
                        <button type='button'>
                            <FaArrowAltCircleDown />
                        </button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default SingleCart