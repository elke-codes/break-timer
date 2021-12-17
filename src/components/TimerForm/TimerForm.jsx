import React, { Component } from "react";

class TimerForm extends Component {
	state = {
		timerValue: null
	};

	onChangeHandler = (event) => {
		// console.log(event.target.name, event.target.value);
		this.setState({
			[event.target.name]: event.target.value
		});

		console.log(this.state.timerValue);
	};

	handleSubmit = (e) => {
		e.preventDefault();
	};
	// <CountDownTimer timeValue={this.state.timeValue}

	//funcl (props)
	//props.timeValue
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="number"
					value={this.state.timer}
					name="timerValue"
					onChange={this.onChangeHandler}
				/>
				<select>
					<option>hr</option>
					<option>mints</option>
				</select>
				<button type="submit">start timer</button>
			</form>
		);
	}
}

export default TimerForm;
