
import React from "react";
import './stylePages/style.css'
import CurrencyMain from "../commponents/CurrencyComponent/CurrencyMain";


const Contacts = () => {
  return ( 
   
    <div className='wrapper'>
        
        <div  className="main-text">
        Курс валют
        </div>
        <CurrencyMain/>
    </div>
    
    
 );
}
 
export {Contacts};