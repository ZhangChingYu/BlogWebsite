import React, { useState, useEffect } from "react";
import './dragonApp.css';
import { Header, AppSection } from '../../containers/dragon';
import { PageNext } from '../../components/dragon';

const DragonApp = () => {
    const [pageCount, setPageCount] = useState(0);
    const [maxPage, setMaxPage] = useState(1);
    const [emptyState, setEmptyState] = useState(false);
    useEffect(()=>{
        fetch("http://localhost:8080/article/category/4/0/1", { method: "GET" })
        .then((response)=>{
            const headers = response.headers;
            const count = headers.get("total-count");
            if(count > 0) {
                //console.log(count);
                setMaxPage(Math.ceil(count/9));
                setEmptyState(false);
            }
            else {
                setEmptyState(true);
            }
        })
        .catch((err)=>{console.log(err);})
    },[])
    return(
        <div className="dragon_app">
            <Header Theme={"App."} Timeline={"2023 - Present"} showTimeline={true} Intro={"Some Apps I created out of personal interest. Welcome to check them out on App Store. Don’t worry, all of them are free to download."}/>
            {emptyState===false?<AppSection pageCount={pageCount}/>:<h1 style={{marginBottom:"10rem", fontSize:"30px", fontFamily:"var(--font-family)", color:"white"}}>Under developing, welcome to check out other topic!</h1>}
            {!emptyState&&<PageNext maxPage={maxPage} setPageCount={setPageCount}/>}
        </div>
    )
}

export default DragonApp;