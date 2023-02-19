import React from 'react';
import ButtonGithub from "../components/buttons/githubButton/GithubButton";
import {useParams} from "react-router-dom";
import {projectsArray} from "../helpers/projectsArray";

const ProjectDetailsPage = () => {
    const {id} = useParams();
    const project = projectsArray[id];
    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>
                    <img src={project.img} className="project-details__cover" alt={project.title}/>
                    <div className="project-details__description">
                        <p>{project.tools}</p>
                    </div>
                    <ButtonGithub link={project.githubLink}/>
                </div>
            </div>
        </main>
    );
};

export default ProjectDetailsPage;