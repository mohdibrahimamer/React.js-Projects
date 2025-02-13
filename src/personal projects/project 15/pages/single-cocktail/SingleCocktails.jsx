import React from 'react'
import { Link } from "react-router-dom";

const SingleCocktails = ({ id, name, image, glass, info }) => {
    return (
        <>
            <article>
                <div key={id}>
                    <h1>id ={id}</h1>
                    <div className="cocktails-details">
                        <h1>name= {name}</h1>
                        <img src={image} width={"100px"} alt="" />
                        <p>glass = {glass}</p>
                        <p>info = {info}</p>
                        <Link to={`/cocktails/${id}`}>
                            <button type='button'>more  Details</button>
                        </Link>
                    </div>

                </div>
            </article>
        </>
    )
}

export default SingleCocktails