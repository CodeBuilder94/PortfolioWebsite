import React from "react";
import Carousel from "./Carousel";

const Home=()=>
{
    return(
        <>
            <div id="home">
                <h1>Web Development</h1>
                <p>Welcome, if you are looking for hiring someone for a web development project then you've come to the right place.</p>
                <p>I offer web sites created with HTML, CSS, JavaScript REACT, EXPRESS, and Postgresql.</p>
                <p>If you already know what you would like to have made check out my fiverr.</p>
                <Carousel/>
            </div>
        </>
    )
}

export default Home;