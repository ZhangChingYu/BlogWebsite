import React, { useEffect, useState } from "react";
import './catCategory.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { Navbar, Header, CategoryResult } from '../../containers/cat';
import { PageNext } from '../../components/cat';
import { TopBtn } from "../../components";
import { Footer } from '../../containers';

const CatCategory = () => {
    const location = useLocation();
    const data = location.state;
    //console.log(data); 
    const navigator = useNavigate();
    const [pageCount, setPageCount] = useState(0)
    //const [dataCount, setDataCount] = useState(null);
    const [maxPage, setMaxPage] = useState(1);
    const [emptyState, setEmptyState] = useState(false);

    useEffect(()=>{
        fetch("http://localhost:8080/article/category/"+data.cateId+"/0/1", { method: "GET" })
        .then((response)=>{
            const headers = response.headers;
            const count = headers.get("total-count");
            if(count > 0){
                //setDataCount(count);
                setMaxPage(Math.ceil(count/6));
                setEmptyState(false);
            }
            else {
                setEmptyState(true);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    },[data.cateId])
    
    return(
        <div className="cat_category_page">
            <TopBtn />
            <Navbar navigator={navigator}/>
            <Header Title={data.category+"."}/>
            {emptyState?<h1 className="no_article">No article yet...</h1>
            :<CategoryResult cateId={data.cateId} pageCount={pageCount} navigator={navigator}/>}
            <div className="cat_category_pagenext">
                <PageNext maxPage={maxPage} setPageCount={setPageCount}/>
            </div>
            <Footer background={"var(--color-cat-bg)"}/>
        </div>
    )
}

export default CatCategory;