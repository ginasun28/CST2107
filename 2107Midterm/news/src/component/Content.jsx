/* eslint-disable react/prop-types */
import {timeAgo} from "../component/utils.js";
import "../component/style/Content.css";
import {
	Typography,
	Card,
	CardContent,
	CardMedia,
	CardActions,
	IconButton,
} from "@mui/material";

function Content({ data, onCollectNews }) {

	const Collect = (id) => {
		try {
			// Call the onCollectNews function from the prop
			onCollectNews(data, id);
		} catch (error) {
			console.error(error);
		}
	};

	console.log("Data:", data); // Debugging data object

	return (
		<>
			<Card
				sx={{
					bgcolor: "#EBF4FA",
					margin: "15px 20px",
					padding: "20px",
				}}
			>
				<CardMedia component="img" src={data.image} alt={data.description} />
				<CardContent>
					<Typography className="news-card-subsection">
						{data.type !== "" ? data.type : "News"}
					</Typography>
					<Typography className="news-card-title">{data.title}</Typography>
					<Typography
						variant="subtitle1"
						component="div"
						mb={1}
						className="news-card-subtitle"
					>
						{data.description}
					</Typography>
					<Typography className="news-byline">{data.byline}</Typography>
					<Typography
						variant="subtitle2"
						component="div"
						sx={{padding: "5px 8px"}}
						className="news-published-date"
					>
						{timeAgo(data.publishedDate)}
					</Typography>
				</CardContent>
				<CardActions>
					<a
						href={data.url}
						target="_blank"
						rel="noopener noreferrer"
						className="news-content-link"
					>
						<IconButton className="read-more-icon">
							<img
								width="30"
								height="30"
								src="https://img.icons8.com/ios/50/342D7E/read.png"
								alt="read"
							/>
							Read More
						</IconButton>
					</a>
					<IconButton
						onClick={() => Collect(data.id)}
						className="news-collect-btn"
						sx={{
							":hover": {
								bgcolor: data.isCollect ? "#FFDFDD" : "#FDD7E4",
							},
						}}
					>
						{data.isCollect ? (
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
		</>
	);
}

export default Content;
