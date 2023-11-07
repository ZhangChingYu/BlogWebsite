import React, { useState, useRef } from "react";
import "./home.css";
import { ArticleSection, CategorySection, AddArticleSection } from "../../adminCompo";
import { AddArticleFooter } from "../../adminCompo/addArticle/components";

const Home = () => {
    // home element state
    const [barState, setBarState] = useState("my article");
    const [bodyHeight, setBodyHeight] = useState(null);
    // footer 
    const [footerShow, setFooterShow] = useState(false);
    // add article state
    const [addState, setAddState] = useState(0);
    const [header, setHeader] = useState({});
    const [sectionList, setSectionList] = useState([]);
    const [HType, setHType] = useState("A");
    const [FType, setFType] = useState("A");
    const headerRef = useRef(null);
    const [theme, setTheme] = useState(true);  // true: life, false: work

    if(headerRef.current){
        if(bodyHeight<1){
            const SCREEN_HEIGHT = window.innerHeight;
            const element = headerRef.current;
            const height = element.getBoundingClientRect().height;
            setBodyHeight(SCREEN_HEIGHT-height);
        }
    }

    const BodyElement = () => {
        switch(barState){
            case "my article":
                return (
                    <ArticleSection />
                )
            case "draft edit":
                return (
                    <div>draft edit</div>
                )
            case "add new article":
                return (
                    <AddArticleSection 
                    FooterHandler={setFooterShow} 
                    state={addState} setState={setAddState} 
                    header={header} setHeader={setHeader} 
                    sectionList={sectionList} setSectionList={setSectionList}
                    headerType={HType}
                    theme={theme} setTheme={setTheme}/>
                )
            case "category manage":
                return (
                    <CategorySection />
                )
            case "subscriber":
                return (
                    <div>subscriber</div>
                )
            case "message":
                return (
                    <div>message</div>
                )
            case "comments":
                return (
                    <div>comments</div>
                )
            default:return;
        }
    }

    return (
        <div className="admin_home" >
            <div className="admin_home_header" ref={headerRef}>
                <p>Welcome back, Silvia Chang!</p>
                <p>Have fun creating new content~</p>
            </div>
            <div className="admin_home_body" style={{height:bodyHeight}}>
                <div className="admin_home_content">
                    <BodyElement />
                </div>
                <div className="admin_home_sidebar">
                    <div className="admin_home_bar" style={barState==="my article"?{boxShadow:"inset 0px 0px 4px rgba(0, 0, 0, 0.25)"}:{}} onClick={()=>{setBarState("my article")}}>
                        <p>My Article</p>
                    </div>
                    <div className="admin_home_bar" style={barState==="draft edit"?{boxShadow:"inset 0px 0px 4px rgba(0, 0, 0, 0.25)"}:{}} onClick={()=>{setBarState("draft edit")}}>
                        <p>Draft Edit</p>
                    </div>
                    <div className="admin_home_bar" style={barState==="add new article"?{boxShadow:"inset 0px 0px 4px rgba(0, 0, 0, 0.25)"}:{}} onClick={()=>{setBarState("add new article")}}>
                        <p>Add New Article</p>
                    </div>
                    <div className="admin_home_bar" style={barState==="category manage"?{boxShadow:"inset 0px 0px 4px rgba(0, 0, 0, 0.25)"}:{}} onClick={()=>{setBarState("category manage")}}>
                        <p>Category Manage</p>
                    </div>
                    <div className="admin_home_bar" style={barState==="subscriber"?{boxShadow:"inset 0px 0px 4px rgba(0, 0, 0, 0.25)"}:{}} onClick={()=>{setBarState("subscriber")}}>
                        <p>Subscirber</p>
                    </div>
                    <div className="admin_home_bar" style={barState==="message"?{boxShadow:"inset 0px 0px 4px rgba(0, 0, 0, 0.25)"}:{}} onClick={()=>{setBarState("message")}}>
                        <p>Messages</p>
                    </div>
                    <div className="admin_home_bar" style={barState==="comments"?{boxShadow:"inset 0px 0px 4px rgba(0, 0, 0, 0.25)"}:{}} onClick={()=>{setBarState("comments")}}>
                        <p>Comments</p>
                    </div>
                    {footerShow?<AddArticleFooter setHeaderType={setHType} setSectionType={setFType} theme={theme}/>:<></>}
                </div>
            </div>
        </div>
    )
}

export default Home;