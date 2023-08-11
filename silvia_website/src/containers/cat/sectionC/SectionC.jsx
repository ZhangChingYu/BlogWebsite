import React from "react";
import './sectionC.css';
import imgUrl from '../../../assets/catbg.jpeg';
import { PictureItem } from "../../../components/cat";

const SectionC = () => {
    return(
        <div className="cat_sectionC">
            <div className="cat_sectionC_header">
                <div className="cat_sectionC_header_content">
                    <h2>How I Make It Happened</h2>
                    <p>I started by designing the base flavor of the cake and the cream that I believe would match the cake. Some normal options might be plain, chocolate, coffee, or tea. So, I choose black tea as the main flavor of the cake and matched it with custard sauce to give it a more creamy taste. After deciding the main flavor, I will then decide the fillings. At this step, I need to do some research online to be sure which filling would be suitable for my cake.<br/><br/>And here’s the final result:</p>
                </div>
                <div className="cat_sectionC_cover">
                    <img src={imgUrl} alt=""/>
                </div>
            </div>
            <div className="cat_sectionC_items">
                <PictureItem fileName={'cat.png'} fixType={"h"} Width={"90%"} Height={"300px"} discription={""}/>
                <PictureItem fileName={'cat.png'} fixType={"h"} Width={"90%"} Height={"300px"} discription={""}/>
            </div>
            <div className="cat_sectionC_items">
                <PictureItem fileName={'cat.png'} fixType={"h"} Width={"90%"} Height={"300px"} discription={""}/>
                <PictureItem fileName={'cat.png'} fixType={"h"} Width={"90%"} Height={"300px"} discription={""}/>
            </div>
        </div>
    )
}

export default SectionC;