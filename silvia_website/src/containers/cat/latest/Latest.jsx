import React from "react";
import './latest.css';
import { ItemN } from '../../../components/cat';
import { Link } from "react-router-dom";

const Latest = ({ Title, PageLink }) => {
    return(
        <div className="cat_item_section">
            <div className="cat_item_section_header">
                <h2>{Title}</h2>
                <Link className="cat_item_section_link" to={PageLink} state={{title:Title}}><p>view more</p></Link>
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