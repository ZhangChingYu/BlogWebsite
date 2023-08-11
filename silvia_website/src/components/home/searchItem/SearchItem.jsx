import React from "react";
import './searchItem.css';
import imgUrl from '../../../assets/postimg.jpeg';
import { BsThreeDots} from 'react-icons/bs';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SearchItem = ({title, content, category, date}) => {
    return(
        <div className="home_search_item">
            <div className="home_search_item_img">
                <motion.img src={imgUrl} alt="" 
                animate={{x:[0, 10, -8, 0], y:[0, 3, -5, 0], scale:[1, 1.2, 1]}} 
                transition={{type:"tween", duration:5, repeat:Infinity, repeatDelay:1}}/>
            </div>
            <div className="home_search_item_content">
                <div className="home_search_item_header">
                    <p>Copyright©2023</p>
                    <BsThreeDots size={40} />
                </div>
                <p className="home_search_item_intro">Here I’ve share some of my personal experiences that I think might be helpful to someone that encountering similar situation. Welcome to check out on them!</p>
                <div className="home_search_item_footer">
                    <div className="home_search_item_footer_cate">
                        <Link to={"/life/category"} state={{category:"Baking"}} style={{textDecorationLine:"none", color:"var(--color-cat-theme)"}}><p>#Baking</p></Link>
                        <Link to={"/life/category"} state={{category:"Life"}} style={{textDecorationLine:"none", color:"var(--color-cat-theme)"}}><p>#Life</p></Link>
                    </div>
                    <p>2023/08/02</p>
                </div>
            </div>
        </div>
    )
}

export default SearchItem;