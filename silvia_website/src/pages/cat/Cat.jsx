import React, { useEffect, useState } from "react";
import './cat.css';
import { Navbar, Header, Category, Latest} from '../../containers/cat';
import { Footer } from '../../containers';
import { TopBtn } from "../../components";
import { useNavigate } from 'react-router-dom';

const Cat = () =>{
    const navigator = useNavigate();
    const [latest, setLatest] = useState([]);
    const [highlight, setHighlight] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/article/3/latest/life`, { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
            //console.log("Latest:",data);
            setLatest(data);
        })
        .catch((err)=>{
            console.log(err);
        })
        fetch(`${process.env.REACT_APP_API_URL}/article/3/highlight/life`, { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
            //console.log("Highlight:", data);
            setHighlight(data);
        })
        .catch((err)=>{
            console.log(err);
        })
        fetch(`${process.env.REACT_APP_API_URL}/categories/1`, { method: "GET" })
        .then((response)=>response.json())
        .then((data) => {
            setCategories(data);
        })
    },[])

    const background = "var(--color-cat-bg)";
    return(
        <div className="cat">
            <TopBtn />
            <Navbar navigator={navigator}/> 
            <Header Title={"My Life."}/>
            <Latest articleList={latest} Title={"Latest"} PageLink={'/life/latest'} navigator={navigator}/>
            <Latest articleList={highlight} Title={"Highlight"} PageLink={'/life/latest'} navigator={navigator}/>
            <Category categories={categories}/>
            <Footer background={background}/>
        </div>
    )
}

export default Cat;