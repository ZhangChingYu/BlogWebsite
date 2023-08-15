import React from "react";
import './articleHeader.css';
import imgUrl from '../../../assets/website.png';

const ArticleHeader = ({Title, Date, Content, Img}) => {
    return(
        <div className="dragon_article_header">
            <h2>Building My Personal Website</h2>
            <p className="dragon_article_header_date">2023/08/05</p>
            <p>In the starting point of building this website, I have to figure out a lot of new things. The first thing to do is to decide what the website is about. However, I can’t decide between a life sharing blog or a skill presenting platform. Therefore, I made my choice to do both. It feels a little bit like building two websites at once for example I’ve to design the web pages for two completely different themes and code them out.</p>
            <div className="dragon_article_header_img">
                <img src={imgUrl} alt=""/>
            </div>
        </div>
    )
}

export default ArticleHeader;