import React, { useState } from "react";

const CateSelectItem = ({category, selectHandler, defualtSelect}) => {
    const [state, setState] = useState(defualtSelect);
    const ClickHandler = () => {
        selectHandler(category.id);
        setState(!state);
    }
    return(
        <div key={"admin_addArticle_selectCategory_item_"+category.id} className="admin_addArticle_selectCategory_item" onClick={ClickHandler} style={state?{backgroundColor:"pink"}:{backgroundColor:"antiquewhite"}}>
            <p key={"admin_addArticle_selectCategory_item_name_"+category.id}>{category.name}</p>
        </div>
    )
}

export default CateSelectItem;