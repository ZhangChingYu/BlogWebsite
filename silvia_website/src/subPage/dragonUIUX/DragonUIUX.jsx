import React from "react";
import "./dragonUIUX.css";
import CommingSoon  from '../comingSoon/comingSoon';
import Youtube from '@u-wave/react-youtube';

const DragonUIUX = () => {
    return (
        <div className="uiux">
            <CommingSoon/>
            <div className="uiux_youtube_container">
                <Youtube width={800} height={400} autoplay={true} video="GR9lH2Fj40Q"/>
            </div>
        </div>
    )
}

export default DragonUIUX;