import React from "react";
import './latest.css';
import { ItemN } from '../../../components/cat';

const Latest = ({ Title }) => {
    return(
        <div className="cat_item_section">
            <div className="cat_item_section_header">
                <h2>{Title}</h2>
                <p>view more</p>
            </div>
            <div className="cat_item_content">
                <ItemN />
                <ItemN />
                <ItemN />
            </div>
        </div>
    )
}

export default Latest;