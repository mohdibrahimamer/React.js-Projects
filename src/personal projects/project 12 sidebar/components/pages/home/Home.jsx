import React, { useState } from 'react'

const Home = () => {
    const [showModal, setShowModal] = useState(true)
    // yaha per handle click ki funtinality likhre
    const handleClick = () => {
        console.log('modal clicked')
        if (!showModal) {
            setShowModal(false)
        }


    }
    return (
        <>
            <div>Home page</div>

            <div className="modal">
                <button type='button' onClick={handleClick} > show modal </button>
                {showModal && <ModalContent showModal={showModal} />}
            </div>
        </>
    )
}

// yaha modal content ka component banarey
const ModalContent = ({ showModal }) => {
    return (
        <>
            <div>modal content hai </div>
            <p>{showModal}</p>
        </>
    )
}

export default Home