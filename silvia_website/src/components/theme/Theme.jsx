import React from "react";
import './theme.css';
import { motion } from "framer-motion";

const Theme = () => {
    return(
        <div id="theme" className="theme">
            <div className="theme_dragon">
                <motion.div className="theme_dragon_circle"  animate={{x:"5rem", boxShadow:"var(--box-shadow)"}} transition={{duration:1, type:"tween"}}>
                </motion.div>
            </div>
            <div className="theme_cat">
                <motion.div className="theme_cat_circle" animate={{x:"-5rem", boxShadow:"var(--box-shadow)"}} transition={{duration:1, type:"tween"}} >
                </motion.div>
            </div>
        </div>
    )
}

export default Theme;