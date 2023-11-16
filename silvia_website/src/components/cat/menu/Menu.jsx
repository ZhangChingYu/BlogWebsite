import React, { useState } from "react";
import './menu.css';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuHandler = () =>{
        setShowMenu(!showMenu);
    }
    return(
        <div className="cat_menu">
            <div className="cat_menu_icon" onClick={menuHandler}>
                <motion.div animate={{rotate:showMenu?45:0, y:showMenu?10:0}} transition={{duration:0.3, type:"tween"}} className="cat_menu_top"></motion.div>
                <motion.div animate={{opacity:showMenu?0:1}} transition={{duration:0.3, type:"tween"}} className="cat_menu_middle"></motion.div>
                <motion.div animate={{rotate:showMenu?-45:0, y:showMenu?-10:0}} transition={{duration:0.3, type:"tween"}} className="cat_menu_bottom"></motion.div>
            </div>
            <motion.div animate={{height:showMenu?"210px":"0px", opacity:showMenu?1:0}} initial={{height:0, opacity:0}} transition={{duration:0.4, type:"tween"}} className="cat_menu_content">
                <Link to={"/"} style={{textDecoration:"none"}}><motion.p whileHover={{scale:1.1}} whileTap={{scale:0.95}}>Home</motion.p></Link>
                <Link to={"/life/latest"} state={{title:"Latest"}} style={{textDecoration:"none"}}><motion.p whileHover={{scale:1.1}} whileTap={{scale:0.95}}>Latest</motion.p></Link>
                <Link to={"/life/latest"} state={{title:"Highlight"}} style={{textDecoration:"none"}}><motion.p whileHover={{scale:1.1}} whileTap={{scale:0.95}}>Highlights</motion.p></Link>
                <Link to="/life/categories" style={{textDecoration:"none"}}><motion.p whileHover={{scale:1.1}} whileTap={{scale:0.95}}>Category</motion.p></Link>
                <Link to={"/work"} style={{textDecoration:"none"}}><motion.p whileHover={{scale:1.1}} whileTap={{scale:0.95}}>Work</motion.p></Link>
            </motion.div>
        </div>
    )
}

export default Menu;