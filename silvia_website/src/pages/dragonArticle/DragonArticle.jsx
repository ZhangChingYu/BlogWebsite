import React, { useEffect, useState } from "react";
import './dragonArticle.css';
import { Navbar, ArticleHeader, ArticleSection } from '../../containers/dragon';
import { Footer } from '../../containers';
import { TopBtn } from '../../components';
import { useLocation, useNavigate } from "react-router-dom";


const DragonArticle = () => {
    const navigator = useNavigate();
    const location = useLocation();
    const id = location.state.id;
    const [article, setArticle ] = useState(null);
    useEffect(()=>{
        fetch("http://localhost:8080/article/"+id)
        .then((response)=>response.json())
        .then((data)=>{
            setArticle(data);
        })
        .catch((err)=>{console.log(err)});
    },[id])
    
    if(article!==null){
        return(
            <div className="dragon_article">
                <TopBtn />
                <Navbar navigator={navigator} isHome={false}/>
                <ArticleHeader 
                    Title={article.title} 
                    Date={new Date(article.date).toLocaleDateString('en-TW', {year: 'numeric',month: '2-digit',day: '2-digit',timeZone: 'Asia/Taipei'})} 
                    Img={article.coverImgUrl.replace("media/image","http://localhost:8080/images")} 
                    Content={article.intro}
                />
                {article.sectionList.map((section,index)=>(
                    <ArticleSection key={"dragon_article_section_"+index} section={section}/>
                ))}
                <Footer background={"var(--color-dragon-theme)"} textColor={"white"} emailColor={"#FFF0A1"} Title={"Check Out My Github"}/>
            </div>
        )
    }
}

export default DragonArticle;