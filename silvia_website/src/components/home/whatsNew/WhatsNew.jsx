import React from "react";
import './whatsNew.css';
import { motion } from 'framer-motion';
import { Link, useNavigate } from "react-router-dom";


const WhatsNew = ({article}) => {
    const navigator = useNavigate();
    const formattedDate = new Date(article.date).toLocaleDateString('en-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'Asia/Taipei',
    });
    return(
        <div id="latest" className="whatsnew">
            <div className="whatsnew_title">
                <h1>What's New</h1>
            </div>
            <div className="whatsnew_container">
                <motion.div className="whatsnew_container_card" animate={{marginTop:"-2rem"}} transition={{duration:2, type:"tween"}} >
                    <div className="whatsnew_container_card_r1">
                        <h2 onClick={()=>{navigator("/life/article", { state:{id:article.id}})}}>{JSON.parse(`"${article.title}"`)}</h2>
                        <p>{formattedDate}</p>
                    </div>
                    <div className="whatsnew_container_card_r2">
                        <p>{JSON.parse(`"${article.intro}"`)}</p>
                    </div>
                    <div className="whatsnew_container_card_r3">
                        <div className="whatsnew_container_card_tag">
                            {article.categoryList.map((category, index)=>(
                                <p key={"whatsnew_container_card_tag_"+index}>#{category.name}</p>
                            ))}
                        </div>
                        <Link to={"/life/article"} state={{id:article.id}} style={{textDecorationLine:"none", color:"#616161"}}><p>Read More</p></Link>
                    </div>
                </motion.div>
                <div className="whatsnew_container_pic">
                    <img src={article.coverPicUrl.replace("media/image","http://localhost:8080/images")} alt="Welcome To My Website"/>
                </div>
                
            </div>
        </div>
    )
}

export default WhatsNew;