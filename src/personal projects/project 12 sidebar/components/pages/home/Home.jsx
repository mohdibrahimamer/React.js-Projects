import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
const Home = () => {
    const [show, setShow] = useState(false)
    // yaha per handle click ki funtinality likhre
    const handleClick = () => {
        console.log('modal clicked')
        setShow(!show)

    }
    return (
        <>
            <div>Home page</div>

            <div className="modal">
                <button type='button' onClick={handleClick} > show modal </button>
                {show && <ShowModal />}
            </div>
        </>
    )
}


const ShowModal = () => {
    return (
        <>
            <div className="modal">
                <h1>modal</h1>
                <p>this is a modal that contains various content</p>
            </div>
        </>
    )
}

export default Home