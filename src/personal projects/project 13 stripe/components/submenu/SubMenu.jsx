import React, { useState, useEffect, useRef } from 'react'
import { useGlobalContext } from '../../context/Context';
const SubMenu = () => {
    const { isSubMenuOpen, location, page: { page, links } } = useGlobalContext();
    const container = useRef(null);
    // columns k liye usestate create karey
    const [columns, setColumns] = useState('col-2')
    console.log(columns)

    useEffect(() => {
        setColumns('col-2')
        // ek variable declare karey submenu k naam se
        const submenu = container.current
        // console.log(submenu)
        // yaha per ek variable create karey "coordinates" k naam se
        const { center, bottom } = location
        submenu.style.left = `${center}px`
        submenu.style.top = `${bottom}px`

        if (links.length === 3) {
            setColumns('col-3')

        }

        if (links.length > 3) {
            setColumns('col-4')
        }


    }, [location, links]);

    return (
        <>
            <div>SubMenu component</div>
            <p>yeh component ki puri styling sahi karo</p>
            <aside className={'`${isSubMenuOpen ? "submenu show-submenu" : "submenu-wrapper"}`'}
                ref={container}>
                hello item
            </aside>
            <div className="hover-links">
                <h1>page  = {page}</h1>

                <div className={`page-links ${columns}`} >
                    {links.map((link, index) => {
                        const { url, icon, label } = link
                        return (
                            <a href={url} key={index}>
                                <button type='button'>{icon}</button>
                                <p>{label}</p>
                            </a>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default SubMenu