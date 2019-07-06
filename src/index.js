import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./spinner";
import useLocation from "./useLocation";

const App = () => {
	const [lat, err] = useLocation();

	let content;
	if (err) {
		content = <div>Error: {err}</div>;
	} else if (lat) {
		content = <SeasonDisplay lat={lat} />;
	} else {
		content = <Spinner message="Tell us where you are." />;
	}

	return <div className="border red">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
