import React from "react";
import "./addArticle.css";
import { AddArticleHeaderFrom, AddArticleSectionFrom, AddArticlePreview, AddArticleCategory } from "./components";

const AddArticle = ({FooterHandler, state, setState, header, setHeader, sectionList, setSectionList, headerType, sectionType, theme, setTheme, select, setSelect}) => {
    //console.log("Header:\n",header);
    //console.log("Section List:\n",sectionList);
    
    function HeaderSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const title = formData.get("title");
        const intro = formData.get("intro");
        const cover = formData.get("cover");
        const coverUrl = formData.get("coverUrl");
        setHeader({"title":title, "intro":intro, "cover":cover, "coverUrl":coverUrl});
        setState(1);
    }

    // post article
    const SubmitPictureHandler = () => {
        uploadPicture(header.cover, "cover");     // upload cover picture
        uploadSectionPics();                      // upload section pictures
    }

    function SubmitArticleHandler (categories) {
        fetch(`${process.env.REACT_APP_API_URL}/article`, { method:"POST",
        body: PackArticleData(categories)
        })
        .then((response)=> response)
        .then((data) => {
            console.log(data.ok);
        })
        .catch((err)=>{
            alert(err);
        })
        setState(0);
    }

    // pack article data
    function PackArticleData(categories){
        var article = JSON.stringify({
            "title": header.title,
            "intro": header.intro,
            "headerType": headerType==="A"?1:headerType==="B"?2:3,
            "category": categories,
            "sectionList": PackSectionData()
        })
        
        function PackSectionData() {
            var sectionData = [];
            for(var i = 0; i < sectionList.length; i++){
                var data = {
                    "sectionType": sectionType[i]==="A"?1:sectionType[i]==="B"?2:3,
                    "title": sectionList[i].title,
                    "intro": sectionList[i].intro
                }
                sectionData.push(data);
            }
            return sectionData;
        }
        return article;
    }

    // upload cover picture
    const uploadPicture = (picture, path) => {
        const reader = new FileReader();
        reader.onload = function() {
            fetch(`${process.env.REACT_APP_API_URL}/images/upload/${path}`, {
                method:"POST",
                body: picture
            })
            .then((response) => response)
            .then((data) => {
                console.log(data.ok, path);
            })
            .catch((e) => {
                console.log(path+" picture upload failed, please try again.", e);
                uploadPicture(picture, path);
            });
        }
        reader.readAsArrayBuffer(picture);
    }
    // upload section picture
    const uploadSectionPics = () => {
        for(var i = 0; i<sectionList.length; i++){
            var picArray = sectionList[i].pics;
            // upload each picture
            for(var j = 0; j<picArray.length; j ++){
                var path = "section/"+(i+1)+"/"+(j+1);
                uploadPicture(picArray[j], path);
            }
        }
    }

    function SectionSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        // 創建一個對象来存儲所有SectionElement的數據
        const sectionCount = formData.get("sectionCount");
        const sectionData = [];
        for(let i = 0; i < sectionCount; i ++){
            const title = formData.get(`title_${i}`);
            const intro = formData.get(`intro_${i}`);
            const pics = formData.getAll(`pics_${i}`);
            const picsUrl = formData.getAll(`picsUrl_${i}`);
            sectionData.push({title, intro, pics, picsUrl});
        }
        setSectionList(sectionData);
        setState(2);
        FooterHandler(true);
    }

    function TypeSubmit(){
        setState(3);
        FooterHandler(false);
    }

    const ContentElement = () => {
        switch(state){
            case 0: return <AddArticleHeaderFrom SubmitHandler={HeaderSubmit} header={header}/>;
            case 1: return <AddArticleSectionFrom goBackHandler={setState} SubmitHandler={SectionSubmit}/>;
            case 2: return (
                <AddArticlePreview header={header} secitonList={sectionList} headerType={headerType} 
                sectionType={sectionType} theme={theme} setTheme={setTheme} select={select} setSelect={setSelect} 
                submitHandler={TypeSubmit}/>
            )
            case 3: return <AddArticleCategory submitPictureHandler={SubmitPictureHandler} submitArticleHandler={SubmitArticleHandler} theme={theme} />
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