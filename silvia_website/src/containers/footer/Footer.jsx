import React from "react";
import './footer.css';
import { FaFacebook, FaLine} from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { AiFillTwitterCircle } from 'react-icons/ai'

const Footer = ({ background, emailColor, textColor, Title }) => {
    var back = "white";
    if(background!==undefined){
        back = background;
    }

    return(
        <div className="m_footer" style={{background:back}}>
            <a target="_blank" rel="noreferrer" href="https://github.com/ZhangChingYu"><h2 style={{color:textColor}}>{Title}</h2></a>
            <div className="m_footer_content" style={{background:back}}>
                <div className="m_footer_subscribe">
                    <h2>If You Would Like To Subscribe</h2>
                    <p>You can leave your email down below so we can notified you whenever there is a new post being updated.</p>
                    <input placeholder="ex. 123456@gmail.com"/>
                    <div className="m_footer_subscribe_btn">
                        <p>Subscribe</p>
                    </div>
                </div>
                <div className="m_footer_contact" style={{background:back}}>
                    <h2 style={{color:emailColor}}>Get In Touch</h2>
                    <p style={{color:textColor}}>If you have something you want to share with me, you can send an email to the website’s mail box</p>
                    <p className="m_footer_contact_email" style={{color:emailColor}}>MySite@gmail.com</p>
                    <p style={{color:textColor}}>Welcome to share your own coding experience or things happen in your life with me.</p>
                    <div className="m_footer_contact_media">
                        <FaFacebook style={{color:textColor}} className="m_footer_contact_media_icon" size={26}/>
                        <RiInstagramFill style={{color:textColor}} className="m_footer_contact_media_icon" size={26}/>
                        <AiFillTwitterCircle style={{color:textColor}} className="m_footer_contact_media_icon" size={26}/>
                        <FaLine style={{color:textColor}} className="m_footer_contact_media_icon" size={26} />
                    </div>
                </div>
            </div>
            <p style={{color:textColor}} >Copyright©2023 SilviaChang.</p>
        </div>
    )
}

export default Footer;