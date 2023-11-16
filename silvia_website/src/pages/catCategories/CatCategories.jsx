import React, { useEffect, useState } from "react";
import './catCategories.css';
import { Navbar, Header } from '../../containers/cat';
import { Footer } from '../../containers';
import { CateExtend } from '../../components/cat';
import { TopBtn } from "../../components";
import { useNavigate } from 'react-router-dom';

const CatCategories = () => {
    const navigator = useNavigate();
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/categories/1", {method:"GET"})
        .then((response) => response.json())
        .then((data) => {
            //console.log(data);
            setCategories(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    return(
        <div className="cat_categories">
            <TopBtn />
            <Navbar navigator={navigator}/>
            <Header Title={"Category."}/>
            <div className="cat_categories_body">
                <h2>Easier Way To Explore This Website</h2>
                <div className="cat_categories_content">
                    {categories.map((category, index)=>(
                        <div key={"cat_categories_row_"+index} className="cat_catgories_content_row">
                            <CateExtend name={category.name} id={category.id} intro={category.intro} color={"var(--color-cat-theme)"} to={"/life/category"}/>
                        </div>
                    ))}
                </div>
            </div>
            <Footer background={"var(--color-cat-bg)"} />
        </div>
    )
}

export default CatCategories;