import React, { useEffect, useState } from "react";
import "./dragonWeb.css";
import { Header, WebSection } from "../../containers/dragon";
import { PageNext  } from "../../components/dragon";

const DragonWeb = () => {
    const [pageCount, setPageCount] = useState(0);
    const [maxPage, setMaxPage] = useState(1);
    const [emptyState, setEmptyState] = useState(false);
    useEffect(()=>{
        fetch("http://localhost:8080/article/category/15/0/1", {method:"GET"})
        .then((response)=>{
            const headers = response.headers;
            const count = headers.get("total-count");
            if(count > 0){
                setMaxPage(Math.ceil(count/9));
                setEmptyState(false);
            }
            else{
                setEmptyState(true);
            }
        })
        .catch((err)=>{console.log(err);})
    },[])
    return(
        <div className="dragon_web">
            <Header Theme={"Website."} Timeline={"2023 - Present"} showTimeline={true} Intro={"Recently, I’ve been working on my personal website. Since this is a solo project, I’d have to design and build everything by myself. It’s not going to be easy but I get to make it as I wanted. Let’s see how it turns out!"}/>
            {emptyState===false?<WebSection pageCount={pageCount}/>:<h1 style={{marginBottom:"10rem", fontSize:"30px", fontFamily:"var(--font-family)", color:"white"}}>Under developing, welcome to check out other topic!</h1>}
            {!emptyState&&<PageNext maxPage={maxPage} setPageCount={setPageCount}/>}
        </div>
    )
}

export default DragonWeb;