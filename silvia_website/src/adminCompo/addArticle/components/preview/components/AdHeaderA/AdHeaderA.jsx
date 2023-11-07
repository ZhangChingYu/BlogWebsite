import React from "react";
import "./adHeaderA.css";

const AdHeaderA = ({header}) => {
    return (
        <div className="admin_addArticle_preHeaderA">
            <h1>{header.title}</h1>
            <p className="admin_addArticle_preHeaderA_date">2000/12/12</p>
            <p className="admin_addArticle_preHeaderA_intro">{header.intro}</p>
            <div className="admin_addArticle_preHeaderA_pic">
                <img src={header.coverUrl} alt="選擇的圖片" style={{maxWidth:"100%"}}/>
            </div>
        </div>
    )
}

export default AdHeaderA;