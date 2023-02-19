import React from 'react';

const AboutMe = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">About me</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Languages and Tools</h2>
                        <div className="icons-skills">
                            <img className="icons-skills__item"
                                 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                 title="javascript" alt="javascript" width="150" height="150"/>
                            <img className="icons-skills__item"
                                 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                                 title="javascript" alt="TypeScript" width="150" height="150"/>
                            <img className="icons-skills__item"
                                 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                                 title="html5" alt="html5" width="150" height="150"/>
                            <img className="icons-skills__item"
                                 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                                 title="css3"
                                 alt="css3" width="150" height="150"/>
                            <img className="icons-skills__item"
                                 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                                 title="React" alt="React" width="150" height="150"/>
                            <img className="icons-skills__item"
                                 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                                 title="redux"
                                 alt="redux" width="150" height="150"/>
                            <img className="icons-skills__item"
                                 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                                 title="git"
                                 alt="git" width="150" height="150"/>
                            <img className="icons-skills__item"
                                 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                                 title="github" alt="github" width="150" height="150"/>
                            <img className="icons-skills__item"
                                 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                                 title="sass"
                                 alt="sass"
                                 width="150" height="150"/>
                            <img className="icons-skills__item"
                                 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                                 title="nodejs" alt="nodejs" width="150" height="150"/>
                            <img className="icons-skills__item"
                                 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-original-wordmark.svg"
                                 title="webstorm" alt="webstorm" width="150" height="150"/>
                            <img className="icons-skills__item"
                                 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original-wordmark.svg"
                                 title="webpack" alt="webpack" width="150" height="150"/>
                            <img className="icons-skills__item"
                                 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
                                 title="postgresql" alt="postgresql" width="150" height="150"/>
                            <img className="icons-skills__item"
                                 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                                 title="csharp"
                                 alt="csharp" width="150" height="150"/>
                            <img className="icons-skills__item"
                                 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                                 title="linux"
                                 alt="linux" width="150" height="150"/>
                            <img className="icons-skills__item"
                                 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
                                 title="python" alt="python" width="150" height="150"/>
                            <img className="icons-skills__item"
                                 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                                 title="cplusplus" alt="cplusplus" width="150" height="150"/>
                        </div>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Interesting details</h2>
                        <p>Graduate of the Mathematical Institute, I have a master's degree.</p>
                        <p>In my free time, I improve my knowledge of programming.</p>
                        <p>I love to play football.</p>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default AboutMe;