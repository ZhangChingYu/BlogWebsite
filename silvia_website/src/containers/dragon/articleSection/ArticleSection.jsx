import React from "react";
import './articleSection.css';

const ArticleSection = ({Title, Img, Content}) => {
    return(
        <div className="dragon_article_section">
            <h2>{Title}</h2>
            <p>{Content}</p>
            {Img!==undefined?<div className="dragon_article_section_img">
                <img src={Img} alt=""/>
            </div>:<></>}
        </div>
    )
}

export default ArticleSection;