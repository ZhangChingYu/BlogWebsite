import React from "react";
import './catLatest.css';
import { Navbar, Header, NineItems} from '../../containers/cat';
import { PageNext } from '../../components/cat';
import { Footer } from '../../containers';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import imgUrl from '../../assets/cakecover.JPG';

const CatLatest =() => {
    const location = useLocation();
    const navigator = useNavigate();
    const data = location.state;
    //console.log(data.title);
    if(data.title === "Latest"){
        return(
            <div className="cat_latest">
                <Navbar navigator={navigator}/>
                <Header Title={"What's New In My Life."}/>
                <div className="cat_latest_header">
                    <div className="cat_latest_header_content">
                        <div className="cat_latest_header_content_">
                            <h2>Celebrating Father’s Day by Baking a Special Cake.</h2>
                            <p>Whenever there is something to celebrate the baking energy inside me starts erupting. The picture was took 4 years ago, I still remember I took a lot of effort on that cake because I want my father to have a Father’s Day he would never forget. <br/><br/>In August, 2023, the upcoming Father's Day has many kids in a bind, especially those who are having trouble choosing a gift. Yet, nothing is more heart warming than a self-made gift, so why don’t make it tastier?</p>
                        </div>
                        <div className="cat_latest_header_link">
                            <div></div>
                            <Link to="/life/article"><p>view more</p></Link>
                        </div>
                    </div>
                    <div className="cat_latest_header_img">
                        <img src={imgUrl} alt=""/>
                    </div>
                </div>
                <div className="cat_latest_item_section">
                    <NineItems />
                </div>
                <div className="cat_latest_page">
                    <PageNext />
                </div>
                <Footer background={"var(--color-cat-bg)"}/>
            </div>
        )
    }
    else {
        return(
            <div className="cat_latest">
                <Navbar navigator={navigator}/>
                <Header Title={"Life Is Full Of Sparks."}/>
                <div className="cat_latest_header">
                    <div className="cat_latest_header_content">
                        <div className="cat_latest_header_content_">
                            <h2>Celebrating Father’s Day by Baking a Special Cake.</h2>
                            <p>Whenever there is something to celebrate the baking energy inside me starts erupting. The picture was took 4 years ago, I still remember I took a lot of effort on that cake because I want my father to have a Father’s Day he would never forget. <br/><br/>In August, 2023, the upcoming Father's Day has many kids in a bind, especially those who are having trouble choosing a gift. Yet, nothing is more heart warming than a self-made gift, so why don’t make it tastier?</p>
                        </div>
                        <div className="cat_latest_header_link">
                            <div></div>
                            <Link><p>view more</p></Link>
                        </div>
                    </div>
                    <div className="cat_latest_header_img">
                        <img src={imgUrl} alt=""/>
                    </div>
                </div>
                <div className="cat_latest_item_section">
                    <NineItems />
                </div>
                <div className="cat_latest_page">
                    <PageNext />
                </div>
                <Footer background={"var(--color-cat-bg)"}/>
            </div>
        )
    }
    
}

export default CatLatest;