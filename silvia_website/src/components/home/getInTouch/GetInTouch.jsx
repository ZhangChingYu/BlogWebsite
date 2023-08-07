import React from "react";
import './getInTouch.css';
import { FaFacebook, FaLine} from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { AiFillTwitterCircle } from 'react-icons/ai'

const GetIntouch = () => {
    return(
        <div id="contact" className="contact">
            <h1>Get In Touch</h1>
            <p>If you have something you want to share with me, you can send an email to the website’s mail box</p>
            <p className="contact_email">MySite@gmail.com</p>
            <p>Welcome to share your own coding experience or things happen in your life with me.</p>
            <h1 className="contact_other">Or You May Prefer Contact Me Using Social Media</h1>
            <div className="contact_media">
                <FaFacebook className="contact_media_icon" size={36}/>
                <RiInstagramFill className="contact_media_icon" size={36}/>
                <AiFillTwitterCircle className="contact_media_icon" size={36}/>
                <FaLine className="contact_media_icon" size={36}/>
            </div>
        </div>
    )
}

export default GetIntouch;