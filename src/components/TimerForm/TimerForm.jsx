import React, { Component } from "react";

class TimerForm extends Component {
	state = {
		timer: null
	};

	onChangeHandler = (e) => {
		if (this.state.timer) {
			this.setState({
				timer: 1
			});
		} else {
			this.setState({ timer: e.target.value });
		}
	};

	render() {
		return (
			<form>
				<input
					type="number"
					value={this.state.timer}
					onChange={(e) => {
						onChangeHandler();
					}}
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
