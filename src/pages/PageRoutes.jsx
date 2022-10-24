import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import IndexPage from "./IndexPage.jsx";
import HighscoresPage from "./HighscoresPage.jsx";
import GrandExchangeTable from "../components/grand-exchange/GrandExchangeTable.jsx";
import HighscorePlayerPage from "./HighscorePlayerPage.jsx";

function PageRoutes({props}) {
	return (
		<Routes>
			<Route path="/" element={<IndexPage />} />
			<Route path="/highscores" element={<HighscoresPage />} />
			<Route path="/highscores/skill/:category" element={<HighscoresPage />} />
			<Route path="/highscores/skill/:category/:page" element={<HighscoresPage />} />
			<Route path="/highscores/skill/:category/:skill/:page" element={<HighscoresPage />} />
			<Route path="/highscores/player/:displayName" element={<HighscorePlayerPage />} />
			<Route path="/grand-exchange" element={<GrandExchangeTable />} />
		</Routes>
	);
}

export default PageRoutes;
