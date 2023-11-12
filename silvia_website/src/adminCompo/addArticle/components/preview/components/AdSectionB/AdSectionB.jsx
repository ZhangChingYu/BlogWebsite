import React from "react";
import "./adSectionB.css";

const AdSectionB = ({section}) => {
    const intro = section.intro.replace("\n","<br><br>")
    return (
        <div className="admin_addArticle_sectionB">
            <h1>{section.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: intro }}></p>
            <div className="admin_addArticle_sectionB_pics">
                {section.picsUrl.map((url, index)=>(
                    <div key={"admin_preSecitonB_"+index}>
                        <img key={"admin_preSecitonB_pic_"+index} src={url} alt={"Section 圖片"} style={{maxWidth:"100%"}}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AdSectionB;