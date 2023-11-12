import React, { useState } from "react";
import "./sectionElement.css";

const SectionElement = ({sectionId}) => {
    const [selectedImages, setSelectedImages] = useState([]);
    // 處理文件選擇事件
    const handleFileSelect = (event) => {
        const files = event.target.files; // 獲取選擇的文件列表
        const selectedImagesArray = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onload = (e) => {
                // 在讀取完成後，將圖片數據設定為選定圖片的URL
                selectedImagesArray.push(e.target.result);
                // 如果已經處理了所有文件，則更新狀態
                if (selectedImagesArray.length === files.length) {
                    setSelectedImages(selectedImagesArray);
                }
            };
            reader.readAsDataURL(file); // 讀取文件內容
        }
    }
    return(
        <div className="admin_addArticle_section">
            <label>
                <input className="admin_addArticle_section_title" type={"text"} name={"title_"+sectionId} placeholder="Section Title" required/>
            </label>
            <label>
                <textarea className="admin_addArticle_section_intro" name={"intro_"+sectionId} id="" cols="30" rows="10" placeholder="Introduction" required/>
            </label>
            <label className="admin_addArticle_section_up">
                Add Section Pictures:
                <input className="admin_addArticle_section_upload" name={`pics_${sectionId}`} type="file" multiple={true} accept="image/*" onChange={handleFileSelect} />
            </label>
            {selectedImages.length > 0 && (
                <div className="admin_addArticle_section_pics">
                    {selectedImages.map((image, index) => (
                        <div key={sectionId +"_"+ index+"_wrapper"}>
                            <img key={sectionId +"_"+ index} src={image} alt={`selected pic ${index}`}/>
                            <input key={sectionId + "_" + index + "_input"} name={`picsUrl_${sectionId}`} value={image} style={{display:"none"}}/>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SectionElement;