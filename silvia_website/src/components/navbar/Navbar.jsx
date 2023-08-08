import React from "react";
import './navbar.css';
import imgUrl from '../../assets/logo.png';
import { motion } from "framer-motion";

const Navbar = () =>{
    return(
        <div className="m_navbar">
            <motion.div 
            className="navbar_circle" 
            animate={{top:0 ,boxShadow:"0px 4px 0 -1px rgba(0, 0, 0, 0.25)"}} 
            transition={{duration:1, type:'tween'}} 
            initial={{top:-10}}
            onClick={()=>{console.log("click")}}>
                <motion.img src={imgUrl} alt="back to home"/>
            </motion.div>
        </div>
    )
}

export default Navbar;