import React, { useState, useReducer } from 'react';
import Data14 from './data/Data14';
import SingleCart from './components/cart/SingleCart';
import { FaCartArrowDown } from "react-icons/fa";
import { reducer } from './reducer/reducer'
// yaha per reducer ka default state
const defaultState = {
    data: []
}

const CartHome = () => {
    const [state, dispatch] = useReducer(reducer, defaultState)
    const [cartItems, setCartItems] = useState(Data14);
    console.log("cartItems", cartItems);

    // yaha per Clear cart ki funtinality likhre
    const clearCart = () => {
        setCartItems([])

    }

    // yaha per item increase  ki functionality likhre
    const IncreaseItem = () => {
        if (quantity < 1) {
            console.log("item added", quantity);
            quantity = quantity + 1;
        }
    }

    const DecreaseItem = () => {
        if (quantity < 1) {
            console.log("item added", quantity);
            quantity = quantity + 1;
        }
    }

    // yaha per remove item ki funtinality likhre
    const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id))
    }


    return (
        <>
            <div>CartHome</div>
            <div className="heading">
                <h1>your Bag</h1>
            </div>
            <div className="cartitems">
                {cartItems.map((item) => {
                    const { id, title, price, quantity, img, info, company } = item;
                    return (
                        <SingleCart key={id} {...item} removeItem={removeItem}
                            IncreaseItem={IncreaseItem} />
                    )
                })}
            </div>
            <hr />
            <br />

            <div className="clear-button">
                <button type='button' onClick={clearCart}>
                    clear cart
                </button>

            </div>
            <br />
            <div className="add-btn">
                <button type='button' >
                    <FaCartArrowDown /> Add to cart
                </button>

            </div>

        </>
    )
}

export default CartHome