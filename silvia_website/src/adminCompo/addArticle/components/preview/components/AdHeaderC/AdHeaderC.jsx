import React from "react";
import "./adHeaderC.css";
import { ShareButton } from "../../../../../../components/cat";

const AdHeaderC = ({header}) => {
    const intro = header.intro.replace("\n","<br><br>")
    return(
        <div className="admin_addArticle_preHeaderC" style={{backgroundImage:`url(${header.coverUrl})`}}>
            <div className="admin_addArticle_preHeaderC_content">
                <div className="admin_addArticle_preHeaderC_header">
                    <p className="admin_addArticle_preHeaderC_date">2012/12/12</p>
                    <ShareButton iconColor={"white"}/>
                </div>
                <h1>{header.title}</h1>
                <p className="admin_addArticle_preHeaderC_intro" dangerouslySetInnerHTML={{ __html: intro }}></p>
            </div>
        </div>
    )
}

export default AdHeaderC;