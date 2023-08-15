import React from "react";
import './articleHeader.css';

const ArticleHeader = ({Title, Date, Content, Img}) => {
    return(
        <div className="dragon_article_header">
            <h2>{Title}</h2>
            <p className="dragon_article_header_date">{Date}</p>
            <p>{Content}</p>
            {Img!==undefined?<div className="dragon_article_header_img">
                <img src={Img} alt=""/>
            </div>:<></>}
        </div>
    )
}

export default ArticleHeader;