import React from "react";
import './catArticle.css';
import { ArticleNavbar, ArticleHeaderC, ArticleSectionA } from '../../containers/cat';
import { Footer } from '../../containers';

const CatArticle = () => {
    return(
        <div className="cat_article">
            <ArticleNavbar />
            <ArticleHeaderC />
            <ArticleSectionA />
            <Footer />
        </div>
    )
}

export default CatArticle;