import React from "react";
import './catArticle.css';
import { ArticleNavbar, ArticleHeaderA, ArticleHeaderB } from '../../containers/cat';
import { Footer } from '../../containers';

const CatArticle = () => {
    return(
        <div className="cat_article">
            <ArticleNavbar />
            <ArticleHeaderA />
            <ArticleHeaderB />
            <Footer />
        </div>
    )
}

export default CatArticle;