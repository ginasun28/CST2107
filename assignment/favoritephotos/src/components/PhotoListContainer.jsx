import PhotoContext from '../context/PhotoContext'
import PhotoList from '../components/PhotoList'
import { useEffect, useState } from 'react';


const PhotoListContainer = () => {

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
    <PhotoContext.Provider
      value={{
        photosData,
        setPhotosData,
      }}
    >
      <PhotoList />
    </PhotoContext.Provider>
  );
    
}

export default PhotoListContainer;