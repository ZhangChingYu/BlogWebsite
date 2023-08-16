import React, {useState} from "react";
import './search.css';
import { Navbar, TopBtn } from '../../components';
import { SearchItem } from '../../components/home';
import { Footer } from '../../containers';
import { useNavigate, useLocation } from "react-router-dom"; 
import { PageNext } from '../../components/cat';

const Search = () => {
    const navigator = useNavigate();
    const location = useLocation();
    const data = location.state;
    const [input, setInput] = useState("");
    const [keyword, setKeyword] = useState(data.keyword);
    const searchHandler = () => {
        if(input===" "){
            setKeyword("");
            console.log("e")
        }
        else {
            setKeyword(input);
        }
    }
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
            <div className="home_search_result">
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
            </div>
            <div style={{marginBottom:"8rem"}}>
                <PageNext/>
            </div>
            <Footer />
        </div>
    )
}

export default Search;