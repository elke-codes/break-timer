//renders cards with a description of the activity, when clicked it will render a new /:component with information rendered from an api.

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Quote from "../../components/Quote/Quote";
import activities from "../../data/apis/activities.json";
import Options from "../../components/Options/Options";

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
					console.log("api call", resolve.data.en);
					console.log("api call", resolve.data.joke);

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
			<section>
				<h1>What would you like to do during your break?</h1>
				<Options activities={this.state.activitiesData} />
			</section>
			// <section>
			// 	<h1>What would you like to do during your break?</h1>
			// 	<Link to="/quote">
			// 		<h2>Read programming quote</h2>
			// 		<Quote />
			// 	</Link>

			// 	<Link to="/joke">
			// 		<h2>Read a joke</h2>
			// 	</Link>
			// 	<Link to="/stretch">
			// 		<h2>Stretch it out</h2>
			// 	</Link>

			// 	<Link to="/music">
			// 		<article>
			// 			<h2>Listen to a song</h2>
			// 		</article>
			// 	</Link>

			// 	<Link to="/comedy">
			// 		<article>
			// 			<h2>Laugh it away</h2>
			// 		</article>
			// 	</Link>
			// </section>
		);
	}
}

export default ActivitiesPage;

// componentDidUpdate(prevProps) {
// 	console.log("match params", this.props.match);
// 	console.log("prev", this.prevProps.match);

// 	const newActivity = this.props.match.params.activity;
// 	if (prevProps.match.params.activity !== newActivity) {
// 		const activityToLoad =
// 			newActivity !== undefined
// 				? newActivity
// 				: this.state.selectedActivity;

// 		this.getActivityDetails(activityToLoad);
// 	}

// const newActivity = this.props.match.params.activity;
// axios
// 	.get("https://programming-quotes-api.herokuapp.com/quotes/random")
// 	.then((resolve) => {
// 		console.log(resolve.data.en);
// 		this.setState({
// 			selectedActivity: resolve.data.en
// 		});
// 	});
// }

// componentDidUpdate() {	return (
// 			<section>
// 				<h1>What would you like to do during your break?</h1>
// 				<Link to="/quote">
// 					<h2>Read programming quote</h2>
// 					<Quote activity={this.state.selectedActivity} />
// 				</Link>

// 				<Link to="/joke">
// 					<h2>Read a joke</h2>
// 				</Link>
// 				<Link to="/stretch">
// 					<h2>Stretch it out</h2>
// 				</Link>

// 				<Link to="/music">
// 					<article>
// 						<h2>Listen to a song</h2>
// 					</article>
// 				</Link>

// 				<Link to="/comedy">
// 					<article>
// 						<h2>Laugh it away</h2>
// 					</article>
// 				</Link>
// 			</section>
// 	const newActivity = this.props.match.params.activity;
// 	if (prevProps.match.params.activity !== newActivity) {
// 		const videoToLoadId =
// 			newActivity !== undefined
// 				? newActivity
// 				: this.state.selectedActivity;

// 		this.getActivityDetails(newActivity);
// 	}
// }
