import React from 'react';
import telegram from "../../image/icons/telegram.svg";
import github from "../../image/icons/github.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="socialNetworks">
                        <li className="socialNetworks__item">
                            <a href="https://t.me/anekaif"><img src={telegram} alt="telegram"/></a>
                        </li>
                        <li className="socialNetworks__item">
                            <a href="https://github.com/Mikhail-Martynenko"><img src={github} alt="github"/></a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© Mikhail 2023</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;