import React, { } from "react";
import './intro.css';
import imgUrl from '../../../assets/cat.png';

const Intro = () => {
    return(
        <div className="intro">
            <div className="intro_img">
                <img src={imgUrl} alt="Introdution"/>
            </div>
            <div className="intro_content">
                <h2>Hello, I’m Silvia Chang.</h2>
                <p>I’m a person who are currently learning about coding. In order to do more practices and see how far I can go, I built this personal website for myself to exam my result of learning React.js <br/><br/>After this website is officially launched, it can also be a perfect media for posting my study results and share my personal life with others. That’s right, a blog website.<br/><br/>Hopefully, I you guys can see this website up and running, fingers cross.</p>
            </div>
        </div>
    )
}

export default Intro;