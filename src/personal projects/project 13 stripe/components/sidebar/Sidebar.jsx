import React, { useState } from 'react'
import { useGlobalContext } from '../../context/Context'
import SubLinks from '../../data/Data'
import { IoClose } from "react-icons/io5";
const Sidebar = () => {
    // yeh file responsive mien modal bana k styling karo iski 
    const [allLinks, setAllLinks] = useState(SubLinks)
    const { isSidebarOpen, CloseSidebar } = useGlobalContext()
    return (
        <>
            <div>Sidebar</div>
            <div className="">
                <aside className={`{${isSidebarOpen ? "sidebar show-sidebar" : "sidebar-wrapper"}}`}>
                </aside>

                <div className="sidebar">
                    <button type='button' onClick={CloseSidebar}>
                        <IoClose />
                        close side bar

                    </button>
                </div>

                <div className="responsive-links">
                    {allLinks.map((item, index) => {
                        const { page, links } = item
                        return (
                            <>
                                <h1 key={index}>page ={page}</h1>

                                <div className="ind-link">
                                    {/* yaha per dusrey waqt map isliye lagrey kyun ki data k under 2  arrays hai bolk "links" ek array jis k under multiple objects hai  */}
                                    {links.map((link, index) => {
                                        const { url, icon, label } = link
                                        return (
                                            <>
                                                <h1 key={index}>
                                                    label={label}
                                                </h1>

                                                <button type="button">{icon}</button>

                                                <a href={url} target="_blank">{label} </a>

                                            </>
                                        )
                                    })}
                                </div>
                            </>
                        )
                    })
                    }
                </div>


            </div>

        </>
    )
}

export default Sidebar