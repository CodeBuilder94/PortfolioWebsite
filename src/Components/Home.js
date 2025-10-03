import React from "react";
import Carousel from "./Carousel";

const Home=(props)=>
{
    const {darkMode} = props;

    return(
        <>
            <div id="home">
                <h1>Web Development</h1>
                <p>Welcome, if you are looking for hiring someone for a web development project then you've come to the right place.</p>
                <p>I offer web sites created with HTML, CSS, JavaScript, and REACT. </p> {/*EXPRESS, and Postgresql.*/}
                <Carousel darkMode={darkMode}/>
                <p>Take a look around and see if what I have to offer.</p>
                <p>If you already know what you would like to have made check out my <b>fiverr</b>.</p>
            </div>
        </>
    )
}

export default Home;