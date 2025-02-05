import React from 'react'
import NavBar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/home/Home';
import Products from './components/pages/products/Products';
import Solutions from './components/pages/solutions/Solutions';
import Developers from './components/pages/developers/Developers';
import Resources from './components/pages/resources/Resources';
import Pricing from './components/pages/pricing/Pricing';
import SignIn from './components/pages/sign in/Signin';
import ContactSales from './components/pages/contact sales/ContactSales';
import Hero from './Hero';
import Sidebar from './components/sidebar/Sidebar';
import SubMenu from './components/submenu/SubMenu';
// puri application ko provider se wrap karna hai
import { AppProvider } from './context/Context';
const StripeHome = () => {
    return (
        <>
            <Router>
                <AppProvider >
                    <NavBar />
                    <Sidebar />
                    <Hero />
                    <SubMenu />


                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/solutions" element={< Solutions />} />
                        <Route path="/developers" element={< Developers />} />
                        <Route path="/resources" element={< Resources />} />
                        <Route path="/pricing" element={< Pricing />} />
                        <Route path="/signIn" element={< SignIn />} />
                        <Route path="/contactSales" element={< ContactSales />} />

                    </Routes>
                </AppProvider>
            </Router>
        </>
    )
}

export default StripeHome