import React from "react";
import "./adSectionA.css";

const AdSectionA = ({section}) => {
    const intro = section.intro.replace("\n","<br><br>")
    return (
        <div className="admin_addArticle_preSectionA">
            <h1>{section.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: intro }}></p>
            <div className="admin_addArticle_preSectionA_pics">
                {section.picsUrl.map((url, index) => (
                    <div key={index} className="item">
                        <img src={url} alt={"s"} style={{maxHeight:"100%"}}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AdSectionA;