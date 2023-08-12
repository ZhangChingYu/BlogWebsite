import React, {useState} from "react";
import './latest.css';
import imgUrl from '../../../assets/blog.png';
import { motion } from "framer-motion";

const Latest = () => {
    const [hover, setHover] = useState(false);
    return(
        <div className="dragon_latestSection">
            <h2>Latest</h2>
            <div className="dragon_latestSection_cube">
                <div className="dragon_latestSection_img"
                onPointerEnter={()=>{setHover(true)}}
                onPointerLeave={()=>{setHover(false)}}>
                    <motion.img src={imgUrl} alt="" animate={{y:hover?-20:0, scale:hover?1.02:1}} initial={{y:0, scale:0}} transition={{duration:0.3, type:"tween"}}/>
                </div>
                <div className="dragon_latestSection_context">
                    <p>Recently, I’ve been working on my personal website. Since this is a solo project, I’d have to design and build everything by myself.<br/><br/>It’s not going to be easy but I get to make it as I wanted. Let’s see how it turns out!</p>
                </div>
            </div>
        </div>
    )
}

export default Latest;