import React from "react";
import './sectionB.css';
import { PictureItem } from "../../../components/cat"; 

const SectionB = () => {
    return(
        <div className="cat_sectionB">
            <h2>How I Make It Happened</h2>
            <p>I started by designing the base flavor of the cake and the cream that I believe would match the cake. Some normal options might be plain, chocolate, coffee, or tea. So, I choose black tea as the main flavor of the cake and matched it with custard sauce to give it a more creamy taste. After deciding the main flavor, I will then decide the fillings. At this step, I need to do some research online to be sure which filling would be suitable for my cake.<br/><br/>And here’s the final result:</p>
            <div className="cat_sectionB_items">
                <PictureItem fileName={"dragon.png"} Width={"62%"} Height={"400px"} fixType={"w"} discription={"djfkldasjfkldjsalk"}/>
                <PictureItem fileName={"dragon.png"} Width={"62%"} Height={"400px"} fixType={"w"} discription={"djfkldasjfkldjsalk"}/>
            </div>
        </div>
    )
}

export default SectionB;