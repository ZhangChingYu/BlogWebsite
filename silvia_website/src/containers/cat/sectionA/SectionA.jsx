import React from "react";
import './sectionA.css';
import { PictureItem } from '../../../components/cat';

const SectionA = ({section}) => {
    return(
        <div className="cat_sectionA">
            <h2>{JSON.parse(`"${section.title}"`)}</h2>
            <p dangerouslySetInnerHTML={{__html:JSON.parse(`"${section.intro.replaceAll("\\"+"n","<br>")}"`)}}></p>
            <div className="cat_sectionA_wrapper">
                {section.picList.map((image, index)=>(
                    <div key={"cat_sectionA_wrapper_"+index} style={{width:"48%"}}>
                        <PictureItem url={image.replace("media/image","http://localhost:8080/images")} Width={"400px"} Height={"300px"} discription={"Picture of cake plan and the recipe that follows and some dodos."} fixType={"h"}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SectionA;