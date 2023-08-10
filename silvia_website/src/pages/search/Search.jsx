import React from "react";
import './search.css';
import { Navbar } from '../../components';
import { SearchItem } from '../../components/home';
import { Footer } from '../../containers';
import { useNavigate } from "react-router-dom"; 
import { PageNext } from '../../components/cat';

const Search = ({keyword}) => {
    const navigator = useNavigate();
    return(
        <div className="home_search">
            <Navbar navigator={navigator}/>
            <div className="home_search_box">
                <input placeholder=""/>
                <div className="home_search_btn">
                    <p>Search</p>
                </div>
            </div>
            <div className="home_search_key">
                <h2 style={{visibility:keyword!==undefined?"hidden":"unset"}}>The search result of: </h2>
                <p style={{visibility:keyword!==undefined?"hidden":"unset"}}>Key word</p>
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