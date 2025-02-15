import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';


const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    // yaha per default search 'a' dekho 
    const [searchTerm, setSearchTerm] = useState('a');
    const [cocktails, setCocktails] = useState([]);

    const fetchDrinks = async () => {
        setLoading(true)
        try {
            // yaha per data aur search term ko ek sath dalrey 
            const response = await fetch(`${url} ${searchTerm}`)
            const data = await response.json()
            setCocktails(data);
            // yaha per api k data mien se ara drinks bol k object hai 
            const { drinks } = data;
            if (drinks) {
                // yaha per ek variable create karey "newCocktails" k naam se
                const newCocktails = drinks.map((drink) => {
                    const { idDrink, strAlcoholic, strDrink, strDrinkThumb, strGlass } = drink;
                    // yaha per new object create karey aur "drinks" object ki property se new object k properities ko match karey 
                    return { id: idDrink, name: strDrink, image: strDrinkThumb, glass: strGlass, info: strAlcoholic }
                })
                setCocktails(newCocktails)

            } else {
                setCocktails([])
            }
            setLoading(false)




        } catch (error) {
            console.log('error data', error);

        }

    }

    useEffect(() => {
        fetchDrinks()
    }, [searchTerm])

    return <AppContext.Provider value={{
        loading,
        cocktails,
        setSearchTerm,
    }} >{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useGlobalContext };

