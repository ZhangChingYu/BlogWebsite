import React, { useEffect, useState } from "react";
import './noteClip.css';

const NoteClip = ({id, clickHandler}) => {
    const [article, setArticle] = useState(null);
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/article/${id}`, {method:"GET"})
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setArticle(data);
        })
        .catch((err)=>{console.log(err);})
    },[id])

    const sectionElement = (section)=> {
        return(
            <div className="dragon_noteClip_section">
                <h2>{JSON.parse(`"${section.title}"`)}</h2>
                <p dangerouslySetInnerHTML={{__html:JSON.parse(`"${section.intro.replaceAll("\\n", "<br>")}"`)}}></p>
                {section.picList.map((image, index)=>(
                    <div key={"dragon_noteClip_section_img_wrapper_"+index} className="dragon_noteClip_section_img">
                        <img key={"dragon_noteClip_section_img_"+index} src={image.replace("media/image", "http://localhost:8080/images")} alt=""/>
                    </div>
                ))}
            </div>
        )
    }

    return(
        <div className="dragon_noteClip">
            {article!==null?<div className="dragon_noteClip_box">
                <div className="dragon_noteClip_btn" onClick={()=>{clickHandler(false)}}></div>
                <h2>{JSON.parse(`"${article.title}"`)}</h2>
                <p className="dragon_noteClip_box_date">{new Date(article.date).toLocaleDateString('en-TW', {year: 'numeric',month: '2-digit',day: '2-digit',timeZone: 'Asia/Taipei'})}</p>
                <p className="dragon_noteClip_header_intro">{JSON.parse(`"${article.intro}"`)}</p>
                <img src={article.coverImgUrl.replace("media/image","http://localhost:8080/images")} alt=""/>
                {article.sectionList.map((section, index)=>(
                    <div key={"dragon_noteClip_section_wrapper_"+index}>{sectionElement(section)}</div>
                ))}
            </div>:<></>}
        </div>
    )
}

export default NoteClip;