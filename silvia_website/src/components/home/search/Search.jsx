import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './search.css';

const Search = ({ inputHandler }) => {
    const navigator = useNavigate();
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const searchHandler = () =>{
        if(showInput){
            inputHandler(inputValue);
            setInputValue("");
        }
        if(inputValue!==""){
            navigator("search", { state: { keyword:inputValue }});
        }
        setShowInput(!showInput);
    }
    return(
        <div className="search">
            <FaSearch size={25} onClick={searchHandler}/>
            <motion.div className="search_inputBox" animate={{scale:showInput?1:0, opacity:showInput?1:0}} initial={{scale: 0, opacity:1}} transition={{duration: 0.3, type: "tween"}}>
                    <input 
                    onKeyPress={(event)=>{if(event.code==="Enter"){searchHandler()}}}
                    type={"text"} 
                    ref={(element) => element?.focus?.()} 
                    value={!showInput?"":inputValue} 
                    placeholder={""} 
                    onChange={(event)=>{setInputValue(event.target.value)}}/>
            </motion.div>
        </div>
    )
}

export default Search;