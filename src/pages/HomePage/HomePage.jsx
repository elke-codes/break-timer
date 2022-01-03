import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Clock from "../../components/Clock/Clock";
import TimerForm from "../../components/TimerForm/TimerForm";
import { Router } from "react-router-dom";
import "./HomePage.scss";

class HomePage extends Component {
	state = {
		secondRatio: 0,
		minuteRatio: 0,
		hourRatio: 0
	};

	componentDidMount() {
		// to avoid delay on starting the clock
		// this.setClock();
		this.everySecond = setInterval(() => {
			this.setClock();
		}, 1000);
	}
	// avoid memory link
	componentWillUnmount() {
		clearInterval(this.everySecond);
	}
	// to update the clock with current time
	setClock = () => {
		const currentDate = new Date();
		const secondRatio = currentDate.getSeconds() / 60;
		const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
		const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
		this.setState({
			secondRatio,
			minuteRatio,
			hourRatio
		});
	};
	// // avoid memory link
	// componentWillUnmount() {
	//   clearInterval(this.everySecond);
	// }

	render() {
		// const newDate= new Date();
		// console.log(newDate);
		const { secondRatio, minuteRatio, hourRatio } = this.state;
		return (
			<div className="home-page">
				<Clock
					secondRatio={secondRatio}
					minuteRatio={minuteRatio}
					hourRatio={hourRatio}
				/>
				<Link to="/form">
					<button className="home-page__button" type="submit">
						Add Timer
					</button>
				</Link>
			</div>
		);
	}
}

export default HomePage;
