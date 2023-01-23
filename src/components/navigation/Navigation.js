import React from 'react';
import {NavLink} from "react-router-dom";
import DarkThemeButton from "../buttons/darkThemeButton/DarkThemeButton";

const Navigation = () => {
    const activeLink = "nav-list__link nav-list__link--active";
    const notActiveLink = "nav-list__link";
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    {<NavLink to="portfolio" className="logo">Portfolio</NavLink>}

                    <DarkThemeButton/>

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="portfolio"
                                     className={({isActive}) => isActive ? activeLink : notActiveLink}>Main</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="my-portfolio/projects"
                                     className={({isActive}) => isActive ? activeLink : notActiveLink}>Projects</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="my-portfolio/contacts"
                                     className={({isActive}) => isActive ? activeLink : notActiveLink}>Contacts</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;