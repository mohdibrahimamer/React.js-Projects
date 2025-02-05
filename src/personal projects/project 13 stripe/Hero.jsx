import React from 'react'
import { useGlobalContext } from './context/Context'
import Person1Image from "../../assets/project1img/person1.jpeg";
const Hero = () => {
    const { closeSubMenu } = useGlobalContext()
    return (
        <>
            <div>Hero</div>
            <div className="image">
                <img src={Person1Image} alt="person1" width={"100px"} />
                <div className="info">
                    <h1>copied from stripe home page and style it accor</h1>
                    <h1>copied from stripe home page and style it accor</h1>
                    <h1>copied from stripe home page and style it accordingly</h1>


                    <h1>Financial infrastructure to grow your revenue</h1>
                    <p>Join the millions of companies of all sizes that use Stripe to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.</p>
                    <button type='button'>Request an invite</button>
                </div>
            </div>

        </>
    )
}

export default Hero