import React from "react";
import './catArticle.css';
import { ArticleNavbar, ArticleHeaderC, ArticleSectionC } from '../../containers/cat';
import { Footer } from '../../containers';
import { CateItem } from "../../components/cat";
import { useNavigate } from "react-router-dom";

const CatArticle = () => {
    const navigator = useNavigate();
    return(
        <div className="cat_article">
            <ArticleNavbar navigator={navigator}/>
            <ArticleHeaderC />
            <ArticleSectionC />
            <h2 className="cat_article_category_text">Related Categories:</h2>
            <div className="cat_article_categories">
                <CateItem name={"Baking"} />
                <CateItem name={"Daily"} />
                <CateItem name={"Experience"} />
            </div>
            <Footer />
        </div>
    )
}

export default CatArticle;