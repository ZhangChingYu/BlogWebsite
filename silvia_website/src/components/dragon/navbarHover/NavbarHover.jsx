import React, {useState} from "react";
import './navbarHover.css';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import iconImg from '../../../assets/scale2.png';

const NavbarHover = ({themeHandler, initPos}) => {
    const navigator = useNavigate();
    const positionColor = "var(--color-gradient-trans)";
    const positionShadow = "box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset";
    const [position, setPosition] = useState(initPos);
    const [openState, setOpenState] = useState(false);
    const [prePos, setPrePos] = useState(initPos);
    const clickHandler = (pos, theme) => {
        setPosition(pos);
        themeHandler(theme);
        if(prePos===0&pos===0){
            navigator(-1);
        }
        if(initPos!==0&pos===0){
            navigator("/work")
        }
        setPrePos(pos);
    }
    return (
        <motion.div className="dragon_hoverbar" animate={{width:openState?"400px":"60px"}} transition={{duration:0.3}}>
            <div className="dragon_hoverbar_icon" onClick={()=>{setOpenState(!openState)}}>
                <img src={iconImg} alt=""onClick={()=>{setOpenState(!openState)}}/>
            </div>
            <motion.div className="dargon_hoverbar_links" animate={{opacity:openState?1:0, display:openState?"flex":"none"}} transition={{delay:openState?0.1:0}}>
                <motion.div className="dragon_hoverbar_link"
                animate={{opacity:openState?1:0, background:position===0?positionColor:"none", boxShadow:position===0?positionShadow:"none"}} 
                initial={{opacity:0}} transition={{duration:0.3, type:"tween", delay:openState?0.05:0}}
                onClick={()=>{clickHandler(0, "works")}}>
                    <p>Works</p>
                </motion.div>
                <motion.div className="dragon_hoverbar_link" 
                animate={{opacity:openState?1:0, background:position===1?positionColor:"none", boxShadow:position===1?positionShadow:"none"}} 
                initial={{opacity:0}} transition={{duration:0.3, type:"tween", delay:openState?0.1:0}}
                onClick={()=>{clickHandler(1,"category")}}>
                    <p>Category</p>
                </motion.div>
                <motion.div className="dragon_hoverbar_link" 
                animate={{opacity:openState?1:0, background:position===2?positionColor:"none", boxShadow:position===2?positionShadow:"none"}} 
                initial={{opacity:0}} transition={{duration:0.3, type:"tween", delay:openState?0.15:0}}
                onClick={()=>{clickHandler(2, "code")}}>
                    <p>Code</p>
                </motion.div>
                <motion.div className="dragon_hoverbar_link" 
                animate={{opacity:openState?1:0, background:position===3?positionColor:"none", boxShadow:position===3?positionShadow:"none"}} 
                initial={{opacity:0}} transition={{duration:0.3, type:"tween", delay:openState?0.2:0}}
                onClick={()=>{clickHandler(3, "project")}}>
                    <p>Project</p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default NavbarHover;