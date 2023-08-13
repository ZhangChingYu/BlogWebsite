import React, {useState} from "react";
import './theme.css';
import { NavbarHover } from '../../components/dragon';
import { DragonApp } from '../../subPage';

const DragonTheme = () => {
    const [theme, setTheme] = useState("works");
    console.log(theme);
    return(
        <div className="dragon_theme">
            <NavbarHover themeHandler={setTheme}/>
            <DragonApp />
        </div>
    )
}

export default DragonTheme;