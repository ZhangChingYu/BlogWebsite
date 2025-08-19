import React from "react";
import "./dragonAbout.css";
import { Navbar } from '../../containers/dragon';
import { Footer } from '../../containers';
import { TopBtn } from '../../components';
import { useNavigate } from "react-router-dom";

const DragonAbout = () =>{
    const navigator = useNavigate();
    return(
        <div className="dragon_about">
            <TopBtn/>
            <Navbar navigator={navigator} isHome={false}/>
            <div className="dragon_about_body">
                about intro
            </div>
            <Footer background={"var(--color-dragon-theme)"} textColor={"white"} emailColor={"#FFF0A1"} Title={"Check Out My Github"}/>
        </div>
    )
}

export default DragonAbout;