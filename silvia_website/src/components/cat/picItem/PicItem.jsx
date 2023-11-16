import React from "react";
import './picItem.css';

const PictureItem = ({url, Width, Height, discription, fixType}) => {
    var picWidth = "300px";
    var picHeight = "400px";
    var picHFix = "100%";
    var picWFix = "auto";
    if(Width!==undefined||Width!==0){
        picWidth = Width;
    }
    if(Height!==undefined||Height!==0){
        picHeight = Height;
    }
    if(fixType==='h'){
        picHFix = "auto";
        picWFix = "100%";
    }
    return(
        <div className="cat_picItem">
            <div className="cat_picItem_img" style={{width:picWidth, height:picHeight}}>
                <img src={url} alt="" style={{height:picHFix, width:picWFix}}/>
            </div>
            <p className="cat_picItem_discribtion">{discription}</p>
        </div>
    )
}

export default PictureItem;