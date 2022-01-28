import React from "react"
import img from "../images/istockphoto-664966806-612x612.jpg"

function Hero() {
    return (
        <section className="hero">
            <img src={img} className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}
export default Hero;