import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/home/Home';
import Team from './components/pages/team/Team';
import Projects from './components/pages/projects/Projects';
import Calendar from './components/pages/calendar/Calendar';
import Documents from './components/pages/documents/Documents';
const SidebarHome = () => {
    return (
        <>
            <Router>

                <div>SidebarHome</div>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Team" element={<Team />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/Calendar" element={<Calendar />} />
                    <Route path="/Documents" element={<Documents />} />
                </Routes>
            </Router>
        </>
    )
}

export default SidebarHome