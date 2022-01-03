import React, { Component } from "react";

class Timer extends Component {
	state = {
		count: this.props.timerValue
	};

	componentDidMount() {
		const multi = this.props.timerUnit === "hr" ? 3600 : 60;
		const startCount = this.props.timerValue * multi;
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
			this.props.history.push("/break-form");
		}
	}

	fmtMSS(s) {
		return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
	}

	render() {
		const { count } = this.state;
		return <h1>{this.fmtMSS(count)}</h1>;
	}
}

export default Timer;
