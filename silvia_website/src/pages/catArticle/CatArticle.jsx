import React from "react";
import './catArticle.css';
import { ArticleNavbar, ArticleHeaderA, ArticleSectionC } from '../../containers/cat';
import { Footer } from '../../containers';
import { CateItem } from "../../components/cat";

const CatArticle = () => {
    return(
        <div className="cat_article">
            <ArticleNavbar />
            <ArticleHeaderA />
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