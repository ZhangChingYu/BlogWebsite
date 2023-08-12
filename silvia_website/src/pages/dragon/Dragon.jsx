import React from "react";
import './dragon.css';
import { Navbar, CubeSection, Latest } from '../../containers/dragon';
import { Footer } from '../../containers';

const Dragon = () => {
    return(
        <div className="dragon">
            <Navbar />
            <CubeSection />
            <Latest />
            <Footer/>
        </div>
    )
}

export default Dragon;