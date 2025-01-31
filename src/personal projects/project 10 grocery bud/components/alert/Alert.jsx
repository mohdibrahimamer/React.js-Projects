import React, { useEffect } from 'react'

const Alert = ({ msg, type, removeAlert, itemsList }) => {
    useEffect(() => {
        // yaha per time interval dalre 
        const timeOut = setTimeout(() => {
            removeAlert()
        }, 3000)
        // yaha per time interval remove karey
        return () => clearTimeout(timeOut)
    }, [itemsList])
    return (
        <>
            <div>
                Alert
                <h1>msg = {msg}</h1>
                <h1>type = {type}</h1>
            </div>
        </>
    )
}

export default Alert