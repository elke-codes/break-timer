import React from "react";
import "./Clock.scss";

function Clock({ secondRatio, minuteRatio, hourRatio }) {
	// console.log(secondRatio, minuteRatio, hourRatio);

	const hourStyle = {
		transform: `translate(-50%)  rotate(${hourRatio * 360}deg)`
	};

	const minuteStyle = {
		transform: `translate(-50%)  rotate(${minuteRatio * 360}deg)`
	};

	const secondStyle = {
		transform: `translate(-50%)  rotate(${secondRatio * 360}deg)`
	};

	return (
		<div className="clock">
			<div
				className="clock__hand clock__hand--hour"
				style={hourStyle}></div>
			<div
				className="clock__hand clock__hand--minute"
				style={minuteStyle}></div>
			<div
				className="clock__hand clock__hand--second"
				style={secondStyle}></div>
			<div className="clock__number clock__number1">1</div>
			<div className="clock__number clock__number2">2</div>
			<div className="clock__number clock__number3">3</div>
			<div className="clock__number clock__number4">4</div>
			<div className="clock__number clock__number5">5</div>
			<div className="clock__number clock__number6">6</div>
			<div className="clock__number clock__number7">7</div>
			<div className="clock__number clock__number8">8</div>
			<div className="clock__number clock__number9">9</div>
			<div className="clock__number clock__number10">10</div>
			<div className="clock__number clock__number11">11</div>
			<div className="clock__number clock__number12">12</div>
		</div>
	);
}

export default Clock;

// import React from "react";
// import "./Clock.scss";

// let time = new Date().toLocaleTimeString();

// class Clock extends React.Component {
//   state = {
//     time: time,
//   };

//   componentDidMount() {
//     this.timerID = setInterval(() => {
//       this.tick();
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick = () => {
//     this.setState({
//       time: new Date().toLocaleTimeString(),
//     });
//   };

//   render() {
//     return <div className="App-clock">{this.state.time}</div>;
//   }
// }
// export default Clock;
