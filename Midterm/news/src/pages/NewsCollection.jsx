import {useContext, useEffect} from "react";
import NewsContext from "../context/NewsContext";
import {
	Box,
	Typography,
	Grid,
	Card,
	CardContent,
	CardMedia,
	Button,
	CardActions,
} from "@mui/material";
import '../component/style/NewsCollection.css'

function NewsCollection() {
	const {newsData, setNewsData, scienceData, setScienceData} =
		useContext(NewsContext);

	// Retrieve data from local storage on component mount
	useEffect(() => {
		const storedNewsData = JSON.parse(localStorage.getItem("newsData"));
		if (storedNewsData) {
			setNewsData(storedNewsData);
		}

		const storedScienceData = JSON.parse(localStorage.getItem("scienceData"));
		if (storedScienceData) {
			setScienceData(storedScienceData);
		}
	}, []);

	// Save data to local storage whenever newsData or scienceData changes
	useEffect(() => {
		localStorage.setItem("newsData", JSON.stringify(newsData));
	}, [newsData]);

	useEffect(() => {
		localStorage.setItem("scienceData", JSON.stringify(scienceData));
	}, [scienceData]);

	// This creates a new array by filtering the scienceData array. 
	// It includes only those articles that have isCollect set to true and collectionDate not null.
	const collectedNews = newsData.filter(
		article => article.isCollect && article.collectionDate
	);
	const collectedScience = scienceData.filter(
		article => article.isCollect && article.collectionDate
	);

	// Contains all the collected news articles from both categories
	const combinedData = [...collectedNews, ...collectedScience];

	// Use id to find data which matches and delete it
	const removeItem = id => {
		const updatedNewsData = newsData.map(article => {
			if (article.id === id) {
				return {
					...article,
					isCollect: false,
					collectionDate: null,
				};
			}
			return article;
		});
		setNewsData(updatedNewsData);

		const updatedScienceData = scienceData.map(article => {
			if (article.id === id) {
				return {
					...article,
					isCollect: false,
					collectionDate: null,
				};
			}
			return article;
		});
		setScienceData(updatedScienceData);
	};

	//   console.log(removeItem(), 'news');

	return (
		<>
			<Typography variant="h2" className="collect-title">
				My Collection
			</Typography>

			<Box p={2} sx={{padding: "20px 50px"}}>
				<Grid container spacing={2}>
					{combinedData.map(item => (
						<Grid item xs={12} sm={6} md={4} key={item.id}>
							<Card
								sx={{
									position: "relative",
									left: "40px",
									width: "300px",
									height: "400px",
								}}
							>
								<CardMedia
									component="img"
									src={item.image}
									alt={item.description}
									sx={{width: "300px"}}
								/>
								<CardContent>
									<Typography
										component="div"
										mb={1}
										className="collect-card-title"
									>
										<a href={item.url} className="collect-card-title">
											{item.title}
										</a>
									</Typography>
									<Typography
										variant="subtitle1"
										component="div"
										mb={1}
										className="collect-card-subtitle"
									>
										{item.description}
									</Typography>
									<Typography sx={{fontSize: "12px", color: "#B6B6B4"}}>
										Collect date: {item.collectionDate}
									</Typography>
								</CardContent>
								<CardActions
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<Button
										size="small"
										onClick={() => removeItem(item.id)}
										className="button-8"
										sx={{position: "relative", top: "-10px"}}
									>
										Remove
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
}

export default NewsCollection;