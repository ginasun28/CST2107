import NavBar from './components/NavBar';
import PhotoContext from './context/PhotoContext'
import { useEffect, useState } from 'react';
// import NavBar from '../components/Navbar';
import FavoritePage from './pages/FavoritePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';


function App() {

  const CLIENT_SECRET = `7HMGMNCo7ui6RPwS3h8ziMWz_y4Dm3DgmcdvW7AxoYo`;
  const [photosData, setPhotosData] = useState([]);

  useEffect(() => {
    getPhotosFromSplash();
  }, []);

  const getPhotosFromSplash = async () => {
    const photoDataPromise = await fetch(
      `https://api.unsplash.com/photos/?client_id=${CLIENT_SECRET}`
    );
    const photoJsonData = await photoDataPromise.json();
    const requiredData = photoJsonData.map((data) => {
      return {
        image: data.urls.full,
        description: data.alt_description,
        isFavorite: false,
        id: data.id,
      };
    });
    setPhotosData(requiredData);
  };


  return (
    <>
      <Router>
        <NavBar />
        <PhotoContext.Provider
          value={{
            photosData,
            setPhotosData,
          }}
        >
          <Routes>
            <Route path='/' element={<HomePage />} >
            </Route>
            <Route path="/favorite" element={< FavoritePage />} >
            </Route>
          </Routes>
        </PhotoContext.Provider>
      </Router>
      
    </>

  );

}

export default App


// function App() {

//   const CLIENT_SECRET = `7HMGMNCo7ui6RPwS3h8ziMWz_y4Dm3DgmcdvW7AxoYo`;
//   // const SECRECT_KEY = 'sH8-bnulJfhIlwJurJJW52SNbPgZXeQrYuZEFgHBHDQ';
//   // store and call data 
//   const [photosData, setPhotosData] = useState([]);

//   useEffect(() => { 
//     getPhotosFromSplash();
//   }, []) 

//   // console.log(photosData);

//   // get data from API
//   const getPhotosFromSplash = async ()  => {
//     // API for Unsplash : https://api.unsplash.com/photos/?client_id=${YOURKEY}
//     const photoData = await fetch(`https://api.unsplash.com/photos/?client_id=${CLIENT_SECRET}`); // call API
//     const photoJsonData = await photoData.json() // convert data to JSON
//     console.log(photoJsonData, 'json');
//     setPhotosData(photoJsonData); // pass data directly to PhotoContext, save the local statue
    
//   }

//   return (
//     <>
//       <PhotoContext.Provider value={photosData}> {/* pass data here */}
//           <PhotoList />
//       </PhotoContext.Provider>
//     </>
//   )
// }

// export default App