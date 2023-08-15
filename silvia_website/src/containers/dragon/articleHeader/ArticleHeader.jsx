import React from "react";
import './articleHeader.css';
import { ShareButton } from "../../../components/dragon";

const ArticleHeader = ({Title, Date, Content, Img}) => {
    return(
        <div className="dragon_article_header">
            <ShareButton />
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