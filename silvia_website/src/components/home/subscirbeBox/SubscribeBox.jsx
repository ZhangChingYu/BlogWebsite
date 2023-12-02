import React, { useState } from "react";
import './subscribeBox.css';

const SubscribeBox = () => {
    const [emailInput, setEmailInput] = useState("");
    const [dialogShow, setDialogShow] = useState(false);

    const closeDialog = () => {
        setDialogShow(false);
        setEmailInput("");
    }
    
    return(
        <div className="subscirbe_box">
            {
            dialogShow&&
            <div className="home_subscribe_dialog">
                <div className="home_subscribe_dialog_box">
                    <div className="home_subscribe_dialog_btn" onClick={closeDialog}>
                        <div className="home_subscribe_dialog_btn_45"></div>
                        <div className="home_subscribe_dialog_btn-45"></div>
                    </div>
                    <h1>Thank you for subscribing my blog website!</h1>
                    <p>{emailInput}</p>
                </div>
            </div>
            }
            <h2>If You Would Like To Subscribe</h2>
            <p>You can leave your email down below so we can notified you whenever there is a new post being updated.</p>
            <input placeholder="ex. 123456@gmail.com" value={emailInput} onChange={(input)=>{setEmailInput(input.target.value)}}/>
            <div className="subscirbe_box_btn" onClick={()=>{setDialogShow(true)}}>
                <p>Subscribe</p>
            </div>
        </div>
    )
}

export default SubscribeBox;