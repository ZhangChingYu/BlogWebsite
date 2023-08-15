import React from "react";
import './dragonArticle.css';
import { Navbar, ArticleHeader, ArticleSection } from '../../containers/dragon';
import { Footer } from '../../containers';
import { useNavigate } from "react-router-dom";

const DragonArticle = () => {
    const navigator = useNavigate();
    return(
        <div className="dragon_article">
            <Navbar navigator={navigator}/>
            <ArticleHeader />
            <ArticleSection />
            <Footer background={"var(--color-dragon-theme)"} textColor={"white"} emailColor={"#FFF0A1"} Title={"Check Out My Github"}/>
        </div>
    )
}

export default DragonArticle;