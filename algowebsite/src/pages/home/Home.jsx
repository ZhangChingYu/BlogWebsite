import React from "react";
import "./home.css";
import Logo from "../../assets/Logo.jpg";
import { CopyRight } from "../../components";
import { Items } from "../../components/home";

var dData = [{en:"Array", zn:"列隊"}, {en:"Linked List", zn:"鏈表"}, {en:"Stacks", zn:"堆棧"}, {en:"Queues", zn:"佇列"}, {en:"Heaps", zn:"堆"}, {en:"Heaps", zn:"堆"}, {en:"Heaps", zn:"堆"}];
var aData = [{en:"Array", zn:"列隊"}, {en:"Linked List", zn:"鏈表"}, {en:"Stacks", zn:"堆棧"}, {en:"Queues", zn:"佇列"}, {en:"Heaps", zn:"堆"}, {en:"Heaps", zn:"堆"}, {en:"Heaps", zn:"堆"}];


const Home = () => {
    

    return(
        <div className="home">
            <div className="home_content">
                <div className="home_header">
                    <img src={Logo} alt="logo" className="home_logo"/>
                </div>
                <div className="home_body">
                    <div className="home_section" style={{marginBottom:"40px"}}>
                        <h1>Data Structures</h1>
                        <Items data={dData}/>
                    </div>
                    <div className="home_section" style={{marginBottom:"80px"}}>
                        <h1>Algorithms</h1>
                        <Items data={aData}/>
                    </div>
                </div>
            </div>
            <CopyRight />
        </div>
    )
}

export default Home;