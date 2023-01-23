import React from 'react';
import CustomLinkButton from "../buttons/customLinkButton/CustomLinkButton";
import gifBug from "../../image/gifs/not-bug-this-is-a-feature.gif"
import gifEarth from "../../image/gifs/earth.gif"
import gifAstronaut from "../../image/gifs/astronaut.gif"

const Header = () => {
    return (
        <header className="header">
            <div>
                <img className="gif" src={gifEarth} width="260" alt='gif'/>
            </div>
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is Mikhail</strong><br/>
                    I'm a frontend-developer<br/>
                    <img src={gifAstronaut} width="180" alt='gif'/>
                </h1>
                <div className="header__text">
                </div>
                <CustomLinkButton/>
            </div>
            <div>
                <img className="gif" src={gifBug} width="260" alt='gif'/>
            </div>
        </header>
    );
};

export default Header;