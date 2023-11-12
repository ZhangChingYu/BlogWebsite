import React from "react";
import "./adSectionC.css";

const AddSectionC = ({section}) => {
    const intro = section.intro.replace("\n","<br><br>")

    return (
        <div className="admin_addArticle_preSecitonC">
            <div className="admin_addArticle_preSecitonC_header">
                <div >
                    <h1>{section.title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: intro }}></p>
                </div>
                <div style={{justifyContent:"center", alignItems:"center"}}>
                    <img src={section.picsUrl[0]} alt={""}  style={{maxHeight:"500px"}}/>
                </div>
            </div>
            <div className="admin_addArticle_preSecitonC_pics">
                {section.picsUrl.slice(1,  section.picsUrl.length).map((url, index)=>(
                    <div key={"admin_addArticle_preSecitonC_pics_"+index}>
                        <img src={url} alt={""} style={{maxHeight:"100%"}}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AddSectionC;