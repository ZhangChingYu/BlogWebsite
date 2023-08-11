import React from "react";
import './catArticle.css';
import { ArticleNavbar, ArticleHeaderA, ArticleSectionC } from '../../containers/cat';
import { Footer } from '../../containers';

const CatArticle = () => {
    return(
        <div className="cat_article">
            <ArticleNavbar />
            <ArticleHeaderA />
            <ArticleSectionC />
            <Footer />
        </div>
    )
}

export default CatArticle;