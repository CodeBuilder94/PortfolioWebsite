import React, { useEffect, useState } from 'react';
import { Link, NavLink, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';


const App = ()=> {
    const navigate = useNavigate();

    return(
        <>
            <div id="header">
                <h1 id="title">Tyler's Web Development</h1>
                <nav id="navBar">
                   <NavLink to= '/'> <h3 className='link'>Home</h3></NavLink>
                    <h3 className='link'>Pricing</h3>
                    <h3 className='link'>Projects</h3>
                    <h3 className='link'>About</h3>
                    <h3 className='link'>Contact</h3>
                </nav>
            </div>
            <div id="main">
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                </Routes>
            </div>
        </>
    )
}

export default App;