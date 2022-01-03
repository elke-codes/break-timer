import React from "react";
import { Link } from "react-router-dom";
import Option from "./Option";
import "./Options.scss";
const Options = (props) => {
	// const { show } = prop
	let show = false;
	function toggleShow() {
		console.log("Toggling");
		show = !show;
		console.log("show is now", show);
	}

	return props.activities.map((activity) => {
		return (
			<>
				<Option activity={activity} />
			</>
		);
	});
};

export default Options;

// //renders a card with a description of the activity, when clicked it will render a new /:component with information rendered from an api.

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Quote from "../Quote/Quote";

// class Options extends Component {
// 	// state = {
// 	// 	selectedActivity: "null"
// 	// };

// 	// getActivityDetails() {
// 	// 	axios
// 	// 		.get("https://programming-quotes-api.herokuapp.com/quotes/random")
// 	// 		.then((resolve) => {
// 	// 			console.log(resolve.data.en);
// 	// 			this.setState({
// 	// 				selectedActivity: resolve.data.en
// 	// 			});
// 	// 		});
// 	// }

// 	// componentDidMount() {
// 	// 	axios
// 	// 		.get("https://programming-quotes-api.herokuapp.com/quotes/random")
// 	// 		.then((resolve) => {
// 	// 			console.log(resolve.data.en);
// 	// 			this.setState({
// 	// 				selectedActivity: resolve.data.en
// 	// 			});
// 	// 		});
// 	// }
// 	render() {
// 		return (
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
// 		);
// 	}
// }

// export default Options;
