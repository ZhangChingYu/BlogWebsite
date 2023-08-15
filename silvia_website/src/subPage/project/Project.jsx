import React from "react";
import './project.css';
import { Header, ProjectSection } from '../../containers/dragon';

const Project = () => {
    return(
        <div className="dragon_project">
            <Header Theme={"Project."} Timeline={"2023 - Present"} showTimeline={true} Intro={"I find the most efficient way to test out whether I learn something through, is by implementing the knowledge. Here are the project I’ve tried so far."}/>
            <ProjectSection />
        </div>
    )
}

export default Project;