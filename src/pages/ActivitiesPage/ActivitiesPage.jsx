//renders cards with a description of the activity, when clicked it will render a new /:component with information rendered from an api.

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import activities from "../../data/apis/activities.json";
import Options from "../../components/Options/Options";
import "./ActivitiesPage.scss";

class ActivitiesPage extends Component {
	state = {
		activityData: activities,
		selectedActivity: "null",
		api_url: activities.url,
		activitiesData: []
	};

	getActivityDetails() {
		axios
			.get("https://programming-quotes-api.herokuapp.com/quotes/random")
			.then((resolve) => {
				console.log(resolve.data.en);
				this.setState({
					selectedActivity: resolve.data.en
				});
			});
	}

	componentDidMount() {
		Promise.all(
			activities.map(({ title, id, url }) =>
				axios.get(url).then((resolve) => {
					// console.log("api call", resolve.data.en);
					// console.log("api call", resolve.data.joke);
					// console.log("api call", resolve.data.);

					let data = function () {
						if (id === "quote") {
							return resolve.data.en;
						} else if (id === "joke") {
							return resolve.data.joke;
						}
					};

					return {
						data: data(),
						id,
						title
					};
				})
			)
		).then((activities) => {
			console.log("activitiespage", activities);
			this.setState({
				activitiesData: activities
			});
		});
	}

	render() {
		return (
			<section className="activities">
				<h1 className="activities__title">
					What would you like to do during your break?
				</h1>

				<div className="activities-container">
					<Options activities={this.state.activitiesData} />
				</div>
				<p className="activities__copy">more options coming soon! </p>
			</section>
		);
	}
}

export default ActivitiesPage;
