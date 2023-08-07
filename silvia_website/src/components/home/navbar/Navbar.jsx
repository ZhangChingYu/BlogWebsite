import React, { useState } from "react";
import './navbar.css';
import logoUrl from '../../../assets/logo.png';
import { Search } from '../../../components/home';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [searchContent, setSearchContent] = useState("");
    console.log(searchContent);
    return(
        <div className="navbar">
            <div className="navbar_logo">
                <img src={logoUrl} alt={"Silvia's Blog"}/>
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