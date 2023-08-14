import React from "react";
import './cubeSection.css';
import { Cube } from "../../../components/dragon";
import websiteImg from '../../../assets/coding.png';
import appImg from '../../../assets/app.png';
import noteImg from '../../../assets/note.png';
import uiuxImg from '../../../assets/uiux.png';
import { useNavigate } from "react-router-dom";

const CubeSection = () => {
    const navigator = useNavigate();
    const clickHandler = (Title) => {
        navigator("/work/theme", {state:{initTheme:"works", initPos:0, workTheme:Title}});
    }
    return(
        <div className="dragon_cubeSection">
            <div className="dragon_cubeSection_context">
                <h2>Work Life.</h2>
                <p>Ever since I got my bachelor’s degree of Software Engineering, I’ve been trying new things.</p>
            </div>
            <div className="dragon_cubeSection_cubes">
                <Cube Title={"App"} imgFile={appImg} Color={"#B8C2EF"} Weight={2} Top={"2rem"} clickhHandler={clickHandler}/>
                <Cube Title={"Website"} imgFile={websiteImg} Color={"#CBFFE3"} Weight={3} clickhHandler={clickHandler}/>
            </div>
            <div className="dragon_cubeSection_cubes">
                <Cube Title={"UI/UX"} imgFile={uiuxImg} Color={"#FFDBB0"} Weight={3}  Top={"2rem"} clickhHandler={clickHandler}/>
                <Cube Title={"Notes"} imgFile={noteImg} Color={"#FFD3EE"} Weight={2} Top={"2rem"} clickhHandler={clickHandler}/>
            </div>
        </div>
    )
}

export default CubeSection;