import React, { useState, useRef, useEffect } from 'react'
import Data15 from '../../data/Data15';
import "./home.css"
import SingleCocktails from '../single-cocktail/SingleCocktails';
import CocktailsList from '../../component/cocktail-list/CocktailsList';
import { useGlobalContext } from '../../component/context/Context';
const Home = () => {
    const searchValue = useRef(null)
    console.log(searchValue)
    useEffect(() => {
        searchValue.current.focus();
    }, [])


    const { setSearchTerm } = useGlobalContext();


    // yaha search ki functionlity
    const searchCocktails = (e) => {
        e.preventDefault()
        setSearchTerm(searchValue.current.value)

    }

    // yaha per handleSubmit ki functionality likhre
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div className="container">

                <form action="" onSubmit={handleSubmit} >
                    <label htmlFor="search" >
                        search for your favourite cocktails
                        <input type="text" id="search" name='search' ref={searchValue}
                            onChange={searchCocktails} />
                    </label>
                </form>
            </div>

            <div className="container-2">

                <CocktailsList />


            </div>

        </>
    )
}

export default Home