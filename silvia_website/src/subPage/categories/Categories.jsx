import React from "react";
import './categories.css';
import { Header } from '../../containers/dragon';
import { CateExtend } from "../../components/cat";

const Categories = () => {
    return(
        <div className="dragon_categories">
            <Header Theme={"Category."} showTimeline={false} Intro={"Some Apps I created out of personal interest. Welcome to check them out on App Store. Don’t worry, all of them are free to download."}/>
            <div className="dragon_categories_content">
                <h2>Easier Way To Explore This Website</h2>
                
            </div>
        </div>
    )
}

export default Categories;