import React, { useState, useContext } from 'react'
import SubLinks from '../data/Data'

// yaha per context create karey 
const AppContext = React.createContext()

// childern likna zaruri puri application wrap karne k liye
const AppProvider = ({ children }) => {
    // yaha per 2 useState dalrey 
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

    // yaha per "opensidebar" ka function likhre
    const openSidebar = () => {
        setIsSidebarOpen(true)

    }

    // yaha per "closesidebar" ka function likhre
    const closeSidebar = () => {
        setIsSidebarOpen(false)

    }

    //    yaha per "open submenu" ka function likhre
    const openSubMenu = () => {
        setIsSubMenuOpen(true)

    }

    // yaha per "close submenu" ka function likhre
    const closeSubMenu = () => {
        setIsSubMenuOpen(false)

    }
    return <AppContext.Provider value={{ isSidebarOpen, isSubMenuOpen, openSidebar, closeSidebar, openSubMenu, closeSubMenu }}>
        {children}
    </AppContext.Provider>
}

// yaha per custom hook likhre
const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext }