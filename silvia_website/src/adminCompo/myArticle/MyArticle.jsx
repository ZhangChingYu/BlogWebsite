import React, { useEffect, useState } from "react";
import { ArticleResult, EditArticle, NextPage } from "./components";
import "./myArticle.css";

const MyArticle = () => {
    const [pageCount, setPageCount] = useState(0);
    const [maxPage, setMaxPage] = useState(1);
    const [emptyState, setEmptyState] = useState(false);
    const [editShow, setEditShow] = useState(false);
    const [editId, setEditId] = useState(null);
    useEffect(()=>{
        fetch("http://localhost:8080/article/all/0/1", {method:"GET"})
        .then((response)=>{
            const headers = response.headers;
            const count = headers.get("total-count");
            if(count > 0){
                setMaxPage(Math.ceil(count/10));
                setEmptyState(false);
            }else{
                setEmptyState(true);
            }
        })
        .catch((err)=>{console.log(err);})
    },[])

    function editHandler(id){
        setEditId(id);
        if(id!==null){
            setEditShow(true);
        }
    }

    return(
        <div className="admin_myarticle">
            {editShow&&<EditArticle id={editId} closeHandler={setEditShow}/>}
            {!emptyState&&<ArticleResult pageCount={pageCount} setId={editHandler}/>}
            <NextPage maxPage={maxPage} setPageCount={setPageCount}/>
        </div>
    )
}

export default MyArticle;