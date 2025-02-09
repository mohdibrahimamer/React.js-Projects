import React from 'react'
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";
import { useGlobalContext } from '../../context/Context';
const SingleCart = ({ id, title, price, img, info, company }) => {
    const { removeItem, amount, increase, decrease } = useGlobalContext();

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
                        <button type='button' onClick={() => increase(id)}>
                            <FaArrowAltCircleUp />
                        </button>
                        <p>amount={amount}</p>
                        <button type='button' onClick={() => decrease(id)}>
                            <FaArrowAltCircleDown />
                        </button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default SingleCart