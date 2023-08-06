import React from "react";
import './home.css';
import { Navbar, GetInTouch, SubscribeBox, Theme, WhatsNew} from "../../components";


const Home = () => {
    return(
        <div className="home">
            <Navbar />
            <Theme />
            <WhatsNew />
            <SubscribeBox />
            <GetInTouch />
            <div className="home_footer">
                <p>Copyright©2023 SilviaChang.</p>
            </div>
        </div>
        
    )
}

export default Home;