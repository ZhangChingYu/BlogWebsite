import React, {useState} from "react";
import './theme.css';
import { NavbarHover } from '../../components/dragon';
import { TopBtn } from "../../components";
//import { Categories, DragonApp, DragonNotes, DragonWeb, DragonUIUX, Project, ComingSoon } from '../../subPage';
import { Categories, DragonApp, DragonNotes, DragonWeb, DragonUIUX, ComingSoon } from '../../subPage';
import { Footer } from "../../containers";
import { useLocation } from "react-router-dom";

const DragonTheme = () => { 
    const location = useLocation();
    const data = location.state;
    const [theme, setTheme] = useState(data.initTheme);
    let initPos=data.initPos;
    const showTheme = () => {
        switch(theme){
            case "App":
                return(<DragonApp />);
            case "UI/UX":
                return(<DragonUIUX/>);
            case "Notes":
                return(<DragonNotes/>);
            case "Website":
                return(<DragonWeb />);
            case "category":
                return(<Categories/>);
            default:
                return(<ComingSoon />);
        }
    }
    console.log(theme);
    return(
        <div className="dragon_theme">
            <TopBtn />
            <NavbarHover themeHandler={setTheme} initPos={initPos}/>
            {showTheme()}
            <Footer background={"var(--color-dragon-theme)"} textColor={"white"} Title={"Check Out My Github"} emailColor={"#FFF0A1"}/>
        </div>
    )
}

export default DragonTheme;