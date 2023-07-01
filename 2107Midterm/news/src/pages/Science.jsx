import { useContext, useState } from "react";
import NewsContext from "../context/NewsContext";
import { Box, Typography, Grid, Divider } from "@mui/material";
import Content from '../component/Content'

const Science = () => {

    const { scienceData, setScienceData } = useContext(NewsContext);
    const [errorMessage, setErrorMessage] = useState(null);

	const handleCollectScience = (data, id) => {
		try {
			const updatedData = scienceData.map(item => {
				if (item.id === id) {
					return {
						...item,
						isCollect: !item.isCollect,
						collectionDate: new Date().toLocaleDateString(),
					};
				}
				return item;
			});

			setScienceData(updatedData);

		} catch (error) {
			console.error(error);
			setErrorMessage("An error occurred. Please try again later.");
		}
	};

    return (
        <>
            <Box p={2}>
				<Typography variant="h2" className="usnews-title">
					Science
				</Typography>
				<Divider sx={{width: 'auto', margin: '-5px 20px 15px 20px'}}/>
				<Grid container spacing={2}>
					{scienceData.map(article => (
						<Grid item xs={12} sm={6} md={4} key={article.id}>
							<Content data={article} onCollectNews={handleCollectScience} />
						</Grid>
					))}
				</Grid>
                {errorMessage && (
					<Typography variant="body1" color="error" align="center" mt={4}>
						{errorMessage}
					</Typography>
				)}
			</Box>
        </>
    )
}

export default Science;