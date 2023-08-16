import React, { useState } from "react";
import './projectFile.css';
import { motion } from "framer-motion";

var categories = ["Website", "UI/UX", "Notes"];

const ProjectFile = ({Title, Intro, Categories}) => {
    const [hover, setHover] = useState(false);
    return(
        <div className="dragon_projectFile" onPointerEnter={()=>{setHover(true)}} onPointerLeave={()=>{setHover(false)}}>
            
            <div className="dragon_projectFile_back">
                <div></div>
            </div>
            <motion.div className="dragon_projectFile_inner" animate={{y:hover?-40:0}} transition={{duration:0.3, type:"tween"}}>
                {categories.map((c, index)=>{
                    return(
                        <div className="dragon_projectFile_tag" 
                        style={{background:c==="App"?"#B8C2EF":c==="Website"?"#CBFFE3":c==="UI/UX"?"#FFDBB0":""}} 
                        key={c+index}></div>
                    )
                })}
            </motion.div>
            <div className="dragon_projectFile_front" title="check it out">
                <h2>Silvia’s Website</h2>
                <div></div>
                <p>Recently, I’ve been working on my personal website. Since this is a solo project, I’d have to design and build everything by myself. It’s not going to be easy but I get to make it as I wanted. Let’s see how it turns out!</p>
            </div>
        </div>
    )
}

export default ProjectFile;