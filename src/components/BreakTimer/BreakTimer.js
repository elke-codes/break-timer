import React, { Component } from "react";
import ActivitiesPage from "../../pages/ActivitiesPage/ActivitiesPage";
import bell from "../../assets/bell.mp3";

let sound = new Audio(bell);
class BreakTimer extends Component {
	state = {
		count: this.props.breakTimerValue
	};

	componentDidMount() {
		const multi = this.props.breakTimerUnit === "hr" ? 3600 : 60;
		const startCount = this.props.breakTimerValue * multi;
		console.log("this is count", startCount);
		this.setState({
			count: startCount
		});

		this.timer = setInterval(() => {
			const { count } = this.state;

			this.setState({
				count: count - 1
			});
		}, 1000);
	}
	componentDidUpdate(prevState) {
		if (prevState.count !== this.state.count && this.state.count === 0) {
			clearInterval(this.timer);
			sound.play();
			this.props.history.push("/");
		}
	}

	fmtMSS(s) {
		//    console.log(s);
		return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
	}

	render() {
		const { count } = this.state;
		return (
			<>
				<h1>{this.fmtMSS(count)}</h1>
				<ActivitiesPage />
			</>
		);
	}
}

export default BreakTimer;
