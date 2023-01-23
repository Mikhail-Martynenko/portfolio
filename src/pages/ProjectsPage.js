import React from 'react';
import Project from "../components/project/Project";
import {projectsArray} from "../helpers/projectsArray";
const ProjectsPage = () => {

    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projectsArray.map((project, index) => {
                        return <Project key={project.id} index={index} title={project.title} img={project.img}
                                        tools={project.tools}
                                        githubLink={project.githubLink}/>
                    })}
                </ul>
            </div>
        </main>
    );
};

export default ProjectsPage;