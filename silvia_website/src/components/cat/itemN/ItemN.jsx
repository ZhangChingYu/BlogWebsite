import React, {useState} from "react";
import './itemN.css';
import { BsThreeDots} from 'react-icons/bs';
import { RiShareBoxLine, RiFileCopyLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const ItemN = ({title, category, date, imgPath, postId, navigator}) => {
    const [shareFocus, setShareFocus] = useState(false);
    const [copyFocus, setCopyFocus] = useState(false);
    const [moreShow, setMoreShow] = useState(false);
    
    const formattedDate = new Date(date).toLocaleDateString('en-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'Asia/Taipei',
    });

    const onClikHandler = () => {
        navigator("/life/article", {state:{id:postId}});
    }
    
    const moreHandler = () => {
        setMoreShow(!moreShow);
    }

    const categoryOnclick = (Category) => {
        if(Category.id!==1){
            navigator("/life/category", {state:{cateId:Category.id, category:Category.name}})
        }
    }
    return(
        <div className="cat_itemN">
            <div className="cat_itemN_img">
                <img src={imgPath.replace("media/image","http://localhost:8080/images")} alt="cookie"/>
            </div>
            <div className="cat_itemN_title">
                <p onClick={onClikHandler}>{JSON.parse(`"${title}"`)}</p>
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
                    {category.map((category, index)=>(
                        <div key={"cat_itmeN_footer_cate_"+index} style={{textDecorationLine:"none", color:"var(--color-cat-theme)"}}>
                            <p key={"cat_itmeN_footer_cate_"+category.name+"_"+index} onClick={()=>{categoryOnclick(category)}}>#{category.name}</p>
                        </div>
                    ))}
                </div>
                <p>{formattedDate}</p>
            </div>
        </div>
    )
}

export default ItemN;