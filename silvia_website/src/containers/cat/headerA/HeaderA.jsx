import React from "react";
import './headerA.css';
import { ShareButton } from "../../../components/cat";

const HeaderA = ({title, date, intro, cover}) => {
    const i = intro.replaceAll("\\"+"n","<br>")
    const formattedDate = new Date(date).toLocaleDateString('en-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'Asia/Taipei',
    });
    return(
        <div className="cat_headerA">
            <ShareButton />
            <h2>{JSON.parse(`"${title}"`)}</h2>
            <p className="cat_headerA_date">{formattedDate}</p>
            <p dangerouslySetInnerHTML={{ __html: JSON.parse(`"${i}"`) }}></p>
            <div className="cat_headerA_img">
                <img src={cover.replace("media/image","http://localhost:8080/images")} alt=""/>
            </div>
        </div>
    )
}

export default HeaderA;