import React, {useEffect, useState} from "react";
import './search.css';
import { Navbar, TopBtn } from '../../components';
import { Footer, SearchResult } from '../../containers';
import { useNavigate, useLocation } from "react-router-dom"; 
import { PageNext } from '../../components/cat';

const Search = () => {
    const navigator = useNavigate();
    const location = useLocation();
    const data = location.state;
    const [input, setInput] = useState("");
    const [keyword, setKeyword] = useState(data.keyword);
    const [pageCount, setPageCount] = useState(0);
    const [maxPage, setMaxPage] = useState(1);
    const [emptyState, setEmptyState] = useState(false);
    const searchHandler = () => {
        if(input===" "){
            setKeyword("");
        }
        else {
            setKeyword(input);
        }
    }
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/article/search?keyword=${keyword}&start=0&size=1`, {method:"GET"})
        .then((response)=>{
            const headers = response.headers;
            const count = headers.get("total-count");
            if(count > 0){
                setMaxPage(Math.ceil(count/7));
                setEmptyState(false);
            }
            else {
                setEmptyState(true);
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[keyword])
    return(
        <div className="home_search">
            <TopBtn />
            <Navbar navigator={navigator}/>
            <div className="home_search_box">
                <input 
                onKeyPress={(event)=>{if(event.code==="Enter"){searchHandler()}}}
                type={"text"} 
                ref={(element) => element?.focus?.()} 
                placeholder={""} 
                onChange={(event)=>{setInput(event.target.value)}}/>
                <div className="home_search_btn" onClick={searchHandler}>
                    <p>Search</p>
                </div>
            </div>
            <div className="home_search_key">
                <h2 style={{visibility:keyword===""?"hidden":"visible"}}>The search result of: </h2>
                <p style={{visibility:keyword===""?"hidden":"visible"}}>{keyword}</p>
            </div>
            {emptyState?<h1 className="no_article">No article yet...</h1>:<SearchResult keyword={keyword} pageCount={pageCount} navigator={navigator}/>}
            
            <div style={{marginBottom:"8rem"}}>
                <PageNext setPageCount={setPageCount} maxPage={maxPage}/>
            </div>
            <Footer />
        </div>
    )
}

export default Search;