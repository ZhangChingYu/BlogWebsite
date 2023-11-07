import React from "react";
import "./footer.css";

const Footer = ({theme, setHeaderType, setSectionType}) => {
    if(!theme){
        setHeaderType("A");
        setSectionType("A");
    }

    const HeaderHandler = (type) => {
        if(!theme && type!=="A"){
            // do noting
        }
        else {
            setHeaderType(type);
        }
    }

    const SectionType = (type) => {
        if(theme) {

        }
    }

    return (
        <div className="admin_addArticle_footer">
            <div className="admin_addArticle_footer_header">
                <div className="admin_addArticle_footer_tool" onClick={()=>{setHeaderType("A")}}>
                    <p>Header A</p>
                    <div className="admin_addArticle_footer_ha">
                        <h1>Title</h1>
                        <p>2XXX/MM/dd</p>
                        <p>Introdution * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *</p>
                        <div>Cover Image</div>
                    </div>
                </div>
                <div className="admin_addArticle_footer_tool" style={theme?{}:{cursor:"default", backgroundColor:"lightgrey"}} onClick={()=>{HeaderHandler("B")}}>
                    <p>Header B</p> 
                    <div className="admin_addArticle_footer_hb">
                        <div>Cover Image</div>
                        <div>
                            <h1>Title</h1>
                            <p>2XXX/MM/dd</p>
                            <p>Introdution * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *</p>
                        </div>
                    </div>
                </div>
                <div className="admin_addArticle_footer_tool" style={theme?{}:{cursor:"default", backgroundColor:"lightgrey"}} onClick={()=>{HeaderHandler("C")}}>
                    <p>Header C</p>  
                    <div className="admin_addArticle_footer_hc">
                        <div>
                            <p style={{fontSize:"10px"}}>2XXX/MM/dd</p>
                            <h1>Title</h1>
                            <p>Introdution * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="admin_addArticle_footer_section">
                <div className="admin_addArticle_footer_tool" style={theme?{}:{cursor:"default", backgroundColor:"lightgrey"}} onClick={()=>{}}>
                    <p>Section A</p>
                    <div className="admin_addArticle_footer_sa">
                        <h1>Title</h1>
                        <p>Introdution * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *</p>
                        <div className="admin_addArticle_footer_sa_img">
                            <div>img</div>
                            <div>img</div>
                        </div>
                        <div className="admin_addArticle_footer_sa_img">
                            <div>img</div>
                            <div>img</div>
                        </div>
                    </div>
                </div>
                <div className="admin_addArticle_footer_tool">
                    <p>Section B</p>
                    <div className="admin_addArticle_footer_sb">
                        <h1>Title</h1>
                        <p>Introdution * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *</p>
                        <div>img</div>
                        <div>img</div>
                    </div>
                </div>
                <div className="admin_addArticle_footer_tool" style={theme?{}:{cursor:"default", backgroundColor:"lightgrey"}} onClick={()=>{}}>
                    <p>Section C</p>
                    <div className="admin_addArticle_footer_sc">
                        <div>
                            <div>
                                <h1>Title</h1>
                                <p>Introdution * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *</p>
                            </div>
                            <div className="admin_addArticle_footer_sc_img__">img</div>
                        </div>
                        <div className="admin_addArticle_footer_sc_img">
                            <div className="admin_addArticle_footer_sc_img_">img</div>
                            <div className="admin_addArticle_footer_sc_img_">img</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;