import React from "react";

const Pricing = () =>
{
    return(
        <>
            <h2>Pricing</h2>
            <p>The following are the different services that I offer. Purchasing the service can be done on my <a>Fiverr</a>. When doing so, please provide information as to what the site will be for.
            All displaied prices are base line and are subject to increase due to the nature of the project.</p>
            <div id="services">
                <div className="service">
                    <h2>Front End Only</h2>
                    <h2>$90+</h2>
                    <ul>
                        <li>Have customised, fully designed, and styled front end website. Cost subject to complexity of the project</li>
                        <li>Uses HTML, CSS, JavaScript, and REACT</li>
                    </ul>
                    
                </div>
                <div className="service">
                    <h2>Back End Only</h2>
                    <h2>$80+</h2>
                    <ul>
                        <li>Have a fully created database and API to access it from. Cost subject to complexity of the project</li>
                        <li>Uses Express and Postgresql</li>
                    </ul>
                </div>
                <div className="service">
                    <h2>Front and Back End</h2> 
                    <h2>$160+</h2>
                    <ul>
                        <li>Have a customised, fully designed, and styled front end.</li>
                        <li> Have a fully created database and API to access it from. Cost subject to complexity of the project</li>
                        <li>Uses HTML, CSS, JavaScript, REACT, Express, and Postgresql</li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Pricing;