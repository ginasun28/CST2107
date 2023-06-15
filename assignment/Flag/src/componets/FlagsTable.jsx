import { Card, Box, Grid, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
// import { Link } from 'react-router-dom';
import '../componets/FlagsTable.css';

// eslint-disable-next-line react/prop-types
export default function FlagsTable({ data }) {
    console.log(data[0], "FlagsTable")

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div" sx={{
                    fontFamily: 'Oswald', fontSize: '40px', textTransform: 'uppercase', color: '#1A237E'
                }}> The Flags
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {data.map((country) => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <Grid item xs={2} sm={5} md={3}>

                                <Card sx={{ maxWidth: 300, boxShadow: 'rgba(0, 0, 0, 0.24) 10px 3px 8px;' }} >
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        image={country.flags.png}
                                        alt={country.flags.alt}
                                        sx={{ border: 'solid 1px #E0E0E0' }}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" sx={{ fontFamily: 'Oswald', color: '#4A148C' }}>
                                            {country.name.common}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ padding: '15px' }}>
                                        <Button href={`/flags/${country.name.common}`} variant="outlined" color="secondary" sx={{ left: '140px', fontWeight: 400, fontFamily: 'Kanit' }}>
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </>
    )

}
