import React from "react";

const Pricing = () =>
{
    return(
        <>
            <div id="pricing">
                <h2 id="priceTitle">Pricing</h2>
                <p>The following are the different services that I offer. Purchasing the service can be done on my <a>Fiverr</a>. When doing so, please provide information as to what the site will be for.
                All displaied prices are base line and are subject to increase due to the nature of the project.</p>
                <p>(Uses HTML, CSS, JavaScript, and REACT)</p>
                <div id="services">
                    <h2>Options:</h2>
                    <div className="service">
                        <h2>Basic:</h2>
                        <h3>1 to 2 Pages: <b>$25</b></h3>
                    </div>
                    <p>The basics, get one or two well crafted and designed webpages for one website.</p>

                    <div className="service">
                        <h2>Standard:</h2>
                        <h3>3 to 5 Pages: <b>$50</b></h3>
                    </div>
                    <p>The standard, get a website with up to five individual well crafted and designed pages.</p>
                    <div className="service">
                        <h2>Premium:</h2>
                        <h3>6+ Pages: <b>$90+</b></h3>
                    </div>
                    <p>Gives you the largest website option. Get 6 or more pages. Pricing will scale based on the number of pages and complexity.</p>
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
                <div id="details">
                    <h2>Details:</h2>
                    <p>Each page is allowed 4 compoents on it. I.e. different sections. Any additional requested compoents are subject to a $10 fee</p>
                    <h3>Process:</h3>
                    <p>After I recive your request with details on what you want your page to look like I will provide a mock up. Changes made at this point are free.
                        After the mock up is locked in I the website will start to be built. I will give updates as the project progresses.</p>
                        <p>Any major changes/overhauls at this point are subject an additional charge.</p>
                </div>
            </div>
        </>
    )
}

export default Pricing;