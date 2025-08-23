import React, { useEffect, useState } from "react";
import "./articleResult.css";

const ArticleResult = ({pageCount, setId}) => {
    const [articleList, setArticleList] = useState([]);
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/article/all/${pageCount*10}/10`)
        .then((response)=>response.json())
        .then((data)=>{
            setArticleList(data);
        })
        .catch((err)=>{console.log(err);})
    },[pageCount]);
    
    return(
        <div className="admin_myArticle_result">
            {articleList.map((article, index)=>(
                <div key={"admin_myArticle_result_"+index} className="admin_myArticle_result_item" onClick={()=>{setId(article.id)}}>
                    <h2 key={"admin_myArticle_result_title_"+index}>{JSON.parse(`"${article.title}"`)}</h2>
                    <p key={"admin_myArticle_result_intro_"+index}>{JSON.parse(`"${article.intro}"`)}</p>
                </div>
            ))}
        </div>
    )
}

export default ArticleResult;