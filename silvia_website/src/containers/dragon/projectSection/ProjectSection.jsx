import React from "react";
import './projectSection.css';
import {MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { ProjectFile } from "../../../components/dragon";

const ProjectSection = () => {
    return(
        <div className="dragon_projectSection">
            <MdNavigateBefore size={100} className="dragon_projectSection_btn" color={"#969696"}/>
            <ProjectFile />
            <MdNavigateNext size={100} className="dragon_projectSection_btn" color={"var(--color-dragon-item)"}/>
        </div>
    )
}

export default ProjectSection;