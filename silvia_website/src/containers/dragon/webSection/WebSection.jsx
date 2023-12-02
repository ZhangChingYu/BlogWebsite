import React, { useEffect, useState } from "react";
import './webSection.css';
import { AppItem } from "../../../components/dragon";

const WebSection = ({pageCount}) =>{
    const [articleList, setArticleList] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/article/category/15/"+pageCount+"/9", {method:"GET"})
        .then((response)=>response.json())
        .then((data)=>{
            setArticleList(data);
        })
        .catch((err)=>{console.log(err);})
    },[pageCount])
    return(
        <div className="dragon_webSection">
            <div className="dragon_webSection_row">
                {articleList!==undefined&&articleList.map((article, index)=>(
                    <AppItem key={"dragon_webSection_item_"+index} Type={true} isSoon={false} article={article}/>
                ))}
            </div>
        </div>
    )
}

export default WebSection;