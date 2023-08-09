import React from "react";
import './category.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { CateItem } from '../../../components/cat';

const Category = () => {
    return(
        <div className="cat_category">
            <div className="cat_category_items">
                <CateItem name={"Backing"}/>
                <CateItem name={"Workout"}/>
                <CateItem name={"Daily"}/>
                <CateItem name={"Traveling"}/>
                <CateItem name={"Backing"}/>
                <CateItem name={"Workout"}/>
                <CateItem name={"Daily"}/>
                <CateItem name={"Traveling"}/>
            </div>
            <button type="button" className="cate_category_more">
                <AiOutlineArrowRight size={30} color="white"/>
            </button>
        </div>
    )
}

export default Category;