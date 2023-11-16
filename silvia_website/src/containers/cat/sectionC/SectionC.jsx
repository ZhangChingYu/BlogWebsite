import React from "react";
import './sectionC.css';
import { PictureItem } from "../../../components/cat";

const SectionC = ({section}) => {
    const intro = section.intro.replaceAll("\\"+"n","<br>")
    return(
        <div className="cat_sectionC">
            <div className="cat_sectionC_header">
                <div className="cat_sectionC_header_content">
                    <h2>{JSON.parse(`"${section.title}"`)}</h2>
                    <p dangerouslySetInnerHTML={{ __html: intro }}></p>
                </div>
                <div className="cat_sectionC_cover">
                    <img src={section.picList[0].replace("media/image","http://localhost:8080/images")} alt=""/>
                </div>
            </div>
            <div className="cat_sectionC_items">
                {section.picList.slice(1, section.picList.length).map((url, index)=>(
                    <div key={"cat_sectionC_items_"+index} style={{display:"flex", width:"48%", justifyContent:"flex-start", alignItems:"center", flexDirection:"column", marginBottom:"40px"}}>
                        <PictureItem url={url.replace("media/image","http://localhost:8080/images")} fixType={"h"} Width={"500px"} Height={"300px"} discription={""}/>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}

export default SectionC;