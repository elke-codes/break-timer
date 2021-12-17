import React from "react";
let time = new Date().toLocaleTimeString();

class Clock extends React.Component {
	state = {
		time: time
	};

	componentDidMount() {
		this.timerID = setInterval(() => {
			this.tick();
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick = () => {
		this.setState({
			time: new Date().toLocaleTimeString()
		});
	};

	render() {
		console.log("render");

		return <p className="App-clock">{this.state.time}</p>;
	}
}
export default Clock;
