import React, {useEffect, useState} from 'react';
import sun from "../../../image/icons/sun.svg";
import moon from "../../../image/icons/moon.svg";

const DarkThemeButton = () => {
    const [darkTheme, setDarkTheme] = useState('light')

    useEffect(() => {
        darkTheme === 'dark'? document.body.classList.add('dark-theme') : document.body.classList.remove('dark-theme')
    }, [darkTheme])

    const buttonDarkThemeActive = 'dark-theme-button dark-theme-button--active';
    const buttonDarkThemeNotActive = 'dark-theme-button';

    return (
        <button className={darkTheme === 'light' ? buttonDarkThemeNotActive : buttonDarkThemeActive}
                onClick={() => setDarkTheme((currentState) => currentState === "light" ? 'dark' : 'light')}>
            <img src={sun} alt="Light theme" className="dark-theme-button__icon"/>
            <img src={moon} alt="Dark theme" className="dark-theme-button__icon"/>
        </button>
    );
};

export default DarkThemeButton;