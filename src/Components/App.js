import React, { useEffect, useState } from 'react';
import { Link, NavLink, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';
import Pricing from './Pricing';
import Projects from './Projects';
import Contact from './Contact'
import About from './About';
import Footer from './Footer';


const App = ()=> {
    const navigate = useNavigate();

    return(
        <>  
            <div id="header">
                <h1 id="title">Tyler's Web Development</h1>
                <nav id="navBar">
                    <NavLink to= '/'> <h3 className='link'>Home</h3></NavLink>
                    <NavLink to= '/pricing'> <h3 className='link'>Pricing</h3></NavLink>
                    <NavLink to='/projects'><h3 className='link'>Projects</h3></NavLink> 
                    <NavLink to='/about'><h3 className='link'>About</h3></NavLink>
                    <NavLink to='/contact'><h3 className='link'>Contact</h3></NavLink>
                </nav>
            </div>
            <div id="main">
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/pricing' element={<Pricing/>}></Route>
                    <Route path='/projects' element={<Projects/>}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                </Routes>
            </div>
            <Footer/>
        </>
    )
}

export default App;