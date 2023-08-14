import React, { useState } from "react";
import './navbar.css';
import { Menu, Search } from "../../../components/dragon";
import imgUrl from '../../../assets/scale.png';
import { motion } from 'framer-motion';

const Navbar = ({navigator}) => {
    const [searchInput, setSearchInput] = useState("");
    console.log(searchInput);
    return(
        <div className="dragon_navbar">
            <Menu />
            <motion.div 
            title="Home"
            animate={{y:-20, opacity:1}} initial={{opacity:0}} transition={{duration:0.3, type:"tween"}}
            className="dragon_navbar_b"
            onClick={()=>{navigator(-1)}}>
                <div className="dragon_navbar_back">
                    <img src={imgUrl} alt="Back To Home"/>
                </div>
            </motion.div>
            <Search inputHandler={setSearchInput}/>
        </div>
    )
}

export default Navbar;