import React from "react";
import './category.css';
//import { AiOutlineArrowRight } from 'react-icons/ai';
import { CateItem } from '../../../components/cat';

const Category = ({categories}) => {
    return(
        <div className="cat_category">
            <div className="cat_category_items">
                {categories.map((category, index)=>(
                    <CateItem key={"cat_category_items_"+index} name={category.name} id={category.id}/>
                ))}
            </div>
            {
                /** <button type="button" className="cate_category_more">
                <AiOutlineArrowRight size={30} color="white"/>
            </button> */
            }
           
        </div>
    )
}

export default Category;