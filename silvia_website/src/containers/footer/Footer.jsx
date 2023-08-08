import React from "react";
import './footer.css';
import { FaFacebook, FaLine} from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
    return(
        <div className="m_footer">
            <div className="m_footer_content">
                <div className="m_footer_subscribe">
                    <h2>If You Would Like To Subscribe</h2>
                    <p>You can leave your email down below so we can notified you whenever there is a new post being updated.</p>
                    <input placeholder="ex. 123456@gmail.com"/>
                    <div className="m_footer_subscribe_btn">
                        <p>Subscribe</p>
                    </div>
                </div>
                <div className="m_footer_contact">
                    <h2>Get In Touch</h2>
                    <p>If you have something you want to share with me, you can send an email to the website’s mail box</p>
                    <p className="m_footer_contact_email">MySite@gmail.com</p>
                    <p>Welcome to share your own coding experience or things happen in your life with me.</p>
                    <div className="m_footer_contact_media">
                        <FaFacebook className="m_footer_contact_media_icon" size={26}/>
                        <RiInstagramFill className="m_footer_contact_media_icon" size={26}/>
                        <AiFillTwitterCircle className="m_footer_contact_media_icon" size={26}/>
                        <FaLine className="m_footer_contact_media_icon" size={26} />
                    </div>
                </div>
            </div>
            <p>Copyright©2023 SilviaChang.</p>
        </div>
    )
}

export default Footer;