import React from "react";
import './header.css';
import imgUrl from '../../../assets/catbg.jpeg';

const Header = ({Title}) => {
    return(
        <div className="cat_header">
            <img src={imgUrl} alt="My Life"/>
            <div className="cat_header_title">
                    <h2>{Title}</h2>
            </div>
        </div>
    )
}

export default Header;