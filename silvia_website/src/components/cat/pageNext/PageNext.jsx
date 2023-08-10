import React, {useState} from "react";
import './pageNext.css';
import {MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

const PageNext = () => {
    const [preState, setPreState] = useState(false);
    const [nextState, setNextState] = useState(true);
    const [atPage, setAtPage] = useState(1);

    const nextPageHandler = () => {
        if(atPage<3){
            setAtPage(atPage+1);
        }
    }
    const prePageHandler = () => {
        if(atPage>1){
            setAtPage(atPage-1);
        }
    }

    return(
        <div className="cat_page_next">
            <MdNavigateBefore size={40} className="cat_page_next_" color={preState?"var(--color-cat-theme)":"#969696"} onClick={prePageHandler}/>
            <div className="cat_page_next_numbers">
                <div className="cat_page_next_number" style={{background:atPage===1?"var(--color-cat-theme)":"#ffffff00"}}>
                    <p style={{color:atPage===1?"white":"var(--color-cat-theme)"}}>1</p>
                </div>
                <div className="cat_page_next_number" style={{background:atPage===2?"var(--color-cat-theme)":"#ffffff00"}}>
                    <p style={{color:atPage===2?"white":"var(--color-cat-theme)"}}>2</p>
                </div>
                <div className="cat_page_next_number" style={{background:atPage===3?"var(--color-cat-theme)":"#ffffff00"}}>
                    <p style={{color:atPage===3?"white":"var(--color-cat-theme)"}}>3</p>
                </div>
            </div>
            <MdNavigateNext size={40} className="cat_page_next_" color={nextState?"var(--color-cat-theme)":"#969696"} onClick={nextPageHandler}/>
        </div>
    )
}

export default PageNext;