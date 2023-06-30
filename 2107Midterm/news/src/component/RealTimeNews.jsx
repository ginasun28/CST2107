import {useEffect, useState, useContext} from "react";
import {
	Box,
	Typography,
	Card,
	CardContent,
	CardMedia,
	CardActions,
	Button,
} from "@mui/material";
import NewsContext from "../context/NewsContext";
import "../component/style/RealTimeNews.css";

const RealTimeNews = () => {
	const {realTimeNewsData} = useContext(NewsContext);
	const [randomArticle, setRandomArticle] = useState(null);
	const realTimeTitles = [
		{
			className: "real-time1",
		},
		{
			className: "real-time2",
		},
		{
			className: "real-time3",
		},
		{
			className: "real-time4",
		},
	];

	const [currentImgIndex, setCurrentImgIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImgIndex(prevIndex =>
				prevIndex === realTimeTitles.length - 1 ? 0 : prevIndex + 1
			);
		}, 120000); // Change image every 2 minutes (120,000 milliseconds)

		return () => clearInterval(interval);
	}, []);

	const realTimeTitle = realTimeTitles[currentImgIndex];

	useEffect(() => {
		if (realTimeNewsData.length > 0) {
			getRandomArticle();
		}
	}, [realTimeNewsData]);

	const getRandomArticle = () => {
		const randomIndex = Math.floor(Math.random() * realTimeNewsData.length);
		setRandomArticle(realTimeNewsData[randomIndex]);
	};

	return (
		<>
			<Box
				sx={{
					position: "relative",
					left: "500px",
					top: "50px",
					"@media (max-width: 768px)": {
						left: "50px",
						top: "30px",
					},
				}}
			>
				<Typography variant="h1" className={realTimeTitle.className}>
					Real Time
				</Typography>
				{randomArticle && (
					<Card className="realtime-card">
						<CardMedia
							component="img"
							image={randomArticle.image}
							alt={randomArticle.title}
							className="realtime-img"
						/>
						<CardContent>
							<Typography
								component="div"
								className="realtime-card-section"
							>
								{randomArticle.section}
							</Typography>
							<Typography
								variant="h5"
								component="div"
								className="realtime-card-title"
							>
								{randomArticle.title}
							</Typography>
						</CardContent>
						<CardActions>
							<a
								href={randomArticle.realTimeUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="realtime-readmore"
							>
								<Button
									sx={{
										position: "relative",
										display: 'flex',
										left: '10px',
										"@media (max-width: 768px)": {
											top: "-6px",
											left: "120px",
										},
									}}
									className="realtime-readmore-btn"
								>
									Read More
								</Button>
							</a>
						</CardActions>
					</Card>
				)}
			</Box>
		</>
	);
};

export default RealTimeNews;
