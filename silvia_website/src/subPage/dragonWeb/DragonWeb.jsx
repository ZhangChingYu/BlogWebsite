import React from "react";
import "./dragonWeb.css";
import { Header, WebSection } from "../../containers/dragon";
import { PageNext  } from "../../components/dragon";

const DragonWeb = () => {
    return(
        <div className="dragon_web">
            <Header Theme={"Website."} Timeline={"2023 - Present"} showTimeline={true} Intro={"Recently, I’ve been working on my personal website. Since this is a solo project, I’d have to design and build everything by myself. It’s not going to be easy but I get to make it as I wanted. Let’s see how it turns out!"}/>
            <WebSection />
            <PageNext />
        </div>
    )
}

export default DragonWeb;