import React from "react";
import './styleCoin/stylecoin.css'

const RecCoin = ({coins}) => {
    return ( 
        <>
            <ul className="recCoin-container" >
                {coins.map(coin => {
                    return <li className="coin-item" key={coin.uuid}>
                    <div className="coin-item-info">
                        <img className="coin-item-logo" src={coin.iconUrl} alt={coin.name}/>
                        <p style={{color: coin.color}}>
                            {coin.name}
                        </p>
                    </div>
                    <div className="coin-item-price">
                    <p style={{color: coin.color}}>
                        {(+coin.price).toFixed(2)} USD
                    </p>
                    </div>
                    </li>
                })}
            </ul>
        </>
   );
  }
  
  export default RecCoin;