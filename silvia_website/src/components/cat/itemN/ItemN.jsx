import React, {useState} from "react";
import './itemN.css';
import { BsThreeDots} from 'react-icons/bs';
import { RiShareBoxLine, RiFileCopyLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import imgUrl from '../../../assets/postimg.jpeg';

const ItemN = ({title, category, date, imgPath, postId}) => {
    const [shareFocus, setShareFocus] = useState(false);
    const [copyFocus, setCopyFocus] = useState(false);
    const [moreShow, setMoreShow] = useState(false);
    const moreHandler = () => {
        setMoreShow(!moreShow);
    }
    return(
        <div className="cat_itemN">
            <div className="cat_itemN_img">
                <img src={imgUrl} alt="cookie"/>
            </div>
            <div className="cat_itemN_title">
                <p>Copyright©2023sjjjjjjjjjfdjskfljdskjfidsaojjjaklsjk</p>
                <BsThreeDots className="cat_itemN_icon" size={25} onClick={moreHandler}/>
                {moreShow?<div className="cat_itemN_more">
                    <motion.div className="cat_itemN_more_item" 
                    animate={{scale:shareFocus?1.1:1, x:shareFocus?4:0, y:shareFocus?2:0}} transition={{duration:0.3, type:"spring"}}
                    onPointerEnter={()=>{setShareFocus(true)}} onPointerLeave={()=>{setShareFocus(false)}}>
                        <RiShareBoxLine size={20} />
                        <p>Share</p>
                    </motion.div>
                    <motion.div className="cat_itemN_more_item"
                    animate={{scale:copyFocus?1.1:1, x:copyFocus?4:0, y:copyFocus?2:0}} transition={{duration:0.3, type:"spring"}}
                    onPointerEnter={()=>{setCopyFocus(true)}} onPointerLeave={()=>{setCopyFocus(false)}}>
                        <RiFileCopyLine size={20} />
                        <p>Copy Link</p>
                    </motion.div>
                </div>:<></>}
            </div>
            <div className="cat_itemN_footer">
                <div className="cat_itmeN_footer_cate">
                    <Link to={"/life/category"} state={{category:"Baking"}} style={{textDecorationLine:"none", color:"var(--color-cat-theme)"}}><p>#Baking</p></Link>
                    <Link to={"/life/category"} state={{category:"Life"}} style={{textDecorationLine:"none", color:"var(--color-cat-theme)"}}><p>#Life</p></Link>
                </div>
                <p>2023/08/02</p>
            </div>
        </div>
    )
}

export default ItemN;