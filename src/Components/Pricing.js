import React from "react";

const Pricing = () =>
{
    return(
        <>
            <div id="pricing">
                <h2 id="priceTitle">Pricing</h2>
                <p>The following are the different services that I offer. Purchasing the service can be done on my <a>Fiverr</a>. When doing so, please provide information as to what the site will be for.
                All displaied prices are base line and are subject to increase due to the nature of the project.</p>
                <p>Uses HTML, CSS, JavaScript, and REACT</p>
                <div id="services">
                    <div className="service">
                        <h2>1 to 2 Pages</h2>
                        <h2 className="price">$25</h2>  
                    </div>
                    <div className="service">
                        <h2>3 to 5 Pages</h2>
                        <h2 className="price">$50</h2>  
                    </div>
                    <div className="service">
                        <h2>6+ Pages</h2>
                        <h2 className="price">$90</h2>  
                    </div>
                   { /*<div className="service">
                        <h2>Back End Only</h2>
                        <h2 className="price">$80+</h2>
                        <ul>
                            <li>Have a fully created database and API to access it from. Cost subject to complexity of the project</li>
                            <li>Uses Express and Postgresql</li>
                        </ul>
                    </div>*/}
                    {/*<div className="service">
                        <h2>Front and Back End</h2> 
                        <h2 className="price">$160+</h2>
                        <ul>
                            <li>Have a customised, fully designed, and styled front end.</li>
                            <li> Have a fully created database and API to access it from. Cost subject to complexity of the project</li>
                            <li>Uses HTML, CSS, JavaScript, REACT, Express, and Postgresql</li>
                        </ul>
                    </div>*/}
                </div>
            </div>
        </>
    )
}

export default Pricing;