import React, { useState, useEffect } from "react";
import "./cateSelect.css";
import  CateSelectItem  from './cateSelectItem/CateSelectItem';
import { motion } from "framer-motion";;

const CateSelect = ({ submitPictureHandler, submitArticleHandler, theme}) => {
    const [categories, setCategories] = useState([]);
    const [cateSelect, setCateSelect] = useState(new Map());
    const [cateString, setCateString] = useState("");
    const [okState, setOkState] = useState(true);
    const [dialogShow, setDialogShow] = useState(false);
    useEffect(()=>{
        const url = "http://localhost:8080/categories/"+(theme?1:2);
        fetch(url, {method:"GET"})
        .then((response) => response.json())
        .then((data) => {
            setCategories(data);
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    function SelectHandler (cateId)  {
        var tempMap = cateSelect;
        if(tempMap.has(cateId)){  
            tempMap.delete(cateId);
        }else{
            tempMap.set(cateId, cateId);
        }
        setCateSelect(tempMap);
    }

    const packCategory = () =>{
        var result = ""+(theme?1:2);
        for(var i = 0; i < categories.length; i++){
            if(cateSelect.has(categories[i].id)){
                result+="|"+categories[i].id;
            }
        }
        setCateString(result);
        setOkState(false);
    }

    const pictureSubmit = () => {
        setDialogShow(true);
        submitPictureHandler();
    }
    
    return (
        <div className="admin_addArticle_selectCategory">
            <h1>Select Article's Categories.</h1>
            <div className="admin_addArticle_selectCategory_wrapper">
                {categories.map((category, index)=>( 
                    <CateSelectItem category={category} selectHandler={SelectHandler} defualtSelect={cateSelect.has(category.id)}/>
                ))}
            </div>
            <div className="admin_addArticle_header_btn" style={{marginBottom:"0px", paddingTop:"3rem"}}>
                {
                    okState?<button type="button" onClick={()=>packCategory()}>Ok</button>:
                    <button type="button" onClick={()=>setOkState(true)} style={{backgroundColor:"var(--color-cat-theme)"}}>Cancel</button>
                }
                <button type="button" onClick={pictureSubmit} disabled={okState} style={okState?{backgroundColor:"grey", cursor:"default"}:{backgroundColor:"var(--color-dragon-theme)", cursor:"pointer"}}>Upload</button>
            </div>
            {dialogShow&&
            <div className="admin_addArticle_selectCategory_dialog">
                <button className="admin_addArticle_selectCategory_dialog_cancel" type="button" onClick={()=>setDialogShow(false)}>X</button>
                <h1>Uploading Pictures...</h1>
                <motion.div 
                        className="admin_addArticle_selectCategory_dialog_upload" 
                        animate={{opacity:1,cursor:"pointer"}} initial={{opacity:0, cursor:"default"}} 
                        transition={{type:"tween", duration:3, delay:2}} onClick={()=>{submitArticleHandler(cateString)}}>Submit Article</motion.div>
            </div>}
        </div>
    )
}

export default CateSelect;