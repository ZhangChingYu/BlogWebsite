import React, { useEffect, useState } from "react";
import './noteSection.css';
import { NotesItem } from "../../../components/dragon";

const NoteSection = ({pageCount}) => {
    const [articleList, setArticleList] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/article/category/18/"+pageCount+"/1", {method:"GET"})
        .then((response)=>response.json())
        .then((data)=>{
            setArticleList(data);
        })
        .catch((err)=>{console.log(err);})
    },[pageCount])
    return(
        <div className="dragon_noteSection">
            {articleList.map((article,index)=>(
                <NotesItem key={"dragon_noteSection_item_"+index} id={article.id} Title={article.title} Intro={article.intro} Img={article.coverPicUrl.replace("media/image","http://localhost:8080/images")} />
            ))}
        </div>
    )
}

export default NoteSection;