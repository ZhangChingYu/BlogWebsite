import React, {useEffect} from "react";
import './topBtn.css';
import { AiOutlineArrowUp } from 'react-icons/ai'

const TopBtn = () => {
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    },[])
    return(
        <div className="top_btn" onClick={()=>{ window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}>
            <AiOutlineArrowUp size={24} color={"white"} className="top_btn_arrow"/>
        </div>
    )
}

export default TopBtn;