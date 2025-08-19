import React from "react";
import './headerB.css';
import { ShareButton } from "../../../components/cat";

const HeaderB = ({title, date, intro, cover}) => {
    const i = intro.replaceAll("\\"+"n","<br>")
    const formattedDate = new Date(date).toLocaleDateString('en-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'Asia/Taipei',
    });
    return(
        <div className="cat_headerB">
            <div className="cat_headerB_img" >
                <img src={cover.replace("media/image","http://localhost:8080/images")} alt=""/>
            </div>
            <div className="cat_headerB_content">
                <ShareButton />
                <h2>{JSON.parse(`"${title}"`)}</h2>
                <p className="cat_header_content_date">{formattedDate}</p>
                <p dangerouslySetInnerHTML={{ __html: JSON.parse(`"${i}"`) }}></p>
            </div>
        </div>
    )
}

export default HeaderB;