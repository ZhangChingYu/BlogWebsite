import React, { useState } from "react";
import "./preview.css";
import { AdHeaderA, AdHeaderB, AdHeaderC } from "./components";
import { motion } from 'framer-motion';

const Preview = ({header, secitonList, setHeader, setSectionList, headerType, theme, setTheme}) => {
    const [select, setSelect] = useState(0);

    const selectHandler = (position) => {
        if(select===position){
            setSelect(0);
        }
        else{
            setSelect(position);
        }
    }
    
    return (
        <div className="admin_addArticle_preview">
            <div className="admin_addArticle_preview_theme">
                <div className="admin_addArticle_preview_theme_bar"></div>
                <motion.div className="admin_addArticle_preview_theme_switch" animate={{x:theme?0:30, backgroundColor:theme?"var(--color-cat-theme)":"var(--color-dragon-theme)"}} onClick={()=>{setTheme(!theme)}}></motion.div>
            </div>
            <div className="admin_addArticle_preHeader" style={select===1?{backgroundColor:"lemonchiffon"}:{}} onClick={()=>{selectHandler(1)}}>
                {headerType==="A"&&<AdHeaderA header={header}/>}
                {headerType==="B"&&<AdHeaderB header={header}/>}
                {headerType==="C"&&<AdHeaderC header={header}/>}
            </div>
            <div className="admin_addArticle_preSection">

            </div>
        </div>
    )
}

export default Preview;