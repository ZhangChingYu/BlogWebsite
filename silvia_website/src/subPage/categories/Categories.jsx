import React from "react";
import './categories.css';
import { Header } from '../../containers/dragon';
import { CateExtend } from "../../components/cat";

const Categories = () => {
    return(
        <div className="dragon_categories">
            <Header Theme={"Category."} showTimeline={false} Intro={"Some Apps I created out of personal interest. Welcome to check them out on App Store. Don’t worry, all of them are free to download."}/>
            <div className="dragon_categories_body">
                <h2>Easier Way To Explore This Website</h2>
                <div className="dragon_categories_content">
                    <div className="dragon_categories_content_row">
                        <CateExtend name={"App"} color={"var(--color-blue)"}/>
                        <CateExtend name={"Website"} color={"var(--color-blue)"}/>
                    </div>
                    <div className="dragon_categories_content_row">
                        <CateExtend name={"Note"} color={"#7987DB"}/>
                        <CateExtend name={"Java"} color={"#7987DB"}/>
                    </div>
                    <div className="dragon_categories_content_row">
                        <CateExtend name={"Javascript"} color={"#A3ADE8"}/>
                        <CateExtend name={"Python"} color={"#A3ADE8"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;