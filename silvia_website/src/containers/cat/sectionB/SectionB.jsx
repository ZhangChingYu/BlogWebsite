import React from "react";
import './sectionB.css';
import { PictureItem } from "../../../components/cat"; 

const SectionB = ({section}) => {
    const intro = section.intro.replaceAll("\\"+"n","<br>")
    return(
        <div className="cat_sectionB">
            <h2>{JSON.parse(`"${section.title}"`)}</h2>
            <p dangerouslySetInnerHTML={{ __html: intro }}></p>
            <div className="cat_sectionB_items">
                {section.picList.map((image, index)=>(
                    <PictureItem url={image.replace("media/image","http://localhost:8080/images")} Width={"62%"} Height={"400px"} fixType={"w"} />
                ))}
            </div>
        </div>
    )
}

export default SectionB;