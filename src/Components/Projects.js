import React from "react";

const Projects =() =>
{
    return(
        <>
            <div id="projectTitle">
                <h2>My Projects</h2>
                <p>Take a look at the varius project that I have worked on by my self or with others.</p>
            </div>
            <div id="projects">
                <div className="LeftBox">
                    <div className="site">
                        <a href="https://pusheen-bazaar.onrender.com/" target="_blank"><img className="webPhoto" src ="/src/images/PusheenBazaarPhoto.png" alt="Pusheen Bazaar"/></a>
                    </div>
                </div>
                <div className="rightBox">
                    <div className="Blurb">
                    <h3 className="siteName">Pusheen Bazaar</h3>
                        <p className="description">Pusheen Bazaar was a colaberitive project to make a e-commerse web site. The topic and theme of said 
                            site was up to us. Our group camp up with a site that sold magical items. As for the nut and bolts of the project we had to create a database and a API to interact with it.
                            We also had to design the front end of the website so that users can, register, login, put items in a cart, and "purchase" said items.
                            Props to my team for all the hard work they did.</p>
                    </div>
                    
                </div>
                <div className="LeftBox">
                <div className="site">
                    <a href="https://merry-begonia-1fbad0.netlify.app" target="_blank"><img className="webPhoto" src="/src/images/StrangersThings.png" alt="Stranges Things"/></a>
                    </div>
                </div>
                <div className="rightBox">
                    <div className="Blurb">
                        <h3 className="siteName">Strangers Things</h3>
                        <p className="description">Strangers Things is a website built to practise handaling API integration with the front-end of a web site.
                        On a broader note the site is designed to replicate Cregslist. Giving users the ability to post items for sale as well as comment on items 
                        posted by others.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;