import React, { useEffect, useState } from "react";
import './home.css';
import { Navbar, GetInTouch, Theme, WhatsNew} from "../../components/home";
import { Subscribe } from '../../containers'
import { TopBtn } from '../../components';


const Home = () => {
    const [latestArticle, setLatestArticle] = useState(null);
    
    useEffect(()=>{
        fetch("http://localhost:8080/article/latest", {method:"GET"})
        .then((response) => response.json())
        .then((data) => {
            if(latestArticle===null){
                //console.log(data)
                setLatestArticle(data);
            }
        })
        .catch((err)=>{
            console.log(err);
        });
    },[latestArticle]);

    return(
        <div className="home">
            <TopBtn />
            <Navbar />
            <Theme />
            {latestArticle!==null?<WhatsNew article={latestArticle}/>:<></>}
            <Subscribe/>
            <GetInTouch />
            <div className="home_footer">
                <p>Copyright©2023 SilviaChang.</p>
            </div>
        </div>
    )
}

export default Home;