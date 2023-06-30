import { useContext, useState } from "react";
import NewsContext from "../context/NewsContext";
import { useNavigate } from "react-router-dom";
import { timeAgo } from '../component/utils.js'
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
} from "@mui/material";
import "../component/style/ScienceContent.css";

const ScienceContent = () => {
  const { scienceData, setScienceData } = useContext(NewsContext);
  const [ errorMessage, setErrorMessage ] = useState(null); // set to null and will only display the error message if it is not null.
  const navigate = useNavigate();

  const CollectScience = (id) => {
    try {
      const updatedScienceData = scienceData.map((science) => {
        if (science.id === id) {
          return {
            ...science,
            isCollect: !science.isCollect,
            collectionDate: new Date().toLocaleDateString(), // Add the collection date
          };
        }
        return science;
      });
      setScienceData(updatedScienceData);
      navigate("/collection"); // Navigate to the Collection page
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred. Please try again later.");
    }

  };

  return (
    <>
      <Box p={2}>
      <Typography variant="h2" className="science-content-title" >Science News</Typography>
        <Grid container spacing={2}>
          {scienceData.map((article) => (
            <Grid item xs={12} sm={6} md={4} key={article.id}>
              <Card sx={{ bgcolor: "#EBF4FA", margin: '15px 20px', padding: '20px', boxShadow: "5px 5px #B6B6B4", border: 'solid 1px #151B54' }}>
                <CardMedia
                  component="img"
                  src={article.image}
                  alt={article.description}
                />
                <CardContent>
                  <Typography className="science-card-section">{article.section !== "" ? article.section : "Other"}</Typography>
                  <Typography className="science-card-title">
                    {article.title}
                  </Typography>
                  <Typography variant="subtitle1" component="div" mb={1} className="science-card-subtitle">
                    {article.description}
                  </Typography>
                  <Typography className="science-byline">
										{article.byline}
									</Typography>
									<Typography
										variant="subtitle2"
										component="div"
										sx={{padding: "5px 8px"}}
										className="science-published-date"
									>
										{/* The date and time for posting */}
										{timeAgo(article.publishedDate)}
									</Typography>
                </CardContent>
                <CardActions>
                  <a
                    href={article.url}
                    // open new window
                    target="_blank"
                    rel="noopener noreferrer"
                    className="science-link"
                  >
                    <IconButton className="read-more-icon" >
                      <img width="30" height="30" src="https://img.icons8.com/ios/50/342D7E/read.png" alt="read"/>
                      Read More
                    </IconButton>

                  </a>
                  <IconButton
                    onClick={() => CollectScience(article.id)}
                    className="science-collect-btn"
                    sx={{
                      ":hover": {
                        bgcolor: article.isCollect
                          ? "#FFDFDD"
                          : "#FDD7E4",
                      },
                    }}
                  >
                    {article.isCollect ? (
                      <img
                        src="https://img.icons8.com/material-rounded/50/F75D59/like--v1.png"
                        alt="like--v1"
                        width="30"
                        height="30"
                      />
                    ) : (
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios/50/F75D59/like--v1.png"
                        alt="like--v1"
                      />
                    )}
                    
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* Display error message here */}
        {errorMessage && (
          <Typography variant="body1" color="error" align="center" mt={4}>
            {errorMessage}
          </Typography>
        )}
      </Box>
    </>
  );
};

export default ScienceContent;
