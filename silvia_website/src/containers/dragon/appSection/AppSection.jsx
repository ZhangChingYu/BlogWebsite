import React, {useState, useEffect} from "react";
import './appSection.css';
import { AppItem } from "../../../components/dragon";

const AppSection = ({pageCount}) => {
    const [articleList, setArticleList] = useState([]);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/article/category/4/${pageCount*9}/9`, {method:"GET"})
        .then((response)=>response.json())
        .then((data)=>{
            setArticleList(data);
            console.log(data);
            //console.log(data);
        })
        .catch((err)=>{console.log(err);})
    }, [pageCount])

    return(
        <div className="dragon_appSection">
            {articleList!==undefined&&<div className="dragon_appSection_col">
                <AppItem Type={false} isSoon={false} article={articleList.length>0?articleList[0]:undefined}/>
                <AppItem Type={false} isSoon={true} article={articleList.length>3?articleList[3]:undefined}/>
                <AppItem Type={true} isSoon={false} article={articleList.length>6?articleList[6]:undefined}/>
            </div>}
            {articleList!==undefined&&<div className="dragon_appSection_col">
                <AppItem Type={true} isSoon={false} article={articleList.length>1?articleList[1]:undefined}/>
                <AppItem Type={false} isSoon={false} article={articleList.length>4?articleList[4]:undefined}/>
                <AppItem Type={false} isSoon={true} article={articleList.length>7?articleList[7]:undefined}/>
            </div>}
            {articleList!==undefined&&<div className="dragon_appSection_col">
                <AppItem Type={true} isSoon={true} article={articleList.length>2?articleList[2]:undefined}/>
                <AppItem Type={false} isSoon={false} article={articleList.length>5?articleList[5]:undefined}/>
                <AppItem Type={false} isSoon={false} article={articleList.length>8?articleList[8]:undefined}/>
            </div>}
        </div>
    )
}

export default AppSection;