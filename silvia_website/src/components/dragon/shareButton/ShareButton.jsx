import React, { useState } from "react";
import './shareButton.css';
import { FaFacebook, FaShareSquare} from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { BsThreeDots} from 'react-icons/bs';
import { motion } from "framer-motion";

const ShareButton = () =>{
    const [shareState, setShareState] = useState(false);
    return(
        <div className="dragon_share_button">
            <motion.div animate={{opacity:shareState?0:1, display:shareState?"none":"unset", scale:shareState?0:1}} initial={{opacity:1, scale:1}} transition={{duration:0.5, type:"tween"}}>
                <FaShareSquare className="dragon_share_icon" size={28} onClick={()=>{setShareState(!shareState)}} color={"white"}/>
            </motion.div>
            <motion.div animate={{opacity:shareState?1:0, display:shareState?"unset":"none", scale:shareState?1:0}} initial={{opacity:0, scale:0}} transition={{duration:0.5, type:"tween"}}>
                <ImCross className="dragon_share_icon" size={23} onClick={()=>{setShareState(!shareState)}} color={"white"}/>
            </motion.div>
            <motion.div className="dragon_share_box" animate={{ width:shareState?"180px":0, opacity:shareState?1:0 }} initial={{width:0, opacity:0}} transition={{duration:0.3, type:"tween"}}>
                <FaFacebook className="dragon_share_item" size={30} />
                <RiInstagramFill className="dragon_share_item" size={30}/>
                <AiFillTwitterCircle className="dragon_share_item" size={30}/>
                <BsThreeDots className="dragon_share_item" size={30}/>
            </motion.div>
        </div>
    )
}

export default ShareButton;