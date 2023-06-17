/* eslint-disable react/prop-types */
import { useContext } from 'react';
import PhotoContext from '../context/PhotoContext';
import { useNavigate } from 'react-router-dom';
import { Card, Box, Grid, CardMedia, CardActions, Button } from '@mui/material';

const PhotoCard = ({ data }) => {
  const { setPhotosData, photosData } = useContext(PhotoContext);

  const navigate = useNavigate();

  const handleAddFav = () => {
    const photosListAfterFav = photosData.map((photoObject) => {
      if (photoObject.id === data.id) {
        photoObject.isFavorite = !photoObject.isFavorite;
      }
      return photoObject;
    });
    setPhotosData(photosListAfterFav);
  };

  if (data.isFavorite) {
    navigate('/favorite', { state: { favoritePhoto: data } });
  }

  return (
    <>

      <Box sx={{ flexGrow: 1, margin: '40px', marginLeft: '85px', align: 'center'}}>
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 2, md: 2 }}>
              <Grid item xs={2} sm={2} md={3}>
                <Card sx={{ maxWidth: 300, boxShadow: 'rgba(0, 0, 0, 0.24) 10px 3px 8px;', border: 'solid 2px #78909C' }} >
                  <CardMedia
                    component="img"
                    height="180"
                    image={data.image}
                    alt={data.description}
                    sx={{ border: 'solid 1px #E0E0E0', width: '300px', objectFit: 'cover' }}
                  />
                  <CardActions>
                    <Button onClick={handleAddFav} className='btn' sx={{ color:'#FF5722', left: data.isFavorite? '75px' : '90px', ':hover':{ bgcolor: data.isFavorite ? '#FFA000' : '#FF5722', color: data.isFavorite? '#FFF3E0':'#FBE9E7' }}}>
                      {data.isFavorite ? `Remove Favorite` : `Add Favorite`}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
        </Grid>
      </Box>
      {/* <div
        style={{
          background: data.isFavorite ? `red` : `#fff`,
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
          padding: '2px',
        }}
      >
        <img style={{ width: "200px", height: "150px", objectFit: 'cover' }} src={data.image} />
        <p>{data.description}</p>
        <button onClick={handleAddFav}>
          {data.isFavorite ? `Remove From Fav` : `Add to Fav`}
        </button>
      </div> */}
    </>


  );
};

export default PhotoCard;