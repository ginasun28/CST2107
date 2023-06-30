import {Box, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import RealTimeNews from "./RealTimeNews";
import '../component/style/Banner.css'

const Banner = () => {
	const bannerImgs = [
		"https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
		"https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
		"https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
		"https://images.unsplash.com/photo-1615403916271-e2dbc8cf3bf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
	];

	const [currentImgIndex, setCurrentImgIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImgIndex(prevIndex =>
				prevIndex === bannerImgs.length - 1 ? 0 : prevIndex + 1
			);
		}, 5000); // Change image every 5 seconds

		return () => clearInterval(interval);
	}, []);

	const bannerImg = bannerImgs[currentImgIndex];

	return (
		<>
			<Box
				sx={{
					width: "100%",
					backgroundImage: `url(${bannerImg})`,
					opacity: 0.8,
					height: "65vh",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					objectFit: "cover",
					display: "flex",
					objectPosition: "10px 40px",
				}}
			>
				<Box
					sx={{
						position: "relative",
						top: "35px",
						left: "230px",
						padding: "50px 50px",
						width: "300px",
						height: "50px",
					}}
				>
					<Typography className="banner-title">The New York Times</Typography>
				</Box>
				<RealTimeNews />
			</Box>
		</>
	);
};

export default Banner;
