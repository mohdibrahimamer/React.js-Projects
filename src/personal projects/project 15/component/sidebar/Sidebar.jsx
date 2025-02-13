import React from 'react'


import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Sidebar</h2>
            <ul className="sidebar-list">
                <li className="sidebar-item"><a href="#home">Home</a></li>
                <li className="sidebar-item"><a href="#about">About</a></li>
                <li className="sidebar-item"><a href="#services">Services</a></li>
                <li className="sidebar-item"><a href="#contact">Contact</a></li>
            </ul>

        </div>


    );
}

export default Sidebar;

