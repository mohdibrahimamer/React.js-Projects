import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
    return (
        <>
            <div>Error page</div>
            <div className="error">
                <Link to="*">
                    402
                </Link>
                <h1> please enter the correct url address</h1>
                <h1>502 bad gate way</h1>

                <div className="home">
                    <Link to="/">Home</Link>
                </div>
            </div>

        </>
    )
}

export default Error