import React, { useEffect, useState } from "react";
import './nineItems.css';
import { ItemN } from '../../../components/cat';

const NineItems = ({type, pageCount, navigator}) => {
    const [articleList, setArticleList] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/article/"+type+"/1/"+(pageCount*9)+"/9", {method:"GET"})
        .then((response) => response.json())
        .then((data)=>{
            setArticleList(data);
            console.log(data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[type, pageCount])
    return(
        <div className="cat_nineItem">
            <div className="cat_nineItem_wrapper">
                {articleList.map((article, index)=>(
                    <ItemN key={"cat_nineItem_row_item_"+index} title={article.title} category={article.categoryList} date={article.date} imgPath={article.coverPicUrl} postId={article.id} navigator={navigator}/>
                ))}
            </div>
        </div>
    )
}

export default NineItems;