import React, { useState } from 'react'
import Data from "./data/Data"
const ParaHome = () => {
    const [count, SetCount] = useState(0)
    const [text, SetText] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        // yaha per count ko integer mien convert karey
        // aur yaha pe "amount" = "count"  

        let amount = parseInt(count)
        console.log('amount', amount)

        if (count <= 0) {
            amount = 1
        }

        if (count > 8) {
            // yaha per data k under 8 paragraphs hai bolk amount 8 likhre
            amount = 8
        }

        // "slice" array ka section return karta yaha pe 
        // aur yaha pe "amount" = "count"  
        SetText(Data.slice(0, amount))

    }
    return (
        <>
            <div>ParaHome</div>
            <p>hello how are you </p>
            <div className="para">
                <h3>TIRED OF BORING LOREM IPSUM </h3>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="amount">
                        paragraphs :</label>

                    <input type="number" name='amount' id='amount' value={count} onChange={(e) => SetCount(e.target.value)} />
                    <button type='submit'>Generate</button>
                </form>

                {text.map((item, index) => {
                    return <p key={index}>{item}</p>
                })}
            </div>


        </>

    )
}

export default ParaHome