import React from "react";
import './dragonIntro.css';
import imgUrl from '../../../assets/dragon.png'

const DragonIntro = () => {
    return(
        <div className="about_dragon">
            <h2>A Little Background Story To Dive In</h2>
            <p>Some of you might have noticed that I’ve divided the website into two themes, the Dragon theme that represents my work life and the Cat theme that represents my personal life.<br/><br/>I was born in the year of Dragon. In Chinese culture, Dragon symbolizes mighty and auspicious power, especially the control of water, rainfall, typhoons and floods. Therefore good and outstanding people often are compared to dragons.<br/><br/>I choose Dragon to feature my work section because I wish I can be like a dragon in the field of work, and also because it’s something related to me and my own culture.</p>
            <div className="about_dragon_img">
                <img src={imgUrl} alt="dragon introduction"/>
            </div>
            <p>The contents that categorized to the Dragon Section might include some of the projects that I’ve been working on, notes that I took while studying new things, the results that I accomplished.</p>
        </div>
    )
}

export default DragonIntro;