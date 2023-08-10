import React from "react";
import './cat.css';
import { Navbar, Header, Category, Latest} from '../../containers/cat';
import { Footer } from '../../containers';
import { useNavigate } from 'react-router-dom';

const Cat = () =>{
    const navigator = useNavigate();

    const background = "var(--color-cat-bg)";
    return(
        <div className="cat">
            <Navbar navigator={navigator}/>
            <Header />
            <Latest Title={"Latest"} PageLink={'/life/latest'}/>
            <Latest Title={"Highlights"} PageLink={'/life/highlight'}/>
            <Category />
            <Footer background={background}/>
        </div>
    )
}

export default Cat;