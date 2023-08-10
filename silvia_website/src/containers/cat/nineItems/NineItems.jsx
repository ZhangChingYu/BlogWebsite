import React from "react";
import './nineItems.css';
import { ItemN } from '../../../components/cat';

const NineItems = () => {
    return(
        <div className="cat_nineItem">
            <div className="cat_nineItem_row">
                <ItemN />
                <ItemN />
                <ItemN />
            </div>
            <div className="cat_nineItem_row">
                <ItemN />
                <ItemN />
                <ItemN />
            </div>
            <div className="cat_nineItem_row">
                <ItemN />
                <ItemN />
                <ItemN />
            </div>
        </div>
    )
}

export default NineItems;