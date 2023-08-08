import React from "react";
import './theme.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Theme = () => {
    return(
        <div id="theme" className="theme">
            <div className="theme_dragon">
                <motion.div className="theme_dragon_circle"  animate={{x:"5rem", boxShadow:"4px 0px 0px 0px rgba(0, 0, 0, 0.25)"}} transition={{duration:1, type:"tween"}} initial={{boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}>
                </motion.div>
            </div>
            <Link to={'/life'} className="theme_cat">
                <motion.div className="theme_cat_circle" animate={{x:"-5rem", boxShadow:"-4px 0px 0px 0px rgba(0, 0, 0, 0.25)"}} transition={{duration:1, type:"tween"}} initial={{boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}>
                </motion.div>
            </Link>
        </div>
    )
}

export default Theme;