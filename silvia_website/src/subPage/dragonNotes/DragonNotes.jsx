import React, { useEffect, useState } from "react";
import './dragonNotes.css';
import { Header, NoteSection } from "../../containers/dragon";
import { PageNext } from "../../components/dragon";

const DragonNotes = () => {
    const [pageCount, setPageCount] = useState(0);
    const [maxPage, setMaxPage] = useState(1);
    const [emptyState, setEmptyState] = useState(false);
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/article/category/18/0/1`, {method:"GET"})
        .then((response)=>{
            const headers = response.headers;
            const count = headers.get("total-count");
            if(count > 0) {
                setMaxPage(Math.ceil(count/8));
                setEmptyState(false);
            }
            else {
                setEmptyState(true);
            }
        })
        .catch((err)=>{console.log(err);})
    },[])
    return(
        <div className="dragon_notes">
            {!emptyState&&<PageNext maxPage={maxPage} setPageCount={setPageCount}/>}
            {emptyState===false?<NoteSection pageCount={pageCount}/>:<h1 style={{marginBottom:"10rem", fontSize:"30px", fontFamily:"var(--font-family)", color:"white"}}>Under developing, welcome to check out other topic!</h1>}
            <Header Theme={"Notes."} Timeline={"2023 - Present"} showTimeline={true} Intro={"Things about coding is that there are always new tools, concepts, frameworks, languages that emerge. So, in order to keep up with have to constantly updating our knowledge. Here are the documentary of what I have learned so far, hope some of the note could help you."}/>
            
        </div>
    )
}

export default DragonNotes;