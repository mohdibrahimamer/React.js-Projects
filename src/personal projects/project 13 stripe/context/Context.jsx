import React, { useState, useContext } from 'react'
import SubLinks from '../data/Data'

// yaha per context create karey 
const AppContext = React.createContext()

// childern likna zaruri puri application wrap karne k liye
const AppProvider = ({ children }) => {
    // yaha per 2 useState dalrey 
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
    // yaha per location k liye useState create karey
    const [location, setLocation] = useState({})

    // yaha per page k liye  useState create karey
    const [page, setPage] = useState({ page: '', links: [] })



    // yaha per "opensidebar" ka function likhre
    const openSidebar = () => {
        setIsSidebarOpen(true)

    }

    // yaha per "closesidebar" ka function likhre
    const closeSidebar = () => {
        setIsSidebarOpen(false)

    }

    //    yaha per "open submenu" ka function likhre
    // yaha per text aur coordinates as a parameter pass karey
    const openSubMenu = (text, coordinates) => {
        // yaha per newpage variable create karey
        const newPage = SubLinks.find((link) => link.page === text)
        console.log(newPage)
        setPage(newPage)
        setLocation(coordinates)
        setIsSubMenuOpen(true)

    }

    // yaha per "close submenu" ka function likhre
    const closeSubMenu = () => {
        setIsSubMenuOpen(false)

    }
    return <AppContext.Provider value={{ isSidebarOpen, isSubMenuOpen, openSidebar, closeSidebar, openSubMenu, closeSubMenu, location, page }}>
        {children}
    </AppContext.Provider>
}

// yaha per custom hook likhre
const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext }