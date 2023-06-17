/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import PhotoCard from "../components/PhotoCard";
import PhotoContext from "../context/PhotoContext";
import '../components/styles.css'
import { Container, Typography } from '@mui/material';

const FavoritePage = () => {
    const { photosData } = useContext(PhotoContext);
    // console.log(photosData, 'Data');
    const [favPhotos, setFavPhotos] = useState([]);

    useEffect(() => {
        const filteredPhotos = photosData.filter((p) => {
            return p.isFavorite === true;
        })
        setFavPhotos(filteredPhotos)
    }, [photosData]);

    console.log(favPhotos);

    return (
        <>
            <Container maxWidth="550">
                <Typography variant="h2" component="h2" className="favorite-title">
                    My Favorite
                </Typography>
                <Typography component="div" className="favorite-container">
                    {favPhotos.map((data) => {
                        // eslint-disable-next-line react/jsx-key
                        return <PhotoCard data={data} />;
                        // return <img src={data.image}/>
                    })}
                </Typography>
            </Container>
            {/* 
            <div className="photo-container">

            </div> */}
        </>



    )
}

export default FavoritePage;