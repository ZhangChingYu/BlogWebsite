import React, { useState } from "react";
import './menu.css';
import { motion } from 'framer-motion';

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
            {showMenu?<motion.div animate={{scaleY:1, opacity:1}} initial={{scaleY:0, opacity:0.2}} transition={{duration:0.4, type:"tween"}} className="cat_menu_content">
                <motion.p whileHover={{scale:1.1}} whileTap={{scale:0.95}}>Home</motion.p>
                <motion.p whileHover={{scale:1.1}} whileTap={{scale:0.95}}>Latest</motion.p>
                <motion.p whileHover={{scale:1.1}} whileTap={{scale:0.95}}>Highlights</motion.p>
                <motion.p whileHover={{scale:1.1}} whileTap={{scale:0.95}}>Category</motion.p>
                <motion.p whileHover={{scale:1.1}} whileTap={{scale:0.95}}>Work</motion.p>
            </motion.div>:<></>}
        </div>
    )
}

export default Menu;