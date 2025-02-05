import React from "react";
import "./Hero.css";
import headerPhoto from "../../../components/image/logo.png";

function Hero() {
    return (
        <div className="hero">   
            <img className="hero-photo" src={headerPhoto}/>
            <article>
                <h1>
                    AutoSalon
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </article>
        </div>
    )
}

export default Hero;
