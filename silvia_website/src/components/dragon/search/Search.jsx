import React, {useState} from "react";
import './search.css';
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Search = ({inputHandler}) => {
    const navigator = useNavigate();
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const searchHandler = () =>{
        if(showInput){
            inputHandler(inputValue);
            setInputValue("");
        }
        setShowInput(!showInput);
        if(inputValue!==""){
            navigator("/search", { state: { keyword:inputValue } });
        }
    }
    return(
        <div className="dragon_search">
            <FaSearch size={25} onClick={searchHandler} color={"#9B6DB4"}/>
            <motion.div className="dragon_search_inputBox" animate={{scale:showInput?1:0, opacity:showInput?1:0}} initial={{scale: 0, opacity: 0}} transition={{duration:0.3, type:"tween"}}>
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