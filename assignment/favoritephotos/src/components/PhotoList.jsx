import { useContext } from 'react';
import PhotoContext from '../context/PhotoContext';
import PhotoCard from './PhotoCard';
import './styles.css';

const PhotoList = () => {
  const { photosData } = useContext(PhotoContext);

  return (
    <div className="photo-container">
      {photosData.map((data) => {
        // eslint-disable-next-line react/jsx-key
        return <PhotoCard data={data} />;
      })}
    </div>
  );
};

export default PhotoList;