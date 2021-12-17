import React from "react";
import Button from "../../components/Button/Button";
import Clock from "../../components/Clock/Clock";
import TimerForm from "../../components/TimerForm/TimerForm";

const HomePage = () => {
	return (
		<>
			<Clock />
			<Button />
			<TimerForm />
		</>
	);
};

export default HomePage;
