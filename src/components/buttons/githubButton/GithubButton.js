import React from 'react';

const ButtonGithub = ({link}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="button-outline">
            Github repository
        </a>
    );
};

export default ButtonGithub;