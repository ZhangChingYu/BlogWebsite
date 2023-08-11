import React, {useState} from "react";
import './shareButton.css';
import { PiShareFatFill } from 'react-icons/pi';
import { FaFacebook} from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { BsThreeDots} from 'react-icons/bs';
import { motion } from "framer-motion";

const ShareButton = ({iconColor}) => {
    var color = "black";
    const [shareState, setShareState] = useState(false);
    if(iconColor!==undefined){
        color = iconColor;
    }
    return(
        <div className="cat_share_button">
            <motion.div animate={{opacity:shareState?0:1, display:shareState?"none":"unset", scale:shareState?0:1}} initial={{opacity:1, scale:1}} transition={{duration:0.5, type:"tween"}}>
                <PiShareFatFill className="cat_headerA_share_icon" size={25} onClick={()=>{setShareState(!shareState)}} color={color}/>
            </motion.div>
            <motion.div animate={{opacity:shareState?1:0, display:shareState?"unset":"none", scale:shareState?1:0}} initial={{opacity:0, scale:0}} transition={{duration:0.5, type:"tween"}}>
                <ImCross className="cat_headerA_share_icon" size={23} onClick={()=>{setShareState(!shareState)}} color={color}/>
            </motion.div>
            <motion.div className="cat_headerA_shareBox" animate={{ width:shareState?"180px":0, opacity:shareState?1:0 }} initial={{width:0, opacity:0}} transition={{duration:0.3, type:"tween"}}>
                <FaFacebook className="cat_headerA_share_item" size={30}/>
                <RiInstagramFill className="cat_headerA_share_item" size={30}/>
                <AiFillTwitterCircle className="cat_headerA_share_item" size={30}/>
                <BsThreeDots className="cat_headerA_share_item" size={30}/>
            </motion.div>
        </div>
    )
}

export default ShareButton;