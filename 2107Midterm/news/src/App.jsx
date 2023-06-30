import {v4 as uuidv4} from "uuid";
import NewsContext from "./context/NewsContext";
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header";
import NewsCollection from "./pages/NewsCollection";
import './component/style/styles.css';
import NewsContent from "./pages/NewsContent";
import ScienceContent from "./pages/ScienceContent";
import NotFound from "./pages/NotFound";

function App() {
	const TNKEY = `Ch2dpFrwnkuwsYmSjtbd8lKBz1JDGWpv`;
	const [newsData, setNewsData] = useState([]);
	const [scienceData, setScienceData] = useState([]);
	const [realTimeNewsData, setRealTimeNewsData] = useState([]);

	useEffect(() => {
		getUSNewsFromAPI();
		getScienceArticleFromAPI();
		getRealTimeNewsFromAPI();
	}, []);

	// fetch US News data from API
	const getUSNewsFromAPI = async () => {
		try {
			const response = await fetch(
				`https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${TNKEY}`
			);
			const data = await response.json();
			const requiredData = data.results.map(news => ({
				image: news.multimedia[1].url,
				description: news.abstract,
				isCollect: false,
				id: uuidv4(), // Generate a unique ID for each news
				publishedDate: news.published_date, // Add the published date to the news object
				url: news.url,
				title: news.title,
				byline: news.byline,
				type: news.section,
				subsection: news.subsection
			}));

			// Sort the articles by published date in descending order
			requiredData.sort(
				(a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
			);
			setNewsData(requiredData);
		} catch (error) {
			console.log("Error fetching news data:", error);
		}
	};

	// fetch science article data from API
	const getScienceArticleFromAPI = async () => {
		try {
			const response = await fetch(
				`https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${TNKEY}`
			);
			const data = await response.json();
			const requiredData = data.results.map(article => {
				const image = article.multimedia?.[1]?.url || ""; // Access the first multimedia element if available
				return {
					image,
					description: article.abstract,
					isCollect: false,
					id: uuidv4(), // Generate a unique ID for each article
					publishedDate: article.published_date,
					url: article.url,
					title: article.title,
					byline: article.byline,
					section: article.section,
					
				};
			});

			// Sort the articles by published date in descending order
			requiredData.sort(
				(a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
			);
			setScienceData(requiredData); // Update the state for science articles
		} catch (error) {
			console.log("Error fetching science article data:", error);
		}
	};

	// fetch real time news data from API
	const getRealTimeNewsFromAPI = async () => {
		try {
			const response = await fetch(
				`https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=${TNKEY}`
			);
			const data = await response.json();
			const requiredData = data.results.map(realTime => {
				let image = "";
				if (realTime.multimedia && realTime.multimedia.length > 0) {
					image = realTime.multimedia[2].url || "";
				}
				return {
					title: realTime.title,
					image,
					description: realTime.abstract,
					id: uuidv4(),
					publishedDate: realTime.published_date,
					realTimeUrl: realTime.url,
					section: realTime.section
				};
			});

			// Sort the articles by published date in descending order
			requiredData.sort(
				(a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
			);
			setRealTimeNewsData(requiredData);
		} catch (error) {
			console.log("Error fetching real-time news data:", error);
		}
	};

	return (
		<>
			<Router>
				<Header />
				<NewsContext.Provider
					value={{
						newsData,
						setNewsData,
						scienceData,
						setScienceData,
						realTimeNewsData,
						setRealTimeNewsData,
					}}
				>
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/collection" element={<NewsCollection />}></Route>
						<Route path="/news" element={<NewsContent />}></Route>
						<Route path="/science" element={<ScienceContent />}></Route>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</NewsContext.Provider>
			</Router>
		</>
	);
}

export default App;
