import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Landing from './landing/Landing';
import Download from './download/Download';
import Highscores from './highscores/Highscores';
import HighscoreSkill from "./highscores/HighscoreSkill";
import HighscorePlayer from "./highscores/HighscorePlayer";

function PageRoutes({props}) {
	return (
		<Routes>
			<Route exact path='/' element={<Landing />} />
			<Route path='/download' element={<Download />} />
			<Route path='/highscores/all/:page' element={<Highscores props={props}/>} />
			<Route path='/highscores-iron/all/:page' element={<Highscores props={props}/>} />
			<Route path='/highscores/skill/:skill/:page' element={<HighscoreSkill props={props}/>} />
			<Route path='/highscores-iron/skill/:skill/:page' element={<HighscoreSkill props={props}/>} />
			<Route path='/highscores/player/:username' element={<HighscorePlayer props={props}/>} />
			{/* <Route path='/account/create' component={SignUp} />
          <Route path='/skillcalc/:skill' component={SkillCalculator} /> */}
		</Routes>
	);
}

export default PageRoutes;
