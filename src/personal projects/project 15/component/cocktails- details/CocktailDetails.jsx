import React, { useEffect, useState } from 'react'
import Loading from '../loading/Loading';
import { useParams, Link } from 'react-router-dom';
// yeh  file error hai  dekho data screen pe nai dekharey ine 
// yaha per ki link problem hai dekho 
const CocktailDetails = () => {
    const [loading, setLoading] = useState(false);
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';




    const [cocktailInd, setCocktailInd] = useState([]);


    const { id } = useParams();
    console.log("your id is", id)

    // yaha per api fetch  kary 
    const fetchIndDrinks = async () => {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        console.log('data', data);
        setCocktailInd(data.drinks);

        if (data.drinks) {
            // isko yaha per alias bolte hai 
            const { strDrink: name, strDrinkThumb: image, strGlass: glass, strAlcoholic: info, strIngredient1, strIngredient2, strIngredient3, strIngredient4 } = data.drinks[0];

            // yaha per variable create karey lera "ingredients" k  naam se

            const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4];

            console.log(ingredients);

            // yaha per "newCocktail" k naam se variable create karey
            const newCocktail = { name, image, glass, info, ingredients };
            setCocktailInd(newCocktail);
            console.log(newCocktail);
        } else {
            setCocktailInd(null);

        }
        setLoading(false);

        useEffect(() => {
            fetchIndDrinks();
        }, [])

        if (loading === true) {
            return <Loading />;
        }

        if (!cocktailInd) {
            return (
                <div>
                    <h2>no cocktail matched your search</h2>
                </div>
            )
        }

        // state mien dal derey iske purey values 
        const { name, image, glass, info, ingredients } = cocktailInd;


        return (
            <>
                <div>CocktailDetails</div>
                <h1> id={id}</h1>

                <div className="cocktails-details">

                    <h1> {name}</h1>
                    <img src={image} width={"100px"} alt="" />
                    <p> {glass}</p>
                    <p> {info}</p>

                    <div className="ingredients">
                        {ingredients.map((item, index) => {
                            return (
                                <p key={index}>{item}</p>
                            )
                        })}
                    </div>

                </div>


                <div className="home">
                    <Link to="/">
                        <button type='button'>
                            home
                        </button>

                    </Link>
                </div>

            </>
        )
    }
}
export default CocktailDetails