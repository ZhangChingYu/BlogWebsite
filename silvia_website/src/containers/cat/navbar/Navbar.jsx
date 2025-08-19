import React, { useState } from "react";
import './navbar.css';
import { Menu, Search } from '../../../components/cat';
import Lottie from 'lottie-react';
import FootprintEnter from '../../../lottie/Footprint Enter.json';
import FootprintLeave from '../../../lottie/Footprint Leave.json';


const Navbar = ({navigator}) =>{
    const [searchInput, setSearchInput] = useState("");
    const [hover, setHover] = useState(false);
    return(
        <div className="cat_navbar">
            <Menu/>
            <div className="cat_navbar_b" onClick={()=>{navigator(-1)}}>
                <div className="cat_navbar_back" onPointerEnter={()=>{setHover(true)}} onPointerLeave={()=>{setHover(false)}}>
                    <div style={{width:"80px", height:"80px", cursor:"pointer"}}>
                        {hover?<Lottie animationData={FootprintEnter} autoPlay={false} loop={false}/>:<Lottie animationData={FootprintLeave} loop={false} autoPlay={false}/>}
                    </div>
                </div>
            </div>
            <Search inputHandler={setSearchInput}/>
        </div>
    )
}

export default Navbar;