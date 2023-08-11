import React from "react";
import './headerA.css';
import imgUrl from '../../../assets/cakecover.JPG';
import { PiShareFatFill } from 'react-icons/pi';


const HeaderA = () => {
    return(
        <div className="cat_headerA">
            <div className="cat_headerA_img" >
                <img src={imgUrl} alt=""/>
            </div>
            <div className="cat_headerA_content">
                <div className="cat_headerA_content_share">
                    <PiShareFatFill size={25} className="cat_headerA_content_share_icon"/>
                </div>
                <h2>Celebrating Father’s Day by Baking a Special Cake.</h2>
                <p className="cat_header_content_date">2023/08/02</p>
                <p>Whenever there is something to celebrate the baking energy inside me starts erupting. The picture was took 4 years ago, I still remember I took a lot of effort on that cake because I want my father to have a Father’s Day he would never forget. <br/><br/>In August, 2023, the upcoming Father's Day has many kids in a bind, especially those who are having trouble choosing a gift. Yet, nothing is more heart warming than a self-made gift, so why don’t make it tastier?</p>
            </div>
        </div>
    )
}

export default HeaderA;