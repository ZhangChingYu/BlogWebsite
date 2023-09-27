import React from "react";
import { useState } from "react";
import "./login.css";
import ImgUrl from "../../assets/catbg.jpeg";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const loginHandler = () => {
        console.log(username);
        console.log(password);
    }
    return (
        <div className="login">
            <div className="login_header">
                <div className="login_header_img">
                    <img src={ImgUrl} alt="Avator" height={"400px"}/>
                </div>
            </div>
            <div className="login_input">
                <div className="login_input_wrapper">
                    <p>User Name:</p>
                    <input placeholder="email" type={"email"} onChange={(input)=>{setUsername(input.target.value)}}/>
                </div>
                <div className="login_input_wrapper">
                    <p>Password:</p>
                    <input placeholder="test" type={"password"} onChange={(input)=>{setPassword(input.target.value)}}/>
                </div>
            </div>
            <div className="login_btn">
                <div className="login_btn_cancelBtn" onClick={()=>{}}>CANCEL</div>
                <div className="login_btn_loginBtn" onClick={loginHandler}>LOGIN</div>
            </div>
        </div>
    );
}

export default Login;