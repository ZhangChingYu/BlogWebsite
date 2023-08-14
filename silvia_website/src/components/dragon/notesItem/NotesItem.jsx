import React, {useState} from "react";
import './notesItem.css';
import { motion } from "framer-motion";

const NotesItem = ({Title, Intro, Img, clickHandler}) => {
    const [hover, setHover] = useState(false);
    return(
        <div className="dragon_notesItem" onPointerEnter={()=>{setHover(true)}} onPointerLeave={()=>{setHover(false)}}
        onClick={()=>{clickHandler(true)}}>
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
    )
}

export default NotesItem;