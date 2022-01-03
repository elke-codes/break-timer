import React, { Component } from "react";
import { Link } from "react-router-dom";
import Clock from "../Clock/Clock";

class TimerForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.timerValue.value);
    console.log(e.target.timerUnit.value);
    this.props.updateTimer(e.target.timerValue.value, e.target.timerUnit.value);

    e.target.reset();
    this.props.history.push("/timer");
  };

  render() {
    console.log(this.props);
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input name="timerValue" type="number" required />
          <select name="timerUnit" required>
            <option>hr</option>
            <option>mints</option>
          </select>

          <button type="submit">start timer</button>
        </form>
      </>
    );
  }
}

export default TimerForm;
