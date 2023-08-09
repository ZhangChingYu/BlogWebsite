import React from "react";
import './cateItem.css';

const CateItem = ({name}) =>{
    return(
        <div className="cat_cateItem">
            <p>{name}</p>
        </div>
    )
}

export default CateItem;