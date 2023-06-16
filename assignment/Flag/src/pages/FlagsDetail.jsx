import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Grid, Typography, Button } from '@mui/material';
import { Image } from 'mui-image'
import '../componets/FlagsDetail.css'


const FlagsDetail = () => {
    const { countryName } = useParams(); // fecth address name
    console.log(countryName);

    const [countryData, setCountryData] = useState([]);

    useEffect(() => {
        fecthCountryData();
    }, [countryName]); // set intial value

    const fecthCountryData = async () => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const data = await response.json();
        console.log(data);
        setCountryData(data);
    }
    return (
        <>
            <Container maxWidth="md" justify="center" >
                <Typography sx={{ fontSize: '35px', margin: '20px', padding: '40px 10px 10px',fontFamily: 'Oswald', color: '#616161' }}>{countryData[0]?.name.common}</Typography>
                <Grid container spacing={2} sx={{ boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px;', height: 380}}>
                    <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image src={countryData[0]?.flags?.png} width={300} height={300} sx={{ marginLeft: 'auto', marginRight: 'auto', paddingBottom: '20px', paddingLeft: '20px', paddingRight: '20px' }} />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={{ fontSize: '25px', margin: '10px 20px', padding: '40px 10px 10px', fontFamily: 'Oswald', color: '#607D8B' }}>Capital: {countryData[0]?.capital}</Typography>
                        <Typography sx={{ fontSize: '20px', margin: '-10px 50px', padding: '10px', fontFamily: 'Oswald', color: '#283593' }}>Population: {countryData[0]?.population}</Typography>
                        <Typography align='justify' sx={{ fontSize: '15px', margin: '0px 50px', padding: '10px', width: 400, fontFamily: 'Oswald', color: '#4E342E' }}>Introduction:<br />{countryData[0]?.flags?.alt}</Typography>
                        <Typography sx={{margin: '-10px', padding: '10px 10px 10px', position: 'relative', left: '320px' }}><Button href={countryData[0]?.maps?.googleMaps} sx={{textTransform: 'none', color: '#0000FF', ':hover': {bgcolor: "transparent", color: '#FF8F00'}, fontFamily: 'Mulish', fontWeight: 600, fontSize: '18px' }}>Google Map</Button></Typography>
                    </Grid>

                </Grid>
                <Grid item align="center">
                    <Button href={`/`} sx={{
                        bgcolor: '#BBDEFB', color: '#536DFE', fontFamily: 'Kanit', fontWeight: '400', fontSize: '20px', marginTop: "50px",
                        ":hover": { bgcolor: "#B2EBF2", color: "#01579B" }
                    }} >Go Back
                    </Button>
                </Grid>

            </Container>
        </>
    )
}

export default FlagsDetail;
