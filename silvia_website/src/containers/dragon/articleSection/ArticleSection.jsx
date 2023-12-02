import React from "react";
import './articleSection.css';

const ArticleSection = ({section}) => {
    return(
        <div className="dragon_article_section">
            <h2>{section.title}</h2>
            <p dangerouslySetInnerHTML={{__html:section.intro.replaceAll("\\n","<br>")}}></p>
            {section.picList.map((image, index)=>(
                <div key={"dragon_article_section_img_wrapper_"+index} className="dragon_article_section_img">
                    <img key={"dragon_article_section_img_"+index} src={image.replace("media/image","http://localhost:8080/images")} alt=""/>
                </div>
            ))}
        </div>
    )
}

export default ArticleSection;