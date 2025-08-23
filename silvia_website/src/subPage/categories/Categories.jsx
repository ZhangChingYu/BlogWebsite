import React, { useEffect, useState } from "react";
import './categories.css';
import { Header } from '../../containers/dragon';
import { CateExtend } from "../../components/cat";

const Categories = () => {
    const [categoryList, setCategoryList] = useState([]);
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/categories/2`, {method: "GET"})
        .then((response)=>response.json())
        .then((data)=>{
            //console.log(data);
            setCategoryList(data);
        })
    },[])
    return(
        <div className="dragon_categories">
            <Header Theme={"Category."} showTimeline={false} Intro={"Some Apps I created out of personal interest. Welcome to check them out on App Store. Don’t worry, all of them are free to download."}/>
            <div className="dragon_categories_body">
                <h2>Easier Way To Explore This Website</h2>
                <div className="dragon_categories_content">
                    {categoryList.map((category, index)=>(
                        <div key={"dragon_categories_row_"+index} className="dragon_categories_content_row">
                            <CateExtend name={category.name} id={category.id} intro={category.intro} color={"var(--color-blue)"} to={"/work/category"}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Categories;