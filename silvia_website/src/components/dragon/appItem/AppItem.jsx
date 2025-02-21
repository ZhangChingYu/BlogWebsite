import React, {useState} from "react";
import './appItem.css';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import roundImg from '../../../assets/scale.png';
import rectImg from '../../../assets/blog.png';

const AppItem = ({Type, article}) => {
    const navigator = useNavigate();
    const [hover, setHover] = useState(false);
    var itemType = false;
    if(Type!==undefined){
        itemType = Type;
    }
    if(article!==undefined){
        return(
            <motion.div className="dragon_appItem" style={{height:itemType?"420px":"200px"}}
            animate={{scale:[1,1.02,1]}} transition={{duration:0.6, type:"just"}}
            onPointerEnter={()=>{setHover(true)}} onPointerLeave={()=>{setHover(false)}} 
            onClick={()=>{navigator('/work/article', {state:{id:article.id}})}}>
            <div className="dragon_appItem_header">
                <h4>{JSON.parse(`"${article.title}"`)}</h4>
            </div>
            <div className="dragon_appItem_body" style={{flexDirection:itemType?"column":"row"}}>
                <div className="dragon_appItem_intro" style={itemType?{maxHeight:"110px", marginBottom:"40px"}:{}}>
                    <p style={{marginBottom:itemType?"":"20px"}}>{JSON.parse(`"${article.intro}"`)}</p>
                </div>
                <motion.div className="dragon_appItem_img" animate={itemType?{y:hover?-20:0, scale:hover?1.1:1}:{rotate:hover?[0,30,-30,0]:0}} transition={itemType?{duration:0.2, type:"just"}:{duration:0.6, type:'just'}} initial={itemType?{}:{rotate:0}}
                style={itemType?{width:"220px", height:"220px", borderRadius:"0", marginLeft:"0", marginBottom:"-40px"}:{width:"120px", height:"120px", borderRadius:"50%", marginLeft:"10px", position:"relative", bottom:"30px"}}>
                    <img src={article.coverPicUrl.replace("media/image","http://localhost:8080/images")} alt="" />
                </motion.div>
            </div>
        </motion.div>
        )
    }
    else{
        return(
            <motion.div className="dragon_appItem" style={{height:itemType?"420px":"200px",filter:"grayscale(100%)", cursor:"default", opacity:"0.7"}}
            animate={{scale:[1,1.02,1]}} transition={{duration:0.6, type:"just"}}>
                <div className="dragon_appItem_header">
                    <h4>Coming Soon...</h4>
                </div>
                <div className="dragon_appItem_body" style={{flexDirection:itemType?"column":"row"}}>
                    <div className="dragon_appItem_intro">
                        <p>New content will be updated one after another in the future, so stay tuned!</p>
                    </div>
                    <div className="dragon_appItem_img" style={{width:itemType?"220px":"120px", height:itemType?"220px":"120px", borderRadius:itemType?"0":"50%", marginLeft:itemType?"0":"10px", marginBottom:itemType?"-40px":"20px"}}>
                        <img src={itemType?rectImg:roundImg} alt="" style={itemType?{}:{rotate:"-90deg"}}/>
                    </div>
                </div>
            </motion.div>
        )
    }
}

export default AppItem;