// import {useState} from 'react';
// import Country from './components/Country';

import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import HotelInfo from "./components/HotelInfo/HotelInfo";
import data from './constant.json'

export default function App() {
  // const buttonStyles={
  //   backgroundColor:'brown',
  //   padding:'8px 12px',
  //   border:'none',
  //   color:'white'}

  // const[count,setCount]=useState(10);
  // const increment =()=>{
  //   // count++; // we don't want to mutate state directly
  //   // setCount(count + 1); // first way
  //   setCount((prevSate)=>prevSate+1); // i personally prefer
  //   console.log(count);

  // }
  // const decrement =()=>{
  //   // count--; // we don't want to mutate state directly
  //   setCount(count-1);
  // }
  // return (
  //  <div className="App">
  //   <button onClick={increment} style={buttonStyles}>Increment</button>
  //   <span style={{padding:'20px'}}>{count}</span>
  //   <button onClick={decrement}style={buttonStyles}>Decrement</button>
  //  </div>
  // );

  const [hotelData, setHotelData] = useState(data);
  return (
    // <div>
    //   <Country cityName='Vancouver' image="https://www.theflagstore.ca/store/wp-content/uploads/caflag.jpg" title="Canada"/>
    //   <Country cityName='Los Angeles' image="https://images.pexels.com/photos/4751421/pexels-photo-4751421.jpeg?cs=srgb&dl=pexels-brett-sayles-4751421.jpg&fm=jpg" title="USA"/>
    // </div>
    <div className='App'>
      <Header />
      <Banner />
      <HotelInfo data={hotelData}/>
    </div>
   
  )
}
