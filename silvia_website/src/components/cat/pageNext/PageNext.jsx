import React, {useState} from "react";
import './pageNext.css';
import {MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

const PageNext = ({maxPage, setPageCount}) => {
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
        <div className="cat_page_next">
            <MdNavigateBefore style={atPage>1?{cursor:"pointer"}:{cursor:"default"}} size={40} color={atPage>1?"var(--color-cat-theme)":"#969696"} onClick={prePageHandler}/>
            <div className="cat_page_next_numbers" >
                <div className="cat_page_next_numbers_wrapper" style={{transform:`translateX(${moveX+"px"})`}}>
                    {Array.from({length:maxPage}, (_, index)=>(
                        <div key={"cat_page_next_number_"+index} className="cat_page_next_number" style={{background:atPage===index+1?"var(--color-cat-theme)":"#ffffff00", color:atPage===index+1?"white":"var(--color-cat-theme)"}}>{index+1}</div>
                    ))}
                </div>
            </div>
            <MdNavigateNext style={atPage<maxPage?{cursor:"pointer"}:{cursor:"default"}} size={40} color={atPage<maxPage?"var(--color-cat-theme)":"#969696"} onClick={nextPageHandler}/>
        </div>
    )
}

export default PageNext;