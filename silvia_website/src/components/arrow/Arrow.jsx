import React from "react";
import './arrow.css';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const Arrow = ({PagePath, color}) => {
    return(
        <motion.div animate={{x:[0, 10, -4, 6, 0]}} transition={{type:"tween", duration:1, delay:0.4}}>
        <Link className="arrow">
            <motion.div className="arrow_upper_line" animate={{}} style={{background:color}}>

            </motion.div>
            <motion.div className="arrow_middle_line" style={{background:color}}>

            </motion.div>
            <motion.div className="arrow_bottom_line" style={{background:color}}>

            </motion.div>
        </Link>
        </motion.div>
    )
}

export default Arrow;