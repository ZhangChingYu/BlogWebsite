import React from "react";
import './catCategories.css';
import { Navbar, Header } from '../../containers/cat';
import { Footer } from '../../containers';
import { CateExtend } from '../../components/cat';
import { useNavigate } from 'react-router-dom';

const CatCategories = () => {
    const navigator = useNavigate();
    return(
        <div className="cat_categories">
            <Navbar navigator={navigator}/>
            <Header Title={"Category."}/>
            <div className="cat_categories_body">
                <h2>Easier Way To Explore This Website</h2>
                <div className="cat_categories_content">
                    <div className="cat_catgories_content_row">
                        <CateExtend name={"Daily"} color={"var(--color-cat-theme)"}/>
                        <CateExtend name={"Workout"} color={"var(--color-cat-theme)"}/>
                    </div>
                    <div className="cat_catgories_content_row">
                        <CateExtend name={"Baking"} color={"#C0696D"}/>
                        <CateExtend name={"Traveling"} color={"#C0696D"}/>
                    </div>
                    <div className="cat_catgories_content_row">
                        <CateExtend name={"Personal Tips"} color={"#C87D7F"}/>
                        <CateExtend name={"Experience"} color={"#C87D7F"}/>
                    </div>
                </div>
            </div>
            <Footer background={"var(--color-cat-bg)"} />
        </div>
    )
}

export default CatCategories;