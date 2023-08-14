import React, {useState} from "react";
import './appItem.css';
import { motion } from "framer-motion";
import roundImg from '../../../assets/scale.png';
import rectImg from '../../../assets/blog.png';

const AppItem = ({Type, isSoon}) => {
    const [hover, setHover] = useState(false);
    var itemType = false;
    var Soon = false;
    if(Type!==undefined){
        itemType = Type;
    }
    if(isSoon!==undefined){
        Soon = isSoon;
    }
    return(
        <motion.div className="dragon_appItem" style={{height:itemType?"420px":"200px"}}
        animate={{scale:[1,1.02,1]}} transition={{duration:0.6, type:"just"}}
        onPointerEnter={()=>{setHover(true)}} onPointerLeave={()=>{setHover(false)}}>
            <div className="dragon_appItem_header">
                <h4>Mafoody</h4>
                {Soon?<div className="dragon_appItem_soon">
                    <p>Soon</p>
                </div>:<></>}
            </div>
            <div className="dragon_appItem_body" style={{flexDirection:itemType?"column":"row"}}>
                <div className="dragon_appItem_intro">
                    <p>Mafoody is a recipe recommendation app, it will recommends recipes based on your command history.</p>
                </div>
                <motion.div className="dragon_appItem_img" animate={itemType?{y:hover?-20:0, scale:hover?1.1:1}:{rotate:hover?[0,30,-30,0]:0}} transition={itemType?{duration:0.2, type:"just"}:{duration:0.6, type:'just'}} initial={itemType?{}:{rotate:0}}
                style={{width:itemType?"220px":"120px", height:itemType?"220px":"120px", borderRadius:itemType?"0":"50%", marginLeft:itemType?"0":"10px", marginBottom:itemType?"-40px":"20px"}}>
                    <img src={itemType?rectImg:roundImg} alt="" style={itemType?{}:{rotate:"-90deg"}}/>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default AppItem;