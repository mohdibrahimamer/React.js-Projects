import React, { useState, useReducer } from 'react';
import Home from './home/Home';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/Context';
const CartHome = () => {


    return (
        <>
            <div>CartHome</div>
            <AppProvider>

                <Router>

                    <Navbar />

                    <Home />
                </Router>
            </AppProvider>



        </>
    )
}

export default CartHome