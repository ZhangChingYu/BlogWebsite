import React from "react";
import './noteSection.css';
import { NotesItem } from "../../../components/dragon";
import imgUrl from '../../../assets/scale.png';

const NoteSection = () => {
    return(
        <div className="dragon_noteSection">
            <NotesItem Title={"How to build a React.js website"} Intro={"Countless website is build on React.js. Join me to learn how to do it."} Img={imgUrl} />
            <NotesItem Title={"How to build a React.js website"} Intro={"Countless website is build on React.js. Join me to learn how to do it."} Img={imgUrl} />
            <NotesItem Title={"How to build a React.js website"} Intro={"Countless website is build on React.js. Join me to learn how to do it."} Img={imgUrl} />
            <NotesItem Title={"How to build a React.js website"} Intro={"Countless website is build on React.js. Join me to learn how to do it."} Img={imgUrl} />
            <NotesItem Title={"How to build a React.js website"} Intro={"Countless website is build on React.js. Join me to learn how to do it."} Img={imgUrl} />
            <NotesItem Title={"How to build a React.js website"} Intro={"Countless website is build on React.js. Join me to learn how to do it."} Img={imgUrl} />
            <NotesItem Title={"How to build a React.js website"} Intro={"Countless website is build on React.js. Join me to learn how to do it."} Img={imgUrl} />
            <NotesItem Title={"How to build a React.js website"} Intro={"Countless website is build on React.js. Join me to learn how to do it."} Img={imgUrl} />
        </div>
    )
}

export default NoteSection;