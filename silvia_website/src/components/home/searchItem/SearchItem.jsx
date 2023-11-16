import React from "react";
import './searchItem.css';
import imgUrl from '../../../assets/postimg.jpeg';
import { BsThreeDots} from 'react-icons/bs';
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const SearchItem = ({article}) => {
    const navigator = useNavigate()
    const onClikHandler = () => {
        navigator("/life/article", { state: {id:article.id}});
    }
    return(
        <div className="home_search_item" onClick={onClikHandler}>
            <div className="home_search_item_img">
                {article===undefined?
                <motion.img src={imgUrl} alt="" 
                animate={{x:[0, 10, -8, 0], y:[0, 3, -5, 0], scale:[1, 1.2, 1]}} 
                transition={{type:"tween", duration:5, repeat:Infinity, repeatDelay:1}}/>:
                <motion.img src={article.coverPicUrl.replace("media/image","http://localhost:8080/images")} alt="" 
                animate={{x:[0, 10, -8, 0], y:[0, 3, -5, 0], scale:[1, 1.2, 1]}} 
                transition={{type:"tween", duration:5, repeat:Infinity, repeatDelay:1}}/>}
                
            </div>
            <div className="home_search_item_content">
                <div className="home_search_item_header">
                    <p>{article===undefined?"Copyright©2023":JSON.parse(`"${article.title}"`)}</p>
                    <BsThreeDots size={40} />
                </div>
                {article===undefined?
                <p className="home_search_item_intro">Here I’ve share some of my personal experiences that I think might be helpful to someone that encountering similar situation. Welcome to check out on them!</p>:
                <p className="home_search_item_intro" >{JSON.parse(`"${article.intro}"`)}</p>}
                
                <div className="home_search_item_footer">
                    {article===undefined?
                    <div className="home_search_item_footer_cate">
                        <Link to={"/life/category"} state={{category:"Baking"}} style={{textDecorationLine:"none", color:"var(--color-cat-theme)"}}><p>#Baking</p></Link>
                        <Link to={"/life/category"} state={{category:"Life"}} style={{textDecorationLine:"none", color:"var(--color-cat-theme)"}}><p>#Life</p></Link>
                    </div>:
                    <div className="home_search_item_footer_cate">
                        {article.categoryList.map((category, index)=>(
                            <p key={"cat_search_item_footer_cate_"+index}>#{category.name}</p>
                        ))}
                    </div>}
                    <p>{article===undefined?"2023/08/02":new Date(article.date).toLocaleDateString('en-TW',{year:'numeric',month:'2-digit',day:'2-digit',timeZone:'Asia/Taipei'})}</p>
                </div>
            </div>
        </div>
    )
}

export default SearchItem;