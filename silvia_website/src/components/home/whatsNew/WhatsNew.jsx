import React from "react";
import './whatsNew.css';
import { motion } from 'framer-motion';
import { Link, useNavigate } from "react-router-dom";


const WhatsNew = ({article}) => {
    console.log(article);
    const navigator = useNavigate();
    const formattedDate = new Date(article.date).toLocaleDateString('en-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'Asia/Taipei',
    });
    const categoryOnclick = (root, category) => {
        if(root.id===1){
            if(category.id===root.id){
                navigator("/life");
            }else {
                navigator("/life/category", {state:{cateId:category.id, category:category.name}})
            }
        }else if(root.id===2){
            if(category.id===root.id){
                navigator("/work");
            }
            else {
                navigator("/work/category", {state:{cateId:category.id, category:category.name}})
            }
        }
    }
    const titleOnclike = (root, id) => {
        if(root === 1) {
            navigator("/life/article", {state:{id:id}});
        } else if(root === 2) {
            navigator("/work/article", {state:{id:id}});
        }
    }
    return(
        <div id="latest" className="whatsnew">
            <div className="whatsnew_title">
                <h1>What's New</h1>
            </div>
            <div className="whatsnew_container">
                <motion.div className="whatsnew_container_card" animate={{marginTop:"-2rem"}} transition={{duration:2, type:"tween"}} >
                    <div className="whatsnew_container_card_r1">
                        <h2 onClick={()=>{titleOnclike(article.categoryList[0].id, article.id)}}>{JSON.parse(`"${article.title}"`)}</h2>
                        <p>{formattedDate}</p>
                    </div>
                    <div className="whatsnew_container_card_r2">
                        <p>{JSON.parse(`"${article.intro}"`)}</p>
                    </div>
                    <div className="whatsnew_container_card_r3">
                        <div className="whatsnew_container_card_tag">
                            {article.categoryList.map((category, index)=>(
                                <p key={"whatsnew_container_card_tag_"+index} onClick={()=>{categoryOnclick(article.categoryList[0],category)}}>#{category.name}</p>
                            ))}
                        </div>
                        <Link to={article.categoryList[0].name==="Life"?"/life/article":"/work/article"} state={{id:article.id}} style={{textDecorationLine:"none", color:"#616161"}}><p>Read More</p></Link>
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