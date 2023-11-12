import React, { useState } from "react";
import "./header.css";

const HeaderForm = ({SubmitHandler, header}) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentDate, setCurrentDate] = useState(new Date());

    // 處理文件選擇事件
    const handleFileSelect = (event) => {
        const file = event.target.files[0]; // 獲取選擇的文件
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                // 在讀取完成後，將圖片數據設定為選定圖片的URL
                setSelectedImage(e.target.result);
            };
            reader.readAsDataURL(file); // 讀取文件內容
        }
    };

    return (
        <form className="admin_addArticle_head" onSubmit={SubmitHandler} style={{width:"100%"}}>
            <h1>Edit Your Header</h1>
            <div className="admin_addArticle_header">
                <label>
                    <input className="admin_addArticle_header_title" type={"text"} name="title" defaultValue={header.title?header.title:""} placeholder="Article Title" required/>
                </label>
                <p>{currentDate.getFullYear()}/{currentDate.getMonth()+1}/{currentDate.getDate()}</p>
                <label>
                    <textarea className="admin_addArticle_header_intro" name="intro" defaultValue={header.intro?header.intro:""} id="" cols="30" rows="10" placeholder="Introduction" required/>
                </label>
                <label className="admin_addArticle_header_cov">
                    Add Your Cover Picture:
                    <input className="admin_addArticle_header_cover" name="cover" type="file" accept="image/*" onChange={handleFileSelect} required/>
                </label>
                {selectedImage && (
                <div>
                    <img src={selectedImage} alt="選擇的圖片" style={{maxWidth:"100%"}}/>
                </div>
                )}
                <input name="coverUrl" value={selectedImage} style={{display:"none"}}/>
            </div>
            <div className="admin_addArticle_header_btn">
                <button type="reset">Reset</button>
                <button type="submit">Next</button>
            </div>
        </form>
    )
}

export default HeaderForm;