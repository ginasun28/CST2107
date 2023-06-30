import {useContext} from "react";
import {Link} from "react-router-dom";
import NewsContext from "../context/NewsContext";
import {timeAgo} from "../component/utils.js";
import {
	Box,
	Typography,
	Grid,
	Card,
	CardContent,
	CardMedia,
	Button,
} from "@mui/material";
import "../component/style/NewsContainer.css";

const NewsContainer = () => {
	const {scienceData, newsData} = useContext(NewsContext);

	// Selects and extracts a subset of the scienceData array containing a specified number of elements
	// starting from index 0. In this case, it selects the first 6 elements and frist 3 elements.
	const displayedScienceData = scienceData.slice(0, 6);
	const displayedNewsData = newsData.slice(0, 3);

	// Formats the given date string into a localized date string representation
	// using the specified options for year, month, and day.
	const formatDate = dateString => {
		const options = {year: "numeric", month: "long", day: "numeric"};
		const date = new Date(dateString);
		return date.toLocaleDateString(undefined, options);
	};

	return (
		<>
			<Typography variant="h2" className="topnews-title">
				TOP News
			</Typography>
			<Box p={2} >
				<Grid
					container
					spacing={2}
					sx={{height: "auto", maxHeight: "600px", overflowY: "auto"}}
				>
					{displayedNewsData.map(news => (
						<Grid item xs={10} key={news.id}>
							<Card
								sx={{
									display: "flex",
									position: "relative",
									left: "115px",
									height: "250px",
									boxShadow: 'gba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
								}}
							>
								<CardMedia
									component="img"
									src={news.image}
									alt={news.description}
									sx={{width: "400px"}}
								/>
								<CardContent sx={{flex: "1"}}>
									<Typography className="newscontainer-card-subsection">
										{news.subsection !== "" ? news.subsection : "News"}
									</Typography>
									<Typography>
										<a href={news.url} className="news-link">
											{news.title}
										</a>
									</Typography>
									<Typography
										variant="subtitle1"
										component="div"
										sx={{padding: "5px 8px"}}
										mb={1}
										className="news-description"
									>
										{news.description}
									</Typography>
									<Typography className="news-byline">{news.byline}</Typography>
									<Typography
										variant="subtitle2"
										component="div"
										sx={{padding: "5px 8px"}}
										className="news-published-date"
									>
										{/* The date and time for posting */}
										{formatDate(news.publishedDate)} (
										{timeAgo(news.publishedDate)})
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						padding: "20px 10px",
					}}
				>
					<Button
						component={Link}
						to="/news"
						variant="contained"
						className="news-loadmore"
					>
						Load More
					</Button>
				</Box>
			</Box>
			{/* Science */}
			<Typography variant="h2" className="science-title">
				Science
			</Typography>
			<Box p={2}>
				<Grid
					container
					rowSpacing={2}
					columns={{xs: 4, sm: 8, md: 12}}
					sx={{height: "auto", maxHeight: "600px", overflow: "auto"}}
				>
					{displayedScienceData.map(article => (
						<Grid item xs={6} sm={4} key={article.id}>
							<Card
								sx={{
									position: "relative",
									left: "40px",
									width: "400px",
									boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
								}}
							>
								<CardMedia
									component="img"
									src={article.image}
									alt={article.description}
									sx={{width: "400px"}}
								/>
								<CardContent>
									<Typography className="newscontainer-card-section">
										{article.section !== "" ? article.section : "News"}
									</Typography>
									<Typography component="div">
										<a
											href={article.url}
											className="newscontainer-science-link"
										>
											{article.title}
										</a>
									</Typography>
									<Typography
										variant="subtitle1"
										component="div"
										mb={1}
										className="science-subtitle"
									>
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
										{formatDate(article.publishedDate)} (
										{timeAgo(article.publishedDate)})
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						padding: "40px 10px",
					}}
				>
					<Button
						component={Link}
						to="/science"
						variant="contained"
						className="science-loadmore"
					>
						Load More
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default NewsContainer;
