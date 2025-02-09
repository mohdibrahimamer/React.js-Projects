import React, { useState, useReducer } from 'react';
import Data14 from '../data/Data14';
import { FaCartArrowDown } from "react-icons/fa";
import SingleCart from '../components/cart/SingleCart';
import { reducer } from '../reducer/reducer';
import { useGlobalContext } from '../context/Context';


const Home = () => {

    const { cart, loading, total, clearCart, } = useGlobalContext();
    // const data = useGlobalContext();
    // console.log(data)




    if (loading) {
        return (
            <>
                <h1>loading </h1>
                <h1>data not found</h1>
            </>
        )
    }

    if (cart.length === 0) {
        return (
            <>
                <h1>cart is empty</h1>
                <h1>please add some items to the cart</h1>
            </>
        )
    }


    return (
        <>
            <div>Home</div>
            <div className="heading">
                <h1>your Bag</h1>
            </div>
            <div className="cartitems">
                {cart.map((item) => {
                    const { id, title, price, quantity, img, info, company } = item;
                    return (
                        <SingleCart key={id} {...item}
                        />
                    )
                })}
            </div>
            <hr />
            <br />

            <div className="total">
                <h1>total = ${total}</h1>
            </div>

            <div className="clear-button">
                <button type='button' onClick={clearCart}>
                    clear cart
                </button>

            </div>
            <br />

        </>
    )
}

export default Home