import React from "react";
import './about.css';
import { Navbar } from '../../components'
import { Intro, CatIntro, DragonIntro } from '../../components/about';
import {Footer } from '../../containers';

const About = () => {
    return(
        <div className="about">
            <Navbar/>
            <Intro/>
            <DragonIntro/>
            <CatIntro/>
            <Footer/>
        </div>
    )
}

export default About;