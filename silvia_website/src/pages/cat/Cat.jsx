import React from "react";
import './cat.css';
import { Navbar, Header, Category, Latest} from '../../containers/cat';
import { Footer } from '../../containers';

const Cat = () =>{
    const background = "var(--color-cat-bg)";
    return(
        <div className="cat">
            <Navbar/>
            <Header />
            <Latest Title={"Latest"}/>
            <Latest Title={"Highlights"}/>
            <Category />
            <Footer background={background}/>
        </div>
    )
}

export default Cat;