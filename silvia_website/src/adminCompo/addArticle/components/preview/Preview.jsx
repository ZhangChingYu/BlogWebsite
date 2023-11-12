import React from "react";
import "./preview.css";
import { AdHeaderA, AdHeaderB, AdHeaderC, AdSectionA, AdSectionB, AdSectionC} from "./components";
import { motion } from 'framer-motion';

const Preview = ({header, secitonList, headerType, sectionType, theme, setTheme, select, setSelect, submitHandler}) => {

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
            <p><br></br>!!有個Bug尚未修改：當改變主題後，只有Header的類型能正確轉換，Section則需要每個都選中一下才會轉變為正確的選項!!</p>
            <div className="admin_addArticle_preHeader" style={select===1?{backgroundColor:"lemonchiffon"}:{}} onClick={()=>{selectHandler(1)}}>
                {headerType==="A"&&<AdHeaderA header={header}/>}
                {headerType==="B"&&<AdHeaderB header={header}/>}
                {headerType==="C"&&<AdHeaderC header={header}/>}
            </div>
            <div className="admin_addArticle_preSection">
                {secitonList.map((section, index)=>(
                    <div key={"preSection_" + index} style={select===index+2?{backgroundColor:"lemonchiffon", marginTop:"20px"}:{marginTop:"20px"}} onClick={()=>{selectHandler(index+2)}}>
                        {sectionType[index] === "A" && <AdSectionA section={section} key={"adSectionA_"+index}/>}
                        {sectionType[index] === "B" && <AdSectionB section={section} key={"adSectionB_"+index}/>}
                        {sectionType[index] === "C" && <AdSectionC section={section} key={"adSectionC_"+index}/>}
                    </div>
                ))}
            </div>
            <div className="admin_addArticle_header_btn" style={{marginBottom:"100px"}}>
                <button type="button" onClick={()=>{}} disabled>Back</button>
                <button type="button" onClick={()=>submitHandler()}>Next</button>
            </div>
        </div>
    )
}

export default Preview;