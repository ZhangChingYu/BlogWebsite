import React, {useState} from "react";
import './dragonNotes.css';
import { Header, NoteSection, NoteClip } from "../../containers/dragon";
import { PageNext } from "../../components/dragon";

const DragonNotes = () => {
    const [noteShow, setNoteShow] = useState(false);
    return(
        <div className="dragon_notes">
            <Header Theme={"Notes."} Timeline={"2023 - Present"} showTimeline={true} Intro={"Things about coding is that there are always new tools, concepts, frameworks, languages that emerge. So, in order to keep up with have to constantly updating our knowledge. Here are the documentary of what I have learned so far, hope some of the note could help you."}/>
            <NoteSection clickHandler={setNoteShow}/>
            <PageNext />
            {noteShow?<NoteClip clickHandler={setNoteShow}/>:<></>}
        </div>
    )
}

export default DragonNotes;