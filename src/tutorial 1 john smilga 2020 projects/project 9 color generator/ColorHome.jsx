import React, { useState } from 'react'
import SingleColor from './components/single color/SingleColor'
// yaha per colors ki library use karey "value.js" k naam se
import Values from 'values.js'
import rgbToHex from './components/single color/Utils'

const ColorHome = () => {
    const [color, setColor] = useState('')
    const [error, SetError] = useState(false)
    // yaha per colors ki list create karey
    const [list, SetList] = useState(new Values('#f15025').all(10))

    // yaha per handle submit ki funtinality likhre
    const handleSubmit = (e) => {
        e.preventDefault()
        try {

            // yaha per ".all" ka matlab purey colors generate karta une
            // yaha per number 10 ka matlab 100% divided by 10
            const colors = new Values(color).all(10)
            SetList(colors)
            console.log(colors)
        } catch (error) {
            SetError(true)
            console.log(error)

        }

    }
    return (
        <>
            <div className="color">color home </div>

            <div className="colors">
                <h1>color generator </h1>
                <form action="" onSubmit={handleSubmit}>

                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="#f15025" />


                    <button type="submit" onClick={handleSubmit}
                    >submit</button>
                </form>
            </div>

            <div className="list">
                <p>the colors list start here </p>
                {list.map((item, index) => {
                    const { alpha, type, rgb, weight } = item
                    return (
                        <>
                            <SingleColor key={index} {...item} />
                        </>

                    )
                })}
            </div>
        </>
    )
}

export default ColorHome