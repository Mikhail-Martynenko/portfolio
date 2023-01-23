import React from 'react';
import githubIcon from "../../../image/icons/github.svg";

const ButtonGithub = ({link}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="button-outline">
            <img src={githubIcon} alt="github"/>Github repository
        </a>
    );
};

export default ButtonGithub;