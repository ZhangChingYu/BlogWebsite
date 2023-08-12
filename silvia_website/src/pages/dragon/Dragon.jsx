import React from "react";
import './dragon.css';
import { Navbar, CubeSection, Latest } from '../../containers/dragon';
import { Footer } from '../../containers';
import { useNavigate } from "react-router-dom";

const Dragon = () => {
    const navigator = useNavigate();
    return(
        <div className="dragon">
            <Navbar navigator={navigator}/>
            <CubeSection />
            <Latest />
            <Footer background={"var(--color-dragon-theme)"} emailColor={"#FFF0A1"} textColor={"white"} Title={"Checkout My Github"}/>
        </div>
    )
}

export default Dragon;