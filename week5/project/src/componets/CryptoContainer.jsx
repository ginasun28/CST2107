import { useEffect, useState } from "react";


const CryptoContainer = () => {

    const [cryptoData, setCryptoData] = useState([]);

    // UseEffect : run function it is render
    // This will be called only once 
    useEffect(() => {
        //this is the place where we will call our API
        getCryptoData();
    }, []);

    const getCryptoData = async () => {
        const data = await fetch('https://api.coingecko.com/api/v3/coins/markets/?vs_currency=cad');
        // console.log(data, 'data');
        const convertedJSONData = await data.json();
        setCryptoData(convertedJSONData);
        // console.log(convertedJSONData, 'data');
    }

    return(
        <div>
            {
                cryptoData.map((cryptoInfo) => {
                    // eslint-disable-next-line react/jsx-key
                    return <div>{cryptoInfo.name}</div>
                })
            }
        </div>
    )

}

export default CryptoContainer;