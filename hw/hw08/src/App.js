import React from "react";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import SearchInput from "./components/SearchInput/SearchInput";
import WeeklyForecast from "./components/WeeklyForecast/WeeklyForecast";

import Container from './hoc/Container/Container';

import classes from './App.module.scss';
import './index.module.scss';

function App() {
	return (
		<Container>
			<h1 className={classes['Title']}>Weather Forecast by Katerina Kolesnykova</h1>

			<div className={classes['RowHeader']}>
				<SearchInput />
				<Scoreboard />
			</div>
			<WeeklyForecast />
		</Container>
	);
}

export default App;