import React, {useState} from "react";
import './menu.css';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuHandler = () => {
        setShowMenu(!showMenu);
    }
    return(
        <div className="dragon_menu">
            <div className="dragon_menu_icon" onClick={menuHandler}>
                <motion.div animate={{rotate:showMenu?45:0, y:showMenu?10:0}} transition={{duration:0.3, type:"tween"}} className="dragon_menu_top"></motion.div>
                <motion.div animate={{opacity:showMenu?0:1}} transition={{duration:0.3, type:"tween"}} className="dragon_menu_middle"></motion.div>
                <motion.div animate={{rotate:showMenu?-45:0, y:showMenu?-10:0}} transition={{duration:0.3, type:"tween"}} className="dragon_menu_bottom"></motion.div>
            </div>
            <motion.div animate={{height:showMenu?"210px":"0px", opacity:showMenu?1:0}} initial={{height:0, opacity:0}} transition={{duration:0.4, type:"tween"}} className="dragon_menu_content">
                <Link to={"/"} style={{textDecoration:"none"}}><motion.p>Home</motion.p></Link>
                <Link to={"/"} style={{textDecoration:"none"}}><motion.p>Code</motion.p></Link>
                <Link to={"/"} style={{textDecoration:"none"}}><motion.p>Project</motion.p></Link>
                <Link to={"/"} style={{textDecoration:"none"}}><motion.p>Category</motion.p></Link>
                <Link to={"/"} style={{textDecoration:"none"}}><motion.p>Life</motion.p></Link>
            </motion.div>
        </div>
    )
}

export default Menu;