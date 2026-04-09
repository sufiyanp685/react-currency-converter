import { useEffect,useState } from "react";




function useCurrencyInfo(currency){

    const [data,setData]=useState({})
    

    useEffect(()=>{
        fetchdata()
    async function fetchdata() {

        let response = await fetch( `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)

        let currencyInfo = await response.json();

        console.log(currencyInfo || {})

        setData(currencyInfo[currency])
        
    }

},[currency])


return data




}



export default useCurrencyInfo