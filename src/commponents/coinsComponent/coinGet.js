import axios from "axios";



// const APIcoin= import.meta.env.COIN_API
// const coinKey = import.meta.env.COIN_KEY

const APIcoin ="https://api.coinranking.com/v2" 
const coinKey ="coinranking6660acd5ca997ab59eeae0069597eb7b32335e0dfaf6f019" 

export const GetCoins = async () => {

    const options = {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': coinKey,
        },
      };
      
      try {
        const response = await axios.get(APIcoin +'/coins', options)
        return response.data.data
      } catch (error) {
        console.log(error)
      }
}

export default GetCoins;