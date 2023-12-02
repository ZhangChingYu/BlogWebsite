import React, { useState, useRef, useEffect, useCallback } from "react";
import "./home.css";
import { useDispatch } from "react-redux";
import { ArticleSection, CategorySection, AddArticleSection, TokenExpireDialog } from "../../adminCompo";
import { AddArticleFooter } from "../../adminCompo/addArticle/components";
import { login, logout } from "../../actions/authActions";
import store from '../../store';

const Home = () => {
    const dispatch = useDispatch();
    const [refreshTimerId, setRefreshTimerId] = useState(null);
    const [isValid, setIsValid] = useState(true);

    const refreshToken = useCallback(() => {
        // 獲取新的Token
        console.log(store.getState().auth.refresh);
        fetch("http://localhost:8080/admin/token/refresh", {
            method:"POST",
            headers:{
                "Authorization":store.getState().auth.refresh
            }
        })
        .then((response)=>{
            const headers = response.headers;
            const token = headers.get("Authorization");
            const refreshToken = headers.get("Refresh-Token");
            const expiration = headers.get("Access-Token-Expiration");
            dispatch(login(token.replace("Bearer ", ''), refreshToken, expiration));
        })
        .catch((err)=>{console.log(err);})
    },[dispatch])

    const startTokenRefreshTimer = useCallback(() =>{
        // 計算離過期前5分鐘還要多少毫秒
        const time = new Date(parseInt(store.getState().auth.expire-300000,10));
        const timeUntilExpiration = time - new Date();
        // 設置定時器，在過期前觸發更新
        const refreshTimer = setTimeout(()=>{
            // 調用刷新 Token 的方法，更新 Token
            refreshToken();
        }, timeUntilExpiration)
        // 將定時器 ID 存在 state 中以便後續刪除
        setRefreshTimerId(refreshTimer);
    }, [refreshToken]);
    
    useEffect(()=>{
        // 在 Home 頁面渲染後開始計時
        startTokenRefreshTimer();
    },[startTokenRefreshTimer]);

    useEffect(()=>{        
        // 在組件卸載時清除定時器
        return()=>{
            clearTimeout(refreshTimerId);
        }
    },[refreshTimerId])

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
    const [SType, setSType] = useState(["B","B","B","B","B","B","B","B","B","B"]);  // maximun 10 sections
    const headerRef = useRef(null);
    const [theme, setTheme] = useState(true);  // true: life, false: work
    const [selectState, setSelectState] = useState(0);

    if(headerRef.current){
        if(bodyHeight<1){
            const SCREEN_HEIGHT = window.innerHeight;
            const element = headerRef.current;
            const height = element.getBoundingClientRect().height;
            setBodyHeight(SCREEN_HEIGHT-height);
        }
    }

    // set add article section's type
    const AddArticleSetSectionTypeHandler = (value)=>{
        if(selectState !==1 && selectState !== 0 && selectState < 12){
            const temp = SType;
            temp[selectState-2] = value;
            setSType(temp);
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
                    sectionType={SType}
                    select={selectState}
                    setSelect={setSelectState}
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

    const barStateChange = (state) => {
        fetch("http://localhost:8080/admin/checkAuth",{
            method:"POST",
            headers:{
                "Authorization":store.getState().auth.token
            }
        })
        .then((response)=>{
            const headers = response.headers;
            const validState = headers.get("Authorization");
            if(validState==="yes"){
                setBarState(state);
            }else{
                setIsValid(false);
            }
        })
        .catch((err)=>{console.log(err);})
    }

    return (
        <div className="admin_home" >
            {!isValid&&<TokenExpireDialog />}
            <div className="admin_home_header" ref={headerRef}>
                <p>Welcome back, Silvia Chang!</p>
                <p>Have fun creating new content~</p>
            </div>
            <div className="admin_home_body" style={{height:bodyHeight}}>
                <div className="admin_home_content">
                    <BodyElement />
                </div>
                <div className="admin_home_sidebar">
                    <div className="admin_home_bar" style={barState==="my article"?{boxShadow:"inset 0px 0px 4px rgba(0, 0, 0, 0.25)"}:{}} onClick={()=>{barStateChange("my article")}}>
                        <p>My Article</p>
                    </div>
                    <div className="admin_home_bar" style={barState==="draft edit"?{boxShadow:"inset 0px 0px 4px rgba(0, 0, 0, 0.25)"}:{}} onClick={()=>{barStateChange("draft edit")}}>
                        <p>Draft Edit</p>
                    </div>
                    <div className="admin_home_bar" style={barState==="add new article"?{boxShadow:"inset 0px 0px 4px rgba(0, 0, 0, 0.25)"}:{}} onClick={()=>{barStateChange("add new article")}}>
                        <p>Add New Article</p>
                    </div>
                    <div className="admin_home_bar" style={barState==="category manage"?{boxShadow:"inset 0px 0px 4px rgba(0, 0, 0, 0.25)"}:{}} onClick={()=>{barStateChange("category manage")}}>
                        <p>Category Manage</p>
                    </div>
                    <div className="admin_home_bar" style={barState==="subscriber"?{boxShadow:"inset 0px 0px 4px rgba(0, 0, 0, 0.25)"}:{}} onClick={()=>{barStateChange("subscriber")}}>
                        <p>Subscirber</p>
                    </div>
                    <div className="admin_home_bar" style={barState==="message"?{boxShadow:"inset 0px 0px 4px rgba(0, 0, 0, 0.25)"}:{}} onClick={()=>{setBarState("message")}}>
                        <p>Messages</p>
                    </div>
                    <div className="admin_home_bar" style={barState==="comments"?{boxShadow:"inset 0px 0px 4px rgba(0, 0, 0, 0.25)"}:{}} onClick={()=>{setBarState("comments")}}>
                        <p>Comments</p>
                    </div>
                    <div className="admin_home_bar" onClick={()=>{dispatch(logout())}}>
                        <p style={{color:"var(--color-cat-theme)"}}>LOGOUT</p>
                    </div>
                    {footerShow?<AddArticleFooter setHeaderType={setHType} setSectionType={AddArticleSetSectionTypeHandler} theme={theme}/>:<></>}
                </div>
            </div>
        </div>
    )
}

export default Home;