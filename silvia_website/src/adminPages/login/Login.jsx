import React from "react";
import { useState } from "react";
import "./login.css";
import ImgUrl from "../../assets/catbg.jpeg";
import { useNavigate  } from "react-router-dom";

const Login = () => {
    const height = window.innerHeight;
    const width = window.innerWidth;

    const navigator = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [windowShow, setWindowShow] = useState(false);

    const loginHandler = () => {
        if(!windowShow){
            if(username === "sunny1218.chang@gmail.com" && password === "sunny1218") {
                navigator("/admin/home");
            }
            else{
                setWindowShow(true);
            }
        }
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
                    <input 
                    onKeyPress={(event)=>{if(event.code==="Enter"){loginHandler()}}}
                    placeholder="email" 
                    type={"email"} 
                    onChange={(input)=>{setUsername(input.target.value)}}/>
                </div>
                <div className="login_input_wrapper">
                    <p>Password:</p>
                    <input 
                    onKeyPress={(event)=>{if(event.code==="Enter"){loginHandler()}}}
                    placeholder="test" 
                    type={"password"} 
                    onChange={(input)=>{setPassword(input.target.value)}}/>
                </div>
            </div>
            <div className="login_btn">
                <div className="login_btn_cancelBtn" onClick={()=>{navigator("/")}}>CANCEL</div>
                <div className="login_btn_loginBtn" onClick={loginHandler}>LOGIN</div>
            </div>
            <div className="login_box" style={windowShow?{height:height, width:width}:{display:"none"}}>
                <div className="login_error">
                    <div className="login_error_text">
                        <p>You have entered the wrong "User Name" or "Password", the "User Name" should be your gmail address, and the "Password" should be something familiar. Please try again.</p>
                    </div>
                    <div className="login_error_closeBtn" onClick={()=>{setWindowShow(false)}}>
                        <p>OK</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;