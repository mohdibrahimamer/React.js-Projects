import React from 'react'
import { Link, useParams } from "react-router-dom";
import CocktailDetails from "../../component/cocktails- details/CocktailDetails";

// kuch karo yaha per project mien galti hui hai
const SingleCocktails = ({ id, name, image, glass, info }) => {
    return (
        <>
            <article>
                <div key={id}>
                    <h1>id = {id}</h1>
                    <div className="cocktails-details">

                        <h1> {name}</h1>
                        <img src={image} width={"100px"} alt="" />
                        <p> {glass}</p>
                        <p> {info}</p>
                        <Link to={`/cocktails/${id}`}>
                            <button type='button'>more  Details</button>
                        </Link>
                    </div>
                </div>

                <div className="cocktail-details">
                    <CocktailDetails />
                </div>
            </article>
        </>
    )
}

export default SingleCocktails