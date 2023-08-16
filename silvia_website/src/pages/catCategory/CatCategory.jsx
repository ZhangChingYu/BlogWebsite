import React from "react";
import './catCategory.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { Navbar, Header } from '../../containers/cat';
import { PageNext } from '../../components/cat';
import { TopBtn } from "../../components";
import { Footer } from '../../containers';
import { SearchItem } from '../../components/home';
const CatCategory = () => {
    const location = useLocation();
    const data = location.state;
    console.log(data);
    const navigator = useNavigate();
    return(
        <div className="cat_category_page">
            <TopBtn />
            <Navbar navigator={navigator}/>
            <Header Title={data.category+"."}/>
            <div className="cat_category_results">
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
            </div>
            <div className="cat_category_pagenext">
                <PageNext />
            </div>
            <Footer background={"var(--color-cat-bg)"}/>
        </div>
    )
}

export default CatCategory;