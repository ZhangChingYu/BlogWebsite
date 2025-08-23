import React, { useEffect, useState } from "react";
import './searchResult.css';
import { SearchItem } from "../../components/home";

const SearchResult = ({keyword, pageCount, navigator}) => {
    const [articleList, setArticleList] = useState([]);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/article/search?keywork=${keyword}&start=${pageCount*7}&size=7`, {method: "GET"})
        .then((response)=>response.json())
        .then((data)=>{
            //console.log(data);
            setArticleList(data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [keyword, pageCount])

    return (
        <div className="home_search_result">
            {articleList.map((article, index)=>(
                <SearchItem key={"search_result_item_"+index} article={article} navigator={navigator}/>
            ))}
        </div>
    )
}

export default SearchResult;