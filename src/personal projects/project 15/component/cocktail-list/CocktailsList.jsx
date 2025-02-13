import React from 'react';
import Loading from '../loading/Loading';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/Context';
import SingleCocktails from '../../pages/single-cocktail/SingleCocktails';
const CocktailsList = () => {
    const { cocktails, loading } = useGlobalContext();
    if (loading) {
        return <Loading />
    }

    if (cocktails.length < 1) {
        return (
            <div>
                <h2>No cocktails matched your search</h2>
            </div>
        )
    }
    return (
        <>
            <div>CocktailsList</div>
            <div className="cocktails">
                {cocktails.map((cocktail) => {
                    const { id, name, image, glass, info } = cocktail;
                    return (
                        <SingleCocktails key={id} {...cocktail} />
                    )
                })}
            </div>
        </>
    )
}

export default CocktailsList