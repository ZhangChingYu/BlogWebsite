import React from "react";
import './aNavbar.css';
import imgUrl from '../../../assets/footprint.png';
import { Link } from "react-router-dom";

const ArticleNavbar = ({navigator}) => {
    return(
        <div className="cat_article_navbar">
            <div className="cat_article_navbar_goback" onClick={()=>{navigator(-1)}}>
                <img src={imgUrl} alt="go back"/>
            </div>
            <div className="cat_article_navbar_links">
                <Link to={"/"} style={{textDecorationLine:"none", margin:"0 1rem"}}><p>Home</p></Link>
                <Link to={"/life"} style={{textDecorationLine:"none", margin:"0 1rem"}}><p>My Life</p></Link>
                <Link to={"/life/categories"} style={{textDecorationLine:"none", margin:"0 1rem"}}><p>Category</p></Link>
                <Link to={"/about"} style={{textDecorationLine:"none", margin:"0 1rem"}}><p>About</p></Link>
            </div>
        </div>
    )
}

export default ArticleNavbar;