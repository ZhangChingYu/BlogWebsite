import React from "react";
import './noteClip.css';
import imgUrl from '../../../assets/cat.png';

const NoteClip = ({Title, Date, clickHandler}) => {
    return(
        <div className="dragon_noteClip">
            <div className="dragon_noteClip_box">
                <div className="dragon_noteClip_btn" onClick={()=>{clickHandler(false)}}>
                </div>
                <h2>{Title}</h2>
                <p className="dragon_noteClip_box_date">{Date}</p>
                <p>Things about coding is that there are always new tools, concepts, frameworks, languages that emerge. So, in order to keep up with have to constantly updating our knowledge. Here are the documentary of what I have learned so far, hope some of the note could help you.</p>
                <img src={imgUrl} alt=""/>
                <p>Things about coding is that there are always new tools, concepts, frameworks, languages that emerge. So, in order to keep up with have to constantly updating our knowledge. Here are the documentary of what I have learned so far, hope some of the note could help you.</p>
                <p>Things about coding is that there are always new tools, concepts, frameworks, languages that emerge. So, in order to keep up with have to constantly updating our knowledge. Here are the documentary of what I have learned so far, hope some of the note could help you.</p>
                <p>Things about coding is that there are always new tools, concepts, frameworks, languages that emerge. So, in order to keep up with have to constantly updating our knowledge. Here are the documentary of what I have learned so far, hope some of the note could help you.</p>
                <p>Things about coding is that there are always new tools, concepts, frameworks, languages that emerge. So, in order to keep up with have to constantly updating our knowledge. Here are the documentary of what I have learned so far, hope some of the note could help you.</p>
            </div>
        </div>
    )
}

export default NoteClip;