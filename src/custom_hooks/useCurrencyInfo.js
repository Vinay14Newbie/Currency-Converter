import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    
    useEffect(() => {

        // the api given below is pretty interesting, when we give 'inr' in place of currency we can see all the conversion rate of inr -> any currency
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((response) => response.json())  //implicit return
        .then((response) => setData(response[currency]))
    }, [currency])
    return data
}

export default useCurrencyInfo;