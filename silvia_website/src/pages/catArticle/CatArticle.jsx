import React from "react";
import './catArticle.css';
import { ArticleNavbar, ArticleHeaderA, ArticleSectionB } from '../../containers/cat';
import { Footer } from '../../containers';

const CatArticle = () => {
    return(
        <div className="cat_article">
            <ArticleNavbar />
            <ArticleHeaderA />
            <ArticleSectionB />
            <Footer />
        </div>
    )
}

export default CatArticle;