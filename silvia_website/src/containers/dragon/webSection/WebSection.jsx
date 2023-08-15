import React from "react";
import './webSection.css';
import { AppItem } from "../../../components/dragon";

const WebSection = () =>{
    return(
        <div className="dragon_webSection">
            <div className="dragon_webSection_row">
                <AppItem Type={true} isSoon={false} />
                <AppItem Type={true} isSoon={false} />
                <AppItem Type={true} isSoon={false} />
            </div>
            <div className="dragon_webSection_row">
                <AppItem Type={true} isSoon={false} />
                <AppItem Type={true} isSoon={false} />
                <AppItem Type={true} isSoon={false} />
            </div>
            <div className="dragon_webSection_row">
                <AppItem Type={true} isSoon={false} />
                <AppItem Type={true} isSoon={false} />
            </div>
        </div>
    )
}

export default WebSection;