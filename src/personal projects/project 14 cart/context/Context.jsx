import React, { useContext, useState, useReducer } from "react";
import { reducer } from "../reducer/reducer";
import Data14 from "../data/Data14";

const AppContext = React.createContext();

const defaultState = {
    loading: false,
    cart: Data14,
    amount: 0,
    total: 0,
}




const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    // yaha per Clear cart ki funtinality likhre
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
        console.log('cart cleared')
        state.cart = []


    }

    // yaha per remove item ki funtinality likhre
    const removeItem = (id) => {
        dispatch({ type: 'REMOVE', payload: id })
    }

    // yaha increase item ki functionality likhre
    // yeh functionality checkkaro phirse
    // yaha per amount increase nai hora
    const increase = (id) => {
        dispatch({ type: 'INCREASE', payload: id })
    }


    // yeh functionality checkkaro phirse
    const decrease = (id) => {
        dispatch({ type: 'DECREASE', payload: id })
    }
    // console.log('your state', state)
    return (
        <AppContext.Provider value={{ ...state, clearCart, removeItem, increase, decrease }}>{children}</AppContext.Provider>
    );
}
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useGlobalContext };