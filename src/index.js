import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./spinner";

class App extends React.Component {
	state = { lat: null, errMessage: "" };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude }),
			err => this.setState({ errMessage: err.message })
		);
	}

	render() {
		if (this.state.errMessage && !this.state.lat) {
			return <div>Error: {this.state.errMessage}</div>;
		} else if (!this.state.errMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		}
		return <Spinner message="Tell us where you are." />;
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
