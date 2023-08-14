import React, {useState} from "react";
import './theme.css';
import { NavbarHover } from '../../components/dragon';
import { Categories, DragonApp, DragonNotes } from '../../subPage';
import { Footer } from "../../containers";
import { useLocation } from "react-router-dom";

const DragonTheme = () => {
    const location = useLocation();
    const data = location.state;
    const [theme, setTheme] = useState(data.initTheme);
    let initPos=data.initPos;
    const showTheme = () => {
        if(theme==="works"){
            if(data.workTheme==="App"){
                return(
                    <DragonApp />
                )
            }
            else if(data.workTheme==="Notes"){
                return(
                    <DragonNotes/>
                )
            }
        }
        else if(theme==='category'){
            return(
                <Categories/>
            )
        }
    }
    console.log(theme);
    return(
        <div className="dragon_theme">
            <NavbarHover themeHandler={setTheme} initPos={initPos}/>
            {showTheme()}
            <Footer background={"var(--color-dragon-theme)"} textColor={"white"} Title={"Check Out My Github"} emailColor={"#FFF0A1"}/>
        </div>
    )
}

export default DragonTheme;