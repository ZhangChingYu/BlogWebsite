import React from "react";
import './dragonApp.css';
import { Footer } from '../../containers';
import { Header, AppSection } from '../../containers/dragon';
import { PageNext } from '../../components/dragon';

const DragonApp = () => {
    return(
        <div className="dragon_app">
            <Header Theme={"App."} Timeline={"2023 - Present"} Intro={"Some Apps I created out of personal interest. Welcome to check them out on App Store. Don’t worry, all of them are free to download."}/>
            <AppSection />
            <PageNext />
            <Footer />
        </div>
    )
}

export default DragonApp;