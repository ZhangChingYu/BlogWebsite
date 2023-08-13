import React from "react";
import './appSection.css';
import { AppItem } from "../../../components/dragon";

const AppSection = () => {
    return(
        <div className="dragon_appSection">
            <div className="dragon_appSection_col">
                <AppItem Type={true} isSoon={true}/>
                <AppItem Type={false} isSoon={false}/>
                <AppItem Type={false} isSoon={false}/>
            </div>
            <div className="dragon_appSection_col">
                <AppItem Type={false} isSoon={false}/>
                <AppItem Type={true} isSoon={false}/>
                <AppItem Type={false} isSoon={true}/>
            </div>
            <div className="dragon_appSection_col">
                <AppItem Type={false} isSoon={false}/>
                <AppItem Type={false} isSoon={true}/>
                <AppItem Type={true} isSoon={false}/>
            </div>
        </div>
    )
}

export default AppSection;