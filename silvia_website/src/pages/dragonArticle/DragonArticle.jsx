import React from "react";
import './dragonArticle.css';
import { Navbar, ArticleHeader, ArticleSection } from '../../containers/dragon';
import { Footer } from '../../containers';
import { useNavigate } from "react-router-dom";
import headerImg from '../../assets/website.png';
import demandImg from '../../assets/demandAnalysis.png';
import updateImg from '../../assets/update.png';

const DragonArticle = () => {
    const navigator = useNavigate();
    return(
        <div className="dragon_article">
            <Navbar navigator={navigator}/>
            <ArticleHeader Title={"Building My Personal Website"} Date={"2023/08/05"} Img={headerImg} Content={"In the starting point of building this website, I have to figure out a lot of new things. The first thing to do is to decide what the website is about. However, I can’t decide between a life sharing blog or a skill presenting platform. Therefore, I made my choice to do both. It feels a little bit like building two websites at once for example I’ve to design the web pages for two completely different themes and code them out."}/>
            <ArticleSection Title={"Demand Analysis"} Img={demandImg} Content={"In the starting point of building this website, I have to figure out a lot of new things. The first thing to do is to decide what the website is about. However, I can’t decide between a life sharing blog or a skill presenting platform. Therefore, I made my choice to do both. It feels a little bit like building two websites at once for example I’ve to design the web pages for two completely different themes and code them out."}/>
            <ArticleSection Title={"Progress Updates"} Img={updateImg} Content={"I'm still using Figma to design the user interface and expect to start programming in 10 days. I will be building a React.js website with a Django server."} />
            <Footer background={"var(--color-dragon-theme)"} textColor={"white"} emailColor={"#FFF0A1"} Title={"Check Out My Github"}/>
        </div>
    )
}

export default DragonArticle;