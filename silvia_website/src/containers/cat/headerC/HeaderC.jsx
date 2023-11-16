import React from "react";
import './headerC.css';
import { ShareButton } from "../../../components/cat";

const HeaderC = ({title, date, intro, cover}) => {
    const i = intro.replaceAll("\\"+"n","<br>")
    const formattedDate = new Date(date).toLocaleDateString('en-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'Asia/Taipei',
    });
    return(
        <div className="cat_headerC" style={{backgroundImage:`url(${cover.replace("media/image","http://localhost:8080/images")})`}}>
            <div className="cat_headerC_content">
                <div className="cat_headerC_header">
                    <p className="cat_headerC_date">{formattedDate}</p>
                    <ShareButton iconColor={"white"}/>
                </div>
                <h2>{JSON.parse(`"${title}"`)}</h2>
                <p dangerouslySetInnerHTML={{ __html: i }}></p>
            </div>
        </div>
    )
}

export default HeaderC;