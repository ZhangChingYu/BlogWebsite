import React, { useState } from "react";
import './navbar.css';
import { Search } from '../../../components/home';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Logo from '../../../lottie/Logo 2.json';

const Navbar = () => {
    const [searchContent, setSearchContent] = useState("");
    console.log(searchContent);
    return(
        <div className="navbar">
            <div className="navbar_logo">
                <div style={{width:"40px", height:"40px"}}>
                    <Lottie animationData={Logo} loop={true} />
                </div>
            </div>
            <div className="navbar_content">
                <p><a href="#theme">Get Started</a></p>
                <p><a href="#latest">Latest</a></p>
                <p><a href="#subscribe">Subscribe</a></p>
                <p><a href="#contact">Contact</a></p>
                <Link to="/about">About</Link>
            </div>
            <div className="navbar_search">
                <Search inputHandler={setSearchContent}/>
            </div>
            
        </div>
    )
}

export default Navbar;