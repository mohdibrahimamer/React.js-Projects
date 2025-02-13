import React from 'react'
import Home from './pages/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/about/About'
import Navbar from './component/navbar/Navbar'
import { AppProvider } from './component/context/Context';
import SingleCocktails from './pages/single-cocktail/SingleCocktails'
import Error from './pages/error/Error'
const Project15Home = () => {
    return (
        <>
            <div>Project15Home</div>
            <AppProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cocktails/:id" element={<SingleCocktails />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </Router>
            </AppProvider>
        </>
    )
}

export default Project15Home