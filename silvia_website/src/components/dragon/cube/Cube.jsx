import React, {useState} from "react";
import './cube.css';
import { motion } from "framer-motion";

const Cube = ({Title, imgFile, Color, Weight, Top, clickhHandler}) => {
    const [hover, setHover] = useState(false);
    return(
        <div className="dragon_cube" style={{background:Color, flex:Weight}}
        onPointerEnter={()=>{setHover(true)}}
        onPointerLeave={()=>{setHover(false)}}
        onClick={()=>clickhHandler()}>
            <h2>{Title}</h2>
            <div className="dragon_cube_img" style={{paddingTop:Top}}>
                {imgFile!==undefined?
                <motion.img 
                src={imgFile} alt="" 
                animate={{y:hover?-20:0, scale:hover?1.02:1}} transition={{duration:0.3, type:"tween"}} initial={{h:0, scale:0}}/>
                :<></>}
            </div>
        </div>
    )
}

export default Cube;