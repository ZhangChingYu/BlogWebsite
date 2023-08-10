import React from "react";
import './catLatest.css';
import { Navbar, Header } from '../../containers/cat';
import { ItemN, PageNext } from '../../components/cat';
import { Footer } from '../../containers';
import { Link, useNavigate } from 'react-router-dom';

const CatLatest =() => {
    const navigator = useNavigate();
    return(
        <div className="cat_latest">
            <Navbar navigator={navigator}/>
            <Header Title={"What's New In My Life"}/>
            <div className="cat_latest_header">
                <div className="cat_latest_header_content">
                    <h2>Celebrating Father’s Day by Baking a Special Cake.</h2>
                    <p>Whenever there is something to celebrate the baking energy inside me starts erupting. The picture was took 4 years ago, I still remember I took a lot of effort on that cake because I want my father to have a Father’s Day he would never forget. <br/><br/>In August, 2023, the upcoming Father's Day has many kids in a bind, especially those who are having trouble choosing a gift. Yet, nothing is more heart warming than a self-made gift, so why don’t make it tastier?</p>
                    <Link to=""><p>view more</p></Link>
                </div>
                <div className="cat_latest_header_img">
                    <img src="" alt=""/>
                </div>
            </div>
            <div className="cat_latest_item_section">
                <div className="cat_latest_items">
                    <ItemN />
                    <ItemN />
                    <ItemN />
                </div>
                <div className="cat_latest_items">
                    <ItemN />
                    <ItemN />
                    <ItemN />
                </div>
                <div className="cat_latest_items">
                    <ItemN />
                    <ItemN />
                    <ItemN />
                </div>
            </div>
            <div className="cat_latest_page">
                <PageNext />
            </div>
            <Footer background={"var(--color-cat-bg)"}/>
        </div>
    )
}

export default CatLatest;