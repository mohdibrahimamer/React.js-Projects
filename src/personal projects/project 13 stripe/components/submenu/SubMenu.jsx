import React from 'react'
import { useGlobalContext } from '../../context/Context';
const SubMenu = () => {
    const { isSubMenuOpen } = useGlobalContext();

    return (
        <>
            <div>SubMenu component</div>
            <p>yeh component ki puri styling sahi karo</p>
            <aside className={'`${isSubMenuOpen ? "submenu show-submenu" : "submenu-wrapper"}`'} >
                hello item
            </aside>
        </>
    )
}

export default SubMenu