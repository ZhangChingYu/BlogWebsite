import React, { useState } from "react";
import "./addArticle.css";
import { AddArticleHeaderFrom, AddArticleSectionFrom, AddArticlePreview } from "./components";

const AddArticle = ({FooterHandler, state, setState, header, setHeader, sectionList, setSectionList, headerType, theme, setTheme}) => {
    const [sectionCount, setSectionCount] = useState(1);
    console.log(header);
    console.log(sectionList);
    // cover url
    const [coverUrl, setCoverUrl] = useState(null);
    
    function HeaderSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const title = formData.get("title");
        const intro = formData.get("intro");
        const cover = formData.get("cover");
        setHeader({"title":title, "intro":intro, "cover":cover, "coverUrl":coverUrl});
        setState(1);
    }

    function SectionSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        // 創建一個對象来存儲所有SectionElement的數據
        const sectionData = [];
        for(let i = 0; i < sectionCount; i ++){
            const title = formData.get(`title_${i}`);
            const intro = formData.get(`intro_${i}`);
            const pics = formData.getAll(`pics_${i}`);
            sectionData.push({title, intro, pics});
        }
        setSectionList(sectionData);
        setState(2);
        FooterHandler(true);
    }

    const ContentElement = () => {
        switch(state){
            case 0: return <AddArticleHeaderFrom SubmitHandler={HeaderSubmit} header={header} setCoverUrl={setCoverUrl}/>;
            case 1: return <AddArticleSectionFrom goBackHandler={setState} SubmitHandler={SectionSubmit} sectionCount={sectionCount} setSectionCount={setSectionCount}/>
            case 2: return <AddArticlePreview header={header} secitonList={sectionList} headerType={headerType} theme={theme} setTheme={setTheme}/>
            default: return <></>
        }
    }

    return (
        <div className="admin_addArticle">
            <div className="admin_addArticle_body">
                <ContentElement />
            </div>
        </div>
    )
}

export default AddArticle;