import React from "react";
import './cat.css';
import { Navbar, Header, Category, Latest} from '../../containers/cat';
import { Footer } from '../../containers';
import { TopBtn } from "../../components";
import { useNavigate } from 'react-router-dom';

const Cat = () =>{
    const navigator = useNavigate();

    const background = "var(--color-cat-bg)";
    return(
        <div className="cat">
            <TopBtn />
            <Navbar navigator={navigator}/> 
            <Header Title={"My Life."}/>
            <Latest Title={"Latest"} PageLink={'/life/latest'}/>
            <Latest Title={"Highlights"} PageLink={'/life/latest'}/>
            <Category />
            <Footer background={background}/>
        </div>
    )
}

export default Cat;