import React, {useState} from "react";
import './itemN.css';
import { BsThreeDots} from 'react-icons/bs';
import { RiShareBoxLine, RiFileCopyLine } from 'react-icons/ri';
import imgUrl from '../../../assets/postimg.jpeg';

const ItemN = ({title, category, date, imgPath, postId}) => {
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
                    <div className="cat_itemN_more_item">
                        <RiShareBoxLine size={20} />
                        <p>Share</p>
                    </div>
                    <div className="cat_itemN_more_item">
                        <RiFileCopyLine size={20} />
                        <p>Copy Link</p>
                    </div>
                </div>:<></>}
            </div>
            <div className="cat_itemN_footer">
                <div className="cat_itmeN_footer_cate">
                    <p>#Baking</p>
                    <p>#Life</p>
                </div>
                <p>2023/08/02</p>
            </div>
        </div>
    )
}

export default ItemN;