import { Link } from "react-router-dom";

import React, { Component } from "react";
import "./Option.scss";

class Option extends Component {
	state = {
		show: false
	};

	toggleShow = () => {
		console.log("Toggling");
		this.setState({
			show: !this.state.show
		});
		console.log("show is now", this.state.show);
	};

	render() {
		return (
			<div onClick={this.toggleShow} className="activity">
				<article>
					<h2>{this.props.activity.title}</h2>
					<p className="activity__copy">
						{this.state.show && this.props.activity.data}
					</p>
				</article>
			</div>
		);
	}
}

export default Option;
