import React, { useEffect, useState } from "react";
import './catLatest.css';
import { Navbar, Header, NineItems} from '../../containers/cat';
import { PageNext } from '../../components/cat';
import { Footer } from '../../containers';
import { TopBtn } from "../../components";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import imgUrl from '../../assets/cakecover.JPG';

const CatLatest =() => {
    const location = useLocation();
    const navigator = useNavigate();
    const title = location.state.title;
    const [pageCount, setPageCount] = useState(0);
    const [maxPage, setMaxPage] = useState(1);
    const [emptyState, setEmptyState] = useState(false);
    const [firstArticle, setFirstArticle] = useState();

    useEffect(()=>{
        fetch( `${process.env.REACT_APP_API_URL}/article/${title.toLowerCase()}/1/0/1`, {method: "GET"})
        .then((response)=>{
            const headers = response.headers;
            const count = headers.get("total-count");
            if(count > 0){
                setMaxPage(Math.ceil(count/9));
                setEmptyState(false);
            }
            else {
                setEmptyState(true);
            }
            return response.json();
        })
        .then((data)=>{
            setFirstArticle(data[0]);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[title])

    if(title === "Latest"){
        return(
            <div className="cat_latest">
                <TopBtn />
                <Navbar navigator={navigator}/>
                <Header Title={"What's New In My Life."}/>
                {emptyState?<h1 className="no_article">No article yet...</h1>:
                <div style={{width:"100%"}}>
                    <div className="cat_latest_header">
                        <div className="cat_latest_header_content">
                            <div className="cat_latest_header_content_" style={{width:"100%"}}>
                                {firstArticle===undefined?<h2></h2>:<h2>{JSON.parse(`"${firstArticle.title}"`)}</h2>}
                                {firstArticle===undefined?<p></p>:<p>{JSON.parse(`"${firstArticle.intro}"`)}</p>}
                            </div>
                            <div className="cat_latest_header_link">
                                <div></div>
                                {firstArticle===undefined?<></>:<Link to="/life/article" state={{id:firstArticle.id}}><p>view more</p></Link>}  
                            </div>
                        </div>
                        <div className="cat_latest_header_img">
                            {firstArticle===undefined?<img src={imgUrl} alt=""/>:<img src={firstArticle.coverPicUrl.replace("media/image", "http://localhost:8080/images")} alt=""/>} 
                        </div>
                    </div>
                    <div className="cat_latest_item_section">
                        <NineItems type={"latest"} pageCount={pageCount} navigator={navigator}/>
                    </div>
                    <div className="cat_latest_page">
                        <PageNext maxPage={maxPage} setPageCount={setPageCount}/>
                    </div>
                </div>}
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
                            {firstArticle===undefined?<h2></h2>:<h2>{JSON.parse(`"${firstArticle.title}"`)}</h2>}
                            {firstArticle===undefined?<p></p>:<p>{JSON.parse(`"${firstArticle.intro}"`)}</p>}
                        </div>
                        <div className="cat_latest_header_link">
                            <div></div>
                            {firstArticle===undefined?<></>:<Link to="/life/article" state={{id:firstArticle.id}}><p>view more</p></Link>}  
                        </div>
                    </div>
                    <div className="cat_latest_header_img">
                        {firstArticle===undefined?<img src={imgUrl} alt=""/>:<img src={firstArticle.coverPicUrl.replace("media/image", "http://localhost:8080/images")} alt=""/>} 
                    </div>
                </div>
                <div className="cat_latest_item_section">
                    <NineItems type={"highlight"} pageCount={pageCount} navigator={navigator}/>
                </div>
                <div className="cat_latest_page">
                    <PageNext maxPage={maxPage} setPageCount={setPageCount}/>
                </div>
                <Footer background={"var(--color-cat-bg)"}/>
            </div>
        )
    }
    
}

export default CatLatest;