import { useState } from 'react'
import './App.css'
import Header from '../components/Header/Header'
import CardInfo from '../components/CardInfo/CardInfo'
import data from '../assignmentData.json'

function App() {
  
  // console.log(data, 'card data'); // check the data in console
  
  const [cardData, setCardData] = useState(data);
  return (
    <div className='App'>
      <Header />
      <CardInfo data={cardData} />

    </div>
  )
}

export default App
