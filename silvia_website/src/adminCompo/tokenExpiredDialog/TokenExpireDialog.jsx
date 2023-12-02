import React from "react";
import "./tokenExpireDialog.css";
import { useNavigate } from "react-router-dom";

const TokenExpireDialog = () => {
    const navigator = useNavigate();

    return (
        <div className="admin_expire_dialog">
            <div className="admin_expire_dialog_box">
                <p>Your token has expired, we can redirect you to login page or are you finished creating?</p>
                <div className="admin_expire_dialog_box_btns">
                    <div className="admin_expire_dialog_box_btn" style={{backgroundColor:"var(--color-cat-item)"}} onClick={()=>{navigator("/")}}>
                        <p>Home Page</p>
                    </div>
                    <div className="admin_expire_dialog_box_btn" onClick={()=>{navigator("/admin")}}>
                        <p>Sign In Again</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TokenExpireDialog;