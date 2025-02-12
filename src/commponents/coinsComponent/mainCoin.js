import React, { useState } from "react";

import { GetCoins } from "./coinGet";
import { useEffect} from "react";
import RecCoin from "./receivingCoin";


function MainCoin()   {

    const [coins, setCoins] = useState([])
    useEffect(() =>{
        const fetchData = async() =>{
            const data = await GetCoins();
            setCoins(data.coins)
            
        }
        fetchData()
    }, []);
    console.log(coins)

       
            return(
                
                <RecCoin coins={coins}/>
            );
        
}

export default MainCoin ;