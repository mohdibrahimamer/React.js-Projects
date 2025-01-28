import React from 'react'

// yaha per konsa bhi variable ka naam dalrey localstorage ko samajh ni k liye
// list ki item lata
const name = localStorage.getItem("name");
// list ki item dekhta  screen pe
const hi = localStorage.setItem("name");
// list ki item remove karta  
const hello = localStorage.removeItem("name");
// puri list clear karta
const fullName = localStorage.clear();

const LocalStorageExplain = () => {
    return (
        <>
            <div>LocalStorageExplain</div>
        </>
    )
}

export default LocalStorageExplain