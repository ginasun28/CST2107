import { useState } from "react";
import { useEffect } from "react";
import FlagsTable from "./FlagsTable";


const FlagsContainer =() => {

    const [flagsData, setFlagsData] = useState([]); // defult is empty array
      
    
    useEffect(() =>{
        // call the API 
        getAllFlagsData(); 
       
    }, [])

    // get API
    const getAllFlagsData = async () => {
        const response = await fetch('https://restcountries.com/v3.1/all');
        // console.log(data, 'data');
        const data = await response.json();
        
        setFlagsData(data);
    }
    

    return (
        <div>
            <FlagsTable data={flagsData} />
        </div>
    )
}

export default FlagsContainer;