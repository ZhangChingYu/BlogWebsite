import React, { useState } from "react";
import './navbar.css';
import { Menu, Search } from "../../../components/dragon";
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import MenuEnter from '../../../lottie/Menu Enter.json';
import MenuLeave from '../../../lottie/Menu Leave.json';

const Navbar = ({navigator, isHome}) => {
    const [searchInput, setSearchInput] = useState("");
    const [hover, setHover] = useState(false);
    console.log(searchInput);
    function enter(){
        setHover(true);
    }
    function leave(){
        setHover(false);
    }
    return(
        <div className="dragon_navbar">
            <Menu />
            <motion.div 
            title="Home"
            animate={{y:-20, opacity:1}} initial={{opacity:0}} transition={{duration:0.3, type:"tween"}}
            className="dragon_navbar_b"
            onClick={()=>{if(isHome){navigator("/")}else{navigator(-1)}}}>
                <div className="dragon_navbar_back" onPointerEnter={()=>{enter()}} onPointerLeave={()=>{leave()}}>
                    <div style={{width:"80px", height:"80px"}} >
                        <Lottie animationData={hover?MenuEnter:MenuLeave} loop={false} autoPlay={false}/>
                    </div>
                </div>
            </motion.div>
            <Search inputHandler={setSearchInput}/>
        </div>
    )
}

export default Navbar;