import React from "react";
import './cateItem.css';
import { useNavigate } from "react-router-dom";

const CateItem = ({name}) =>{
    const navigator = useNavigate();
    return(
        <div className="cat_cateItem" onClick={()=>{navigator("/life/category", {state:{category:name}})}}>
            <p>{name}</p>
        </div>
    )
}

export default CateItem;