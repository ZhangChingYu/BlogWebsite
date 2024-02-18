import React, { useState } from "react";
import './theme.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import WorkShow from "../../../lottie/Simple Work Theme-2.json";
import WorkType from "../../../lottie/Work Theme Type-2.json";

const Theme = () => {
    const navigator = useNavigate();
    const [dragonHover, setDragonHover] = useState(false);
    const [catHover, setCatHover] = useState(false);
    const [dragonEnd, setDragonEnd] = useState(false);
    return( 
        <div id="theme" className="theme">
            <div className="theme_dragon" title="check out my work" onClick={()=>{navigator("/work")}} onPointerEnter={()=>{setDragonHover(true)}} onPointerLeave={()=>{setDragonHover(false)}}>
                <div className="theme_animate">
                    {dragonEnd?
                        <Lottie animationData={WorkType} loop={true} autoPlay={false}/>:
                        <Lottie animationData={WorkShow} loop={false} autoPlay={false} onComplete={()=>{setDragonEnd(true)}}/>
                    }
                </div>
                <div className="theme_dragon_btn"> 
                    <p>My Work</p>
                </div>
                <Link to={'/work'} className="theme_dragon_link">
                    <motion.div className="theme_dragon_circle" animate={{x:"5rem", boxShadow:"4px 0px 0px 0px rgba(0, 0, 0, 0.25)"}} transition={{duration:1, type:"tween"}} initial={{boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}>
                    </motion.div>
                </Link>
                
            </div>
            <div className="theme_cat" title="check out my life" onClick={()=>{navigator("/life")}} onPointerEnter={()=>{setCatHover(true)}} onPointerLeave={()=>{setCatHover(false)}}>
                <motion.p className="theme_cat_text" animate={{opacity:catHover?0.95:0}} initial={{opacity:0}} transition={{duration:0.5, type:"tween"}}>Check out my Life</motion.p>
                <Link to={'/life'} className="theme_cat_link">
                    <motion.div className="theme_cat_circle" animate={{x:"-5rem", boxShadow:"-4px 0px 0px 0px rgba(0, 0, 0, 0.25)"}} transition={{duration:1, type:"tween"}} initial={{boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}>
                    </motion.div>
                </Link>
            </div>
        </div>
    )
}

export default Theme;