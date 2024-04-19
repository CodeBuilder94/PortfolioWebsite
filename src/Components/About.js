import React from "react";

const About =() =>
{
    return(
        <>
        <h3>Who is Tyler?</h3>
        <img alt="Photo of Tyler"/>
        <p>Hey, I'm Tyler. Thanks for stopping by my little corner of the internet.</p>
        <p>My goal is to provide an afordable web development servise to as many people as possible. Sometimes 
            you need something more flexible and robust than what a Wordpress can give you. That is what I aim to deliver.
        </p>
        <h3>Education</h3>
        <div className="edu">
            <img alt="University of Texas at Dallas Logo."/>
            <p>I have earned a bachelor's of Arts degree from the University of Texas at Dallas for Arts and Technology.</p>
        </div>
        <div id="eagle">
            <img alt="Eagle Scout Badge"/>
            <p>I am proud to say that I have earned the rank of Eagle Scout and treasure my time in Boy Scouts.</p>
        </div>
        </>
    )
}

export default About;