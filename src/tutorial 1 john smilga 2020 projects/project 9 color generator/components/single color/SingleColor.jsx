import React, { useState, useEffect } from 'react'
import rgbToHex from './Utils'
const SingleColor = ({ alpha, rgb, type, weight }) => {
    const [alert, SetAlert] = useState(false);

    // yaha "bcg" variable k naam se per  "rgb" ko commas mien separate karey
    const bcg = rgb.join(',');
    console.log('bcg data', bcg);


    const hex = rgbToHex(...rgb);

    useEffect(() => {
        // clearing the clipboard
        const timeout = setTimeout(() => {
            SetAlert(false);
            // after 3 seconds alert will be cleared
        }, 3000);
        return () => clearTimeout(timeout);
    }, [alert]);



    return (
        <>
            <div className="color" onClick={() => {
                SetAlert(true);
                // yaha per copy to clipboard functionality hai general javascript se ari yeh
                navigator.clipboard.writeText(`#${hex}`);
            }}>
                <article style={{ backgroundColor: `rgb(${bcg})` }} >
                    <p>weight= %{weight}</p>
                    <p>#{hex}</p>
                </article>

                {alert && <p>copied to clipboard</p>}
            </div>

        </>
    )
}

export default SingleColor