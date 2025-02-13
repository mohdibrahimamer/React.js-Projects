import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <Link to="/">TheCocktailDb</Link>
                </div>
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link to="/">home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>


        </>
    )
}

export default Navbar
