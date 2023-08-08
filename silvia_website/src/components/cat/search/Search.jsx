import React, {useState} from "react";
import './search.css';
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const Search = ({ inputHandler }) =>{

    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const searchHandler = () =>{
        if(showInput){
            inputHandler(inputValue);
            setInputValue("");
        }
        setShowInput(!showInput);
    }

    return(
        <div className="cat_search">
            <FaSearch size={25} onClick={searchHandler}/>
            <motion.div className="cat_search_inputBox" animate={{scale:showInput?1:0, opacity:showInput?1:0}} initial={{scale: 0, opacity:1}} transition={{duration: 0.3, type: "tween"}}>
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