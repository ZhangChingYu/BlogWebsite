import React from "react";
import './subscribeBox.css';

const SubscribeBox = () => {
    return(
        <div className="subscirbe_box">
            <h2>If You Would Like To Subscribe</h2>
            <p>You can leave your email down below so we can notified you whenever there is a new post being updated.</p>
            <input placeholder="ex. 123456@gmail.com"/>
            <div className="subscirbe_box_btn">
                <p>Subscribe</p>
            </div>
        </div>
    )
}

export default SubscribeBox;