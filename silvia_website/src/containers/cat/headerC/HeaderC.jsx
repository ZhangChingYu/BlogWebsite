import React from "react";
import './headerC.css';
import { PiShareFatFill } from 'react-icons/pi';

const HeaderC = () => {
    return(
        <div className="cat_headerC" >
            <div className="cat_headerC_content">
                <div className="cat_headerC_header">
                    <p className="cat_headerC_date">2023/08/02</p>
                    <PiShareFatFill size={25} className="cat_headerC_share"/>
                </div>
                <h2>Celebrating Father’s Day by Baking a Special Cake.</h2>
                <p>Whenever there is something to celebrate the baking energy inside me starts erupting. The picture was took 4 years ago, I still remember I took a lot of effort on that cake because I want my father to have a Father’s Day he would never forget. <br/><br/>In August, 2023, the upcoming Father's Day has many kids in a bind, especially those who are having trouble choosing a gift. Yet, nothing is more heart warming than a self-made gift, so why don’t make it tastier?</p>
            </div>
        </div>
    )
}

export default HeaderC;