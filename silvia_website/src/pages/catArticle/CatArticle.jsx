import React from "react";
import './catArticle.css';
import { ArticleNavbar, ArticleHeaderB, ArticleSectionA } from '../../containers/cat';
import { Footer } from '../../containers';

const CatArticle = () => {
    return(
        <div className="cat_article">
            <ArticleNavbar />
            <ArticleHeaderB />
            <ArticleSectionA />
            <Footer />
        </div>
    )
}

export default CatArticle;