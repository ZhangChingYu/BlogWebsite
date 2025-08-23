import React, { useEffect, useState } from "react";
import "./dragonCategory.css";
import { useLocation, useNavigate } from "react-router-dom";
import { TopBtn } from "../../components";
import { PageNext } from "../../components/dragon";
import { Footer } from "../../containers";
import { CategoryResult } from "../../containers/cat";
import { Header, Navbar } from "../../containers/dragon";


const DragonCategory = () => {
    const location = useLocation();
    const data = location.state;
    const navigator = useNavigate();
    const [pageCount, setPageCount] = useState(0);
    const [maxPage, setMaxPage] = useState(1);
    const [emptyState, setEmptyState] = useState(false);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/article/category/${data.cateId}/0/1`, {method:"GET"})
        .then((response)=>{
            const headers = response.headers;
            const count = headers.get("total-count");
            if(count > 0){
                setMaxPage(Math.ceil(count/6));
                setEmptyState(false);
            }else{
                setEmptyState(true);
            }
        })
    }, [data.cateId])

    return(
        <div className="dragon_categroy_page">
            <TopBtn/>
            <Navbar navigator={navigator} isHome={false}/>
            <div style={{marginBottom:"8rem"}}></div>
            <Header Theme={data.category+"."} Timeline={"2023 - Present"} showTimeline={!emptyState}/>
            {emptyState?<h1 style={{marginBottom:"10rem", fontSize:"30px", textAlign:"center", alignSelf:"center", fontFamily:"var(--font-family)", color:"white"}}>Under developing, welcome to check out other topic!</h1>
            :<CategoryResult cateId={data.cateId} pageCount={pageCount} navigator={navigator}/>}
            {!emptyState&&<div className="dragon_category_pagenext">
                <PageNext maxPage={maxPage} setPageCount={setPageCount}/>
            </div>}
            <Footer background={"var(--color-dragon-theme)"} emailColor={"#FFF0A1"} textColor={"white"} Title={"Checkout My Github"}/>
        </div>
    )
}

export default DragonCategory;