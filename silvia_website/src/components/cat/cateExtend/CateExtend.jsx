import React, {useState} from "react";
import './cateExtend.css';
import { Arrow } from '../../../components';
import { motion } from 'framer-motion';

const CateExtend = ({name, color}) => {
    const [showBox, setShowBox] = useState(false);
    var mainColor = "var(--color-cat-theme)";
    if(color!==undefined){
        mainColor=color;
    }
    return(
        <div className="cat_extendItem">
            <div className="cat_extendItem_bar" onClick={()=>{setShowBox(!showBox)}} style={{background:mainColor}}>
                <p>{name}</p>
            </div>
            {showBox?<motion.div animate={{scale:showBox?1:0}} initial={{scale:0}} transition={{type:'spring', duration:0.6}} className="cat_extendItem_hideBox" >
                <div className="cat_extendItem_hideBox_text">
                    <p>Here I’ve share some of my personal experiences that I think might be helpful to someone that encountering similar situation. Welcome to check out on them!</p>
                </div>
                <div className="cat_extendItem_hideBox_btn">
                    <Arrow PagePath={""} color={mainColor}/>
                </div>
            </motion.div>:<></>}
        </div>
    )
}

export default CateExtend;