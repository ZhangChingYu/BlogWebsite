import React from "react";
import './about.css';
import { Navbar } from '../../components'
import { Intro, CatIntro, DragonIntro } from '../../components/about';
import { Footer } from '../../containers';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigator = useNavigate();

    return(
        <div className="about">
            <Navbar navigator={navigator}/>
            <Intro/>
            <DragonIntro/>
            <CatIntro/>
            <Footer/>
        </div>
    )
}

export default About;