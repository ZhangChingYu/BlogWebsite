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
    const [hover, setHover] = useState(false);
    const clickHandler = (pos, theme) => {
        if(pos === 0){
            navigator("/work")
        }
        setPosition(pos);
        themeHandler(theme); 
    }
    return (
        <motion.div className="dragon_hoverbar" animate={{width:openState?"600px":"60px"}} transition={{duration:0.3}}>
            <div className="dragon_hoverbar_icon" onClick={()=>{setOpenState(!openState)}} onPointerEnter={()=>{setHover(true)}} onPointerLeave={()=>{setHover(false)}}>
                <motion.img animate={hover?{rotate:[0, 10, -10, 0]}:{}} transition={{type:"tween", duration:0.5}} src={iconImg} alt=""onClick={()=>{setOpenState(!openState)}}/>
            </div>
            <motion.div className="dargon_hoverbar_links" animate={{opacity:openState?1:0, display:openState?"flex":"none"}} transition={{delay:openState?0.1:0}}>
                <motion.div className="dragon_hoverbar_link"
                animate={{opacity:openState?1:0, background:position===0?positionColor:"none", boxShadow:position===0?positionShadow:"none"}} 
                initial={{opacity:0}} transition={{duration:0.3, type:"tween", delay:openState?0.05:0}}
                onClick={()=>{clickHandler(0, "works")}}>
                    <p style={{color:"#FFF0A1"}}>Back</p>
                </motion.div>
                <motion.div className="dragon_hoverbar_link"
                animate={{opacity:openState?1:0, background:position===1?positionColor:"none", boxShadow:position===1?positionShadow:"none"}} 
                initial={{opacity:0}} transition={{duration:0.3, type:"tween", delay:openState?0.05:0}}
                onClick={()=>{clickHandler(1, "App")}}>
                    <p>App</p>
                </motion.div>
                <motion.div className="dragon_hoverbar_link"
                animate={{opacity:openState?1:0, background:position===2?positionColor:"none", boxShadow:position===2?positionShadow:"none"}} 
                initial={{opacity:0}} transition={{duration:0.3, type:"tween", delay:openState?0.05:0}}
                onClick={()=>{clickHandler(2, "Website")}}>
                    <p>Website</p>
                </motion.div>
                <motion.div className="dragon_hoverbar_link"
                animate={{opacity:openState?1:0, background:position===3?positionColor:"none", boxShadow:position===3?positionShadow:"none"}} 
                initial={{opacity:0}} transition={{duration:0.3, type:"tween", delay:openState?0.05:0}}
                onClick={()=>{clickHandler(3, "UI/UX")}}>
                    <p>UI/UX</p>
                </motion.div>
                <motion.div className="dragon_hoverbar_link"
                animate={{opacity:openState?1:0, background:position===4?positionColor:"none", boxShadow:position===4?positionShadow:"none"}} 
                initial={{opacity:0}} transition={{duration:0.3, type:"tween", delay:openState?0.05:0}}
                onClick={()=>{clickHandler(4, "Notes")}}>
                    <p>Notes</p>
                </motion.div>
                <motion.div className="dragon_hoverbar_link" 
                animate={{opacity:openState?1:0, background:position===5?positionColor:"none", boxShadow:position===5?positionShadow:"none"}} 
                initial={{opacity:0}} transition={{duration:0.3, type:"tween", delay:openState?0.1:0}}
                onClick={()=>{clickHandler(5,"category")}}>
                    <p>Category</p>
                </motion.div>
                {/*
                <motion.div className="dragon_hoverbar_link" 
                animate={{opacity:openState?1:0, background:position===3?positionColor:"none", boxShadow:position===3?positionShadow:"none"}} 
                initial={{opacity:0}} transition={{duration:0.3, type:"tween", delay:openState?0.2:0}}
                onClick={()=>{clickHandler(3, "project")}}>
                    <p>Project</p>
                </motion.div>
                **/}
            </motion.div>
        </motion.div>
    )
}

export default NavbarHover;