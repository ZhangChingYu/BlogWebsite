import React from "react";
import './cateItem.css';
import { useNavigate } from "react-router-dom";

const CateItem = ({name, id}) =>{
    const navigator = useNavigate();
    return(
        <div className="cat_cateItem" onClick={()=>{navigator("/life/category", {state:{category:name, cateId:id}})}}>
            <p>{name}</p>
        </div>
    )
}

export default CateItem;