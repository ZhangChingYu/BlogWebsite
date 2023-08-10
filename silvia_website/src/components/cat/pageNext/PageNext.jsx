import React from "react";
import './pageNext.css';
import { GrNext, GrPrevious} from 'react-icons/gr';

const PageNext = () => {
    return(
        <div className="cat_page_next">
            <GrPrevious size={25}/>
            <GrNext size={25}/>
        </div>
    )
}

export default PageNext;