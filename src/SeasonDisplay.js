import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
	summer: {
		text: "Let's go to the fucking beach.",
		iconName: "sun"
	},
	winter: {
		text: "Its fucking chilly out there",
		iconName: "snowflake"
	}
};

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? "summer" : "winter";
	} else {
		return lat > 0 ? "winter" : "summer";
	}
};

const SeasonDisplay = function(props) {
	var month = new Date().getMonth();
	const season = getSeason(props.lat, month);
	const { text, iconName } = seasonConfig[season];
	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${iconName} icon`} />
			<h1>{text}</h1>
			<i className={`icon-right massive ${iconName} icon`} />
		</div>
	);
};

export default SeasonDisplay;
