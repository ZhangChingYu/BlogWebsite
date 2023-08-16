import React from "react";
import './home.css';
import { Navbar, GetInTouch, Theme, WhatsNew} from "../../components/home";
import { Subscribe } from '../../containers'
import { TopBtn } from '../../components';


const Home = () => {
    return(
        <div className="home">
            <TopBtn />
            <Navbar />
            <Theme />
            <WhatsNew />
            <Subscribe />
            <GetInTouch />
            <div className="home_footer">
                <p>Copyright©2023 SilviaChang.</p>
            </div>
        </div>
        
    )
}

export default Home;