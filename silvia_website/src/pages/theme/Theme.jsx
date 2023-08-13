import React, {useState} from "react";
import './theme.css';
import { NavbarHover } from '../../components/dragon';
import { Categories, DragonApp } from '../../subPage';
import { Footer } from "../../containers";

const DragonTheme = () => {
    const [theme, setTheme] = useState("works");
    const showTheme = () => {
        if(theme==="works"){
            return(
                <DragonApp />
            )
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
            <NavbarHover themeHandler={setTheme} initPos={0}/>
            {showTheme()}
            <Footer background={"var(--color-dragon-theme)"} textColor={"white"} Title={"Check Out My Github"} emailColor={"#FFF0A1"}/>
        </div>
    )
}

export default DragonTheme;