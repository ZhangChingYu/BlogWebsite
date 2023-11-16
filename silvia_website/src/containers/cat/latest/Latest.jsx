import React from "react";
import './latest.css';
import { ItemN } from '../../../components/cat';
import { Link } from "react-router-dom";

const Latest = ({ Title, PageLink, articleList, navigator }) => {
    return(
        <div className="cat_item_section">
            <div className="cat_item_section_header">
                <h2>{Title}</h2>
                <Link className="cat_item_section_link" to={PageLink} state={{title:Title}}><p>view more</p></Link>
            </div>
            {articleList.length>=3?
            <div className="cat_item_content">
                <ItemN title={articleList[0].title} date={articleList[0].date} imgPath={articleList[0].coverPicUrl} postId={articleList[0].id} category={articleList[0].categoryList} navigator={navigator}/>
                <ItemN title={articleList[1].title} date={articleList[1].date} imgPath={articleList[1].coverPicUrl} postId={articleList[1].id} category={articleList[1].categoryList} navigator={navigator}/>
                <ItemN title={articleList[2].title} date={articleList[2].date} imgPath={articleList[2].coverPicUrl} postId={articleList[2].id} category={articleList[2].categoryList} navigator={navigator}/>
            </div>:<div className="cat_item_content">{articleList.map((article, index)=>(
                <ItemN title={article.title} date={article.date} imgPath={article.coverPicUrl} postId={article.id} category={article.categoryList} key={"cat_item_"+article.title+"_"+index}/>
            ))}</div>
            }
            
        </div>
    )
}

export default Latest;