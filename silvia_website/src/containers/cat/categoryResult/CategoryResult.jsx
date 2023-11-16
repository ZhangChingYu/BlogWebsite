import React, { useEffect, useState } from "react";
import "./categoryResult.css";
import { SearchItem } from "../../../components/home";

const CategoryResult = ({cateId, pageCount, navigator}) => {
    const [articleList, setArticleList] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/article/category/"+cateId+"/"+(pageCount*6)+"/6", { method: "GET" })
        .then((response)=>response.json())
        .then((data)=>{
            setArticleList(data);
            //console.log(data)
        })
        .catch((err) => {
            console.log(err);
        })
    },[pageCount, cateId])

    return(
        <div className="cat_category_results">
            {articleList.map((article, index)=>(
                <SearchItem key={"cat_category_results_item_"+index} article={article} navigator={navigator}/>
            ))}
        </div>
    )
}

export default CategoryResult;