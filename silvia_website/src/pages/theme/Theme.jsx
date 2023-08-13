import React from "react";
import './theme.css';
import { NavbarHover } from '../../components/dragon';
import { DragonApp } from '../../subPage';

const DragonTheme = () => {
    return(
        <div className="dragon_theme">
            <NavbarHover />
            <DragonApp />
        </div>
    )
}

export default DragonTheme;