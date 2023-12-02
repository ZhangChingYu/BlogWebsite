import React, {useEffect, useState} from "react";
import './latest.css';
import imgUrl from '../../../assets/blog.png';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Latest = () => {
    const [latest, setLatest] = useState(null);
    const [hover, setHover] = useState(false);
    const navigator = useNavigate()
    useEffect(()=>{
        fetch("http://localhost:8080/article/work/latest", {method:"GET"})
        .then((response)=>response.json())
        .then((data)=>{
            setLatest(data);
        })
        .catch((err)=>{console.log(err)})
    },[])
    return(
        <div className="dragon_latestSection">
            <h2>Latest</h2>
            <div className="dragon_latestSection_cube" onClick={()=>{navigator('/work/article', {state:{id:latest.id}})}}>
                <div className="dragon_latestSection_img"
                onPointerEnter={()=>{setHover(true)}}
                onPointerLeave={()=>{setHover(false)}}>
                    <motion.img src={imgUrl} alt="" animate={{y:hover?-20:0, scale:hover?1.02:1}} initial={{y:0, scale:0}} transition={{duration:0.3, type:"tween"}}/>
                </div>
                <div className="dragon_latestSection_context">
                    <p dangerouslySetInnerHTML={{__html:latest!==null&&latest.intro.replaceAll("\\"+"n","<br>")}}></p>
                </div>
            </div>
        </div>
    )
}

export default Latest;