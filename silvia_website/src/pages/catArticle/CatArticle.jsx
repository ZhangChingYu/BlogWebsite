import React, { useEffect, useState } from "react";
import './catArticle.css';
import { ArticleNavbar, ArticleHeaderA, ArticleHeaderB, ArticleHeaderC, ArticleSectionA, ArticleSectionB, ArticleSectionC } from '../../containers/cat';
import { Footer } from '../../containers';
import { CateItem } from "../../components/cat";
import { TopBtn } from "../../components";
import { useNavigate, useLocation } from "react-router-dom";

const CatArticle = () => {
    const navigator = useNavigate();
    const location = useLocation();
    const [article, setArticle] = useState(null);
    const data = location.state;
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/article/${data.id}`, { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
            //console.log(data)
            setArticle(data)
        })
    },[data.id])
    if(article !==null){
        return(
            <div className="cat_article">
                <TopBtn />
                <ArticleNavbar navigator={navigator}/>
                {article.headerType === 1 && <ArticleHeaderA title={article.title} date={article.date} intro={article.intro} cover={article.coverImgUrl}/>}
                {article.headerType === 2 && <ArticleHeaderB title={article.title} date={article.date} intro={article.intro} cover={article.coverImgUrl}/>}
                {article.headerType === 3 && <ArticleHeaderC title={article.title} date={article.date} intro={article.intro} cover={article.coverImgUrl}/>}
                {article.sectionList.map((section, index)=>(
                    <>
                        {section.sectionType === 1 && <ArticleSectionA section={section}/>}
                        {section.sectionType === 2 && <ArticleSectionB section={section}/>}
                        {section.sectionType === 3 && <ArticleSectionC section={section}/>}
                    </>
                ))}
                <h2 className="cat_article_category_text">Related Categories:</h2>
                <div className="cat_article_categories">
                    {article.categoryList.map((category, index)=>(
                        <CateItem name={category.name} id={category.id}/>
                    ))}
                </div>
                <Footer />
            </div>
        )
    }else{
        <></>
    }
}

export default CatArticle;