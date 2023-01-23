import React from 'react';
import {Link} from "react-router-dom";

const Project = ({title, img,index}) => {

    return (
        <li className="project">
            <Link to={`/my-portfolio/projects/project-details/${index}`}>
                <h3 className="project__title">{title}</h3>
                <img src={img} alt={title} className="project__image"/>
            </Link>
        </li>
    );
};

export default Project;