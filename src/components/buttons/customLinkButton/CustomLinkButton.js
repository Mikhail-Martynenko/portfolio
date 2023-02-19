import React from 'react';

const CustomLinkButton = () => {
    return (
        <a className="btn" href="https://github.com/Mikhail-Martynenko">
            <div className="name">
                <div className="cosmic" data-text="Check"><span>Check</span></div>
                <div className="cosmic" data-text="My"><span>My</span></div>
                <div className="cosmic" data-text="GitHub"><span>GitHub</span></div>
                <div className="cosmic" data-text="Profile"><span>Profile</span>
                </div>
            </div>
        </a>
    );
};

export default CustomLinkButton;