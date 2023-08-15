import React, {useState} from "react";
import './notesItem.css';
import { motion } from "framer-motion";
import { NoteClip } from "../../../containers/dragon";

const NotesItem = ({Title, Intro, Img}) => {
    const [hover, setHover] = useState(false);
    const [noteShow, setNoteShow] = useState(false);
    console.log(noteShow)
    return(
        <div>
            <div className="dragon_notesItem" onPointerEnter={()=>{setHover(true)}} onPointerLeave={()=>{setHover(false)}}
            onClick={()=>{setNoteShow(true)}}>
                <div className="dragon_notesItem_context">
                    <h2>{Title}</h2>
                    <div className="dragon_notesItem_context_intro">
                        <p>{Intro}</p>
                    </div>
                </div>
                <div className="dragon_notesItem_img">
                    <motion.img animate={{scale:hover?1.1:1}} src={Img} alt=""/>
                </div>
            </div>
            {noteShow?<NoteClip clickHandler={setNoteShow}/>:<></>}
        </div>
    )
}

export default NotesItem;