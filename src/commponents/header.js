
import './styleheader.css'
import React from "react";
import {Link, Routes, Route, } from 'react-router-dom'
import { useState } from 'react';

import logo from "../assets/logo.svg";
import icon_gamburger from '../assets/hamburger_menu_icon.svg'

import {Home} from '../pages/Home';
import {About} from '../pages/CoinComp';
import {Contacts} from '../pages/Contacts';


function Header () {
    const [isOpen, setOpen] = useState();
  return ( 
    <>

        <div className='container-header'>
            
            <nav className='burger-nav'>     
                    <img
                        src={logo}
                    height="50"
                    width={50}
                    className="img_header"
                    alt="logo"
                    />           
                <div className={`wrapper-link ${isOpen ? "active" : ""}`}>
                    
                    <Link to='/'>Погода</Link>
                    <Link to='/my-app/src/pages/Abouts.js'>Список крипты</Link>
                    <Link to='/my-app/src/pages/Contacts.js'>Курс валют</Link>                   
                </div>
            </nav>
            <button  className='header-burger-butt' onClick={()=> setOpen(!isOpen)}>
           
                <div className='icon_but'>
                <img
                        src={icon_gamburger}
                    
                    
                    className="img_header"
                    alt="logo"
                    />  
                </div>
            </button>
        </div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/my-app/src/pages/Abouts.js' element={<About/>} />
                <Route path='/my-app/src/pages/Contacts.js' element={<Contacts/>} />
            </Routes>
            
        
    </>

 );
}
 
export default Header;