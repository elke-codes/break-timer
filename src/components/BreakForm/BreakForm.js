import React, { Component } from "react";
import { Link } from "react-router-dom";
import Clock from "../Clock/Clock";

class BreakForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.breakTimerValue.value);
    console.log(e.target.breakTimerUnit.value);
    console.log(typeof this.props.breakUpdateTimer);
    this.props.breakUpdateTimer(
      e.target.breakTimerValue.value,
      e.target.breakTimerUnit.value
    );

    e.target.reset();
    this.props.history.push("/break-timer");
  };

  render() {
    console.log(this.props);
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input name="breakTimerValue" type="number" required />
          <select name="breakTimerUnit" required>
            <option>hr</option>
            <option>mints</option>
          </select>

          <button type="submit">start timer</button>
        </form>
      </>
    );
  }
}

export default BreakForm;
