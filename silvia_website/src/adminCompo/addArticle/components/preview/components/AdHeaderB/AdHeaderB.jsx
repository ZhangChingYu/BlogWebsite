import React from "react";
import "./adHeaderB.css";
import { ShareButton } from "../../../../../../components/cat";

const AdHeaderB = ({header}) => {
    const intro = header.intro.replace("\n","<br><br>")
    return (
        <div className="admin_addArticle_preHeaderB">
            <div className="admin_addArticle_preHeaderB_pic">
                <img src={header.coverUrl} alt="選擇的圖片" style={{height:"100%"}}/>
            </div>
            <div className="admin_addArticle_preHeaderB_content">
                <ShareButton />
                <h1>{header.title}</h1>
                <p className="admin_addArticle_preHeaderB_date">2000/12/12</p>
            <p className="admin_addArticle_preHeaderB_intro" dangerouslySetInnerHTML={{ __html: intro }}></p>
            </div>
        </div>
    )
}

export default AdHeaderB;