import React from "react";
import './catIntro.css';
import imgUrl from '../../../assets/cat.png';

const CatIntro = () => {
    return(
        <div className="about_cat">
            <div className="about_cat_content">
                <h2>What A Closer Look?</h2>
                <p>The next section of this website is about my personal life. As an amateur baking lover, I’d like to  share my baking results from time to time. Beside that, something new that happens in my life that I’d like to share will also be posted to the Cat Section.<br/><br/>FYI, being a cat person, I can’t resist the temptation to feature my website with some cat elements.<br/><br/>Hopefully, you can find something that interest you in my website. Have a fun tour!</p>
            </div>
            <div className="about_cat_img">
                <img src={imgUrl} alt="cat intro"/>
            </div>
        </div>
    )
}

export default CatIntro;