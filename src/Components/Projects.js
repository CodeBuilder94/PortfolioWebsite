import React from "react";

const Projects =() =>
{
    return(
        <>
            <h3>My Projects</h3>
            <p>Take a look at the varius project that I have worked on by my self or with others.</p>
            <div id="timeLine">
            <a href="https://pusheen-bazaar.onrender.com/"><img className="webPhoto" src ="/src/images/PusheenBazaarPhoto.png" alt="Pusheen Bazaar"/></a>
            <div className="devider">
                <div className="circle"></div>
                <div className="line"></div>
            </div>
            <p className="description">Pusheen Bazaar was a colaberitive project to make a e-commerse web site. The topic and theme of said 
            site was up to us. Our group camp up with a site that sold magical items. As for the nut and bolts of the project we had to create a database and a API to interact with it.
            We also had to design the front end of the website so that users can, register, login, put items in a cart, and "purchase" said items.
            Props to my team for all the hard work they did.</p>
            </div>
        </>
    )
}

export default Projects;