import React from "react";
import './dragonApp.css';
import { Footer } from '../../containers';
import { Header, AppSection } from '../../containers/dragon';
import { PageNext } from '../../components/dragon';

const DragonApp = () => {
    return(
        <div className="dragon_app">
            <Header />
            <AppSection />
            <PageNext />
            <Footer />
        </div>
    )
}

export default DragonApp;