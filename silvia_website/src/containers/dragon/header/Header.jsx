import React from "react";
import './header.css';

const Header = ({Theme, Timeline, Intro}) => {
    return(
        <div className="dragon_header">
            <h2>App.</h2>
            <div className="dragon_header_timeline">
                <h4>Timeline</h4>
                <p className="dragon_header_timeline_p">2023 - Present</p>
            </div>
            <p>Some Apps I created out of personal interest. Welcome to check them out on App Store. Don’t worry, all of them are free to download.</p>
        </div>
    )
}

export default Header;