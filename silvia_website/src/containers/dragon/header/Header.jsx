import React, {useState} from "react";
import './header.css';

const Header = ({Theme, Timeline, Intro, showTimeline}) => {
    return(
        <div className="dragon_header">
            <h2>{Theme}</h2>
            {showTimeline?<div className="dragon_header_timeline">
                <h4>Timeline</h4>
                <p className="dragon_header_timeline_p">{Timeline}</p>
            </div>:<></>}
            <p>{Intro}</p>
        </div>
    )
}

export default Header;