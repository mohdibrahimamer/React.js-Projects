import React from 'react'
import { Link } from "react-router-dom";
import { useGlobalContext } from '../../context/Context';
import { MdMenu } from "react-icons/md";
const Navbar = () => {
    const { openSidebar, openSubMenu, closeSubMenu } = useGlobalContext()


    // yaha per display submenu ki functionality likhre
    const displaySubMenu = (e) => {
        // console.log('target', e.target)
        // yaha per variable create karey "page" k naam se
        const page = e.target.textContent
        // yaha per creating temporary button
        const tempBtn = e.target.getBoundingClientRect()
        const center = (tempBtn.left + tempBtn.right) / 2
        const bottom = tempBtn.bottom - 3


        openSubMenu(page, { center, bottom })

    }

    // yaha per handleSubmenu ki funtinality likhre
    const handleSubmenu = (e) => {
        if (!e.target.classList.contains('responsive-links')) {
            closeSubMenu()
        }
    }
    return (
        <>
            <nav onMouseOver={handleSubmenu}>
                <ul>
                    <div className="left-logo">

                        <p>Stripe </p>

                        <div className="responsive">
                            {/* yeh responsiveness mien add karo or iski css likho */}
                            <button type='button' onClick={openSidebar} >
                                <MdMenu />
                            </button>

                            <div className="responsive-links">
                                <li>
                                    {/* yaha button k "names" zarur "data" mien page ki link se match karna */}
                                    <button type='button' onMouseOver={displaySubMenu}>products</button>
                                </li>

                                <li>
                                    <button type='button' onMouseOver={displaySubMenu}>developers</button>
                                </li>

                                <li>
                                    <button type='button' onMouseOver={displaySubMenu}>company</button>
                                </li>

                            </div>

                            <div className="sign-in">
                                <button type='button'>Sign in</button>
                            </div>

                        </div>

                    </div>
                    <li>
                        <Link to="/">home</Link>
                    </li>

                    <li>
                        <Link to="/products">products</Link>
                    </li>

                    <li>
                        <Link to="/solutions">solutions</Link>
                    </li>

                    <li>
                        <Link to="/developers">developers</Link>
                    </li>

                    <li>
                        <Link to="/resources">resources</Link>
                    </li>

                    <li>
                        <Link to="/pricing">pricing</Link>
                    </li>

                    <li>
                        <Link to="/signIn">signIn</Link>
                    </li>

                    <li>
                        <Link to="/contactSales">contactSales</Link>
                    </li>

                </ul>
            </nav>
        </>
    )
}

export default Navbar