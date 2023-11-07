import React from "react";
import "./section.css";
import SectionElement from "./sectionElement/SectionElement";

const Section = ({goBackHandler, SubmitHandler, sectionCount, setSectionCount}) => {

    // 增加一個 SectionElement 組件
    const addSection = () => {
        setSectionCount(sectionCount + 1);
    };

    // 減少一個 SectionElement 組件
    const removeSection = () => {
        if (sectionCount > 1) {
            setSectionCount(sectionCount - 1);
        }
    };

    return (
        <form className="admin_addArticle_sec" onSubmit={SubmitHandler} style={{width:"100%"}}>
            <h1>Edit Your Section</h1>
            <div className="admin_addArticle_section_w">
                {Array.from({length:sectionCount}, (_, index) => (
                    <SectionElement key={index+"_"} sectionId={index}/>
                ))}
                <div className="admin_addArticle_section_addBtn" onClick={addSection}>+</div>
                {sectionCount>1?<div className="admin_addArticle_section_removeBtn" onClick={removeSection}><div></div></div>:<></>}
                <div className="admin_addArticle_header_btn">
                    <button type="button" onClick={()=>{goBackHandler(0)}}>Back</button>
                    <button type="submit">Next</button>
                </div>
            </div>
        </form>
    )
}

export default Section;