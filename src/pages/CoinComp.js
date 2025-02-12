
import React from "react";
import './stylePages/style.css'
import MainCoin from "../commponents/coinsComponent/mainCoin";


const About = () => {
  return ( 
   
    <div className='wraper'>
        
        <div  className="main-text">
        Список криптовалют 
        </div>
        <MainCoin/>
    </div>
    
    
 );
}
 
export  {About};