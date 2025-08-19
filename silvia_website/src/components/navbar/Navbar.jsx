import React from "react";
import './navbar.css';
import { motion } from "framer-motion";
import Lottie from 'lottie-react';
import Logo from '../../lottie/Logo 2.json';

const Navbar = ({ navigator }) =>{
    return(
        <div className="m_navbar">
            <motion.div 
            className="navbar_circle" 
            animate={{top:0 ,boxShadow:"0px 4px 0 -1px rgba(0, 0, 0, 0.25)"}} 
            transition={{duration:1, type:'tween'}} 
            initial={{top:-10}}
            onClick={()=>{navigator(-1)}}>
                <div style={{width:"100px", height:"100px", cursor:"pointer"}}>
                    <Lottie animationData={Logo} loop={true}/>
                </div>
            </motion.div>
        </div>
    )
}

export default Navbar;