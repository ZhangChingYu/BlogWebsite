import React from "react";
import './menu.css';
import { Link } from "react-router-dom";
import { FaCrown } from "react-icons/fa";

const Menu = () => {
    return(
        <div className="dragon_menu">
            <div className="dragon_menu_icon">
                <Link to={"/"} className="dragon_menu_icon_link" style={{textDecoration:"none"}}><p className="dragon_menu_icon_item">Home</p></Link>
                <Link to={"/work/theme"} className="dragon_menu_icon_link" state={{initTheme:"category", initPos:1}} style={{textDecoration:"none"}}><p className="dragon_menu_icon_item">Category</p></Link>
                <Link to={"/life"} className="dragon_menu_icon_link" style={{textDecoration:"none"}}><p className="dragon_menu_icon_item">Life</p></Link>
                <Link to={"/work/about"} className="dragon_menu_icon_link" style={{textDecoration:"none"}}>
                    <p className="dragon_menu_icon_item" style={{color:"#FFF0A1"}}>About Me</p>
                    <FaCrown size={20} color={"#FFF0A1"} className="dragon_menu_icon_item"/>
                </Link>
            </div>
        </div>
    )
}

export default Menu;