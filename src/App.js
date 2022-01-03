import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ActivitiesPage from "./pages/ActivitiesPage/ActivitiesPage";
import TimerForm from "./components/TimerForm/TimerForm";
import Timer from "./components/Timer/Timer";
import BreakForm from "./components/BreakForm/BreakForm";
import BreakTimer from "./components/BreakTimer/BreakTimer";
import "./App.scss";

class App extends Component {
	state = {
		timerValue: null,
		timerUnit: "",
		breakTimerValue: null,
		breakTimerUnit: ""
	};
	updateTimer = (timerValue, timerUnit) => {
		this.setState({
			timerValue: timerValue,
			timerUnit: timerUnit
		});
	};
	breakUpdateTimer = (breakTimerValue, breakTimerUnit) => {
		this.setState({
			breakTimerValue: breakTimerValue,
			breakTimerUnit: breakTimerUnit
		});
	};
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route
						path="/form"
						render={(routerProps) => {
							return (
								<TimerForm
									updateTimer={this.updateTimer}
									{...routerProps}
								/>
							);
						}}
					/>

					<Route
						path="/timer"
						render={(routerProps) => {
							return (
								<Timer
									timerValue={this.state.timerValue}
									timerUnit={this.state.timerUnit}
									{...routerProps}
								/>
							);
						}}
					/>
					<Route
						path="/break-form"
						render={(routerProps) => {
							return (
								<BreakForm
									breakUpdateTimer={this.breakUpdateTimer}
									{...routerProps}
								/>
							);
						}}
					/>

					<Route
						path="/break-timer"
						render={(routerProps) => {
							return (
								<BreakTimer
									breakTimerValue={this.state.breakTimerValue}
									breakTimerUnit={this.state.breakTimerUnit}
									{...routerProps}
								/>
							);
						}}
					/>

					{/* <Route
						path="/activities/:activity"
						component={ActivitiesPage}
					/> */}
					<Route path="/activities" component={ActivitiesPage} />
				</Switch>
			</BrowserRouter>
		);
	}
}

// class App extends Component {
// 	render() {
// 		return (
// 			<BrowserRouter>
// 				<Switch>
// 					<Route path="/" exact component={HomePage} />
// 					<Route
// 						path="/activities/:activity"
// 						component={ActivitiesPage}
// 					/>
// 					<Route path="/activities" component={ActivitiesPage} />
// 				</Switch>
// 			</BrowserRouter>
// 		);
// 	}
// }

export default App;
