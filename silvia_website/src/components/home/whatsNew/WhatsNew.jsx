import React from "react";
import './whatsNew.css';
import imgUrl from '../../../assets/cat.png';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";


const WhatsNew = () => {
    return(
        <div id="latest" className="whatsnew">
            <div className="whatsnew_title">
                <h1>What's New</h1>
            </div>
            <div className="whatsnew_container">
                <motion.div className="whatsnew_container_card" animate={{marginTop:"-2rem"}} transition={{duration:2, type:"tween"}} >
                    <div className="whatsnew_container_card_r1">
                        <h2>Welcome To My Website!!</h2>
                        <p>2023/07/21</p>
                    </div>
                    <div className="whatsnew_container_card_r2">
                        <p>This is a website that shares my daily life and some things that I do to improve my self. The website is divided into two themes: Work and Life</p>
                    </div>
                    <div className="whatsnew_container_card_r3">
                        <div className="whatsnew_container_card_tag">
                            <p>#Life</p>
                            <p>#Work</p>
                        </div>
                        <Link to={"/life/article"} style={{textDecorationLine:"none", color:"#616161"}}><p>Read More</p></Link>
                    </div>
                </motion.div>
                <div className="whatsnew_container_pic">
                    <img src={imgUrl} alt="Welcome To My Website"/>
                </div>
                
            </div>
        </div>
    )
}

export default WhatsNew;