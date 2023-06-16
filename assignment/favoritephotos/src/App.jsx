import { useRoutes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import FavoritePage from './pages/FavoritePage';
import NotFoundPage from './pages/NotFoundPage';


function App() {

  let element = useRoutes([
    {
      path:'/',
      element: <HomePage />
    },
    {
      path: '/favorite',
      element: <FavoritePage />
    },
    {
      path:'*',
      element: <NotFoundPage />
    }
  ]);

  return element; // return page
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