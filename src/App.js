import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ActivitiesPage from "./pages/ActivitiesPage/ActivitiesPage";

class App extends Component {
	// state = {
	// 	activityData: activities,
	// 	selectedActivity: "null",
	// 	api_url: activities.url
	// };
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route
						path="/activities/:activity"
						component={ActivitiesPage}
					/>

					<Route path="/activities" component={ActivitiesPage} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
