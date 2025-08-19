import React, { useState } from "react";
import "./nextPage.css";

const NextPage = ({maxPage, setPageCount}) => {
    const [atPage, setAtPage] = useState(1);
    const [moveX, setMoveX] = useState(0);
    
    const nextPageHandler = () => {
        if(atPage<maxPage){
            if(atPage > 1){
                setMoveX(moveX-70);
            }
            setPageCount(atPage);
            setAtPage(atPage+1);
        }
    }

    const prePageHandler = () => {
        if(atPage>1){
            if(atPage>2){
                setMoveX(moveX+70);
            }
            setPageCount(atPage-2);
            setAtPage(atPage-1);
        }
    }
    return(
        <div className="admin_myArticle_page">
            <div className="admin_myArticle_page_pre" style={atPage>1?{cursor:"pointer", backgroundColor:"var(--color-dragon-theme)"}:{cursor:"default", backgroundColor:"darkgrey"}} onClick={prePageHandler}>back</div>
            <div className="admin_myArticle_page_numbers">
                <div className="admin_myArticle_page_numbers_wrapper" style={{transform:`translateX(${moveX+"px"})`}}>
                    {Array.from({length:maxPage}, (_, index)=>(
                        <div key={"admin_myArticle_page_number_"+index} className="admin_myArticle_page_number" style={{color:atPage===index+1?"var(--color-cat-theme)":"var(--color-dragon-theme)"}}>{index+1}</div>
                    ))}
                </div>
            </div>
            <div className="admin_myArticle_page_next" style={atPage<maxPage?{cursor:"pointer", backgroundColor:"var(--color-dragon-theme)"}:{cursor:"default", backgroundColor:"darkgrey"}} onClick={nextPageHandler}>next</div>
        </div>
    )
}

export default NextPage;