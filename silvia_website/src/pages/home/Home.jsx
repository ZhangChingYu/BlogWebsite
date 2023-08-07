import React from "react";
import './home.css';
import { Navbar, GetInTouch, Theme, WhatsNew} from "../../components";
import { Subscribe } from '../../containers'


const Home = () => {
    return(
        <div className="home">
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