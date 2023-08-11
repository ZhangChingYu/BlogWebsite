import React from "react";
import './catArticle.css';
import { ArticleNavbar, ArticleHeaderA, ArticleSectionA } from '../../containers/cat';
import { Footer } from '../../containers';

const CatArticle = () => {
    return(
        <div className="cat_article">
            <ArticleNavbar />
            <ArticleHeaderA />
            <ArticleSectionA />
            <Footer />
        </div>
    )
}

export default CatArticle;