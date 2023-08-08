import React, { useState } from "react";
import './navbar.css';
import { Menu, Search } from '../../cat';
import imgUrl from '../../../assets/footprint.png';

const Navbar = () => {
    const [searchInput, setSearchInput] = useState("");
    console.log(searchInput);
    return(
        <div className="cat_navbar">
            <Menu/>
            <div className="cat_navbar_b">
                <div className="cat_navbar_back">
                    <img src={imgUrl} alt="Back To Home"/>
                </div>
            </div>
            <Search inputHandler={setSearchInput}/>
        </div>
    )
}

export default Navbar;