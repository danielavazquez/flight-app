import React from "react";
import ReactDOM from "react-dom";
import Content from "./components/Content.jsx";
import Destination from "./components/Destination.jsx";
import "./index.scss";
import "./index.html";

class App extends React.Component {
  state = {
    flights: []
  };

  componentDidMount() {
    fetch(
      "https://api.skypicker.com/flights?flyFrom=PRG&to=VLC&dateFrom=06/07/2019&dateTo=06/07/2019&partner=picky"
    )
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          flights: json.data
        });
        console.log(json.data);
      });
  }

  render() {
    return (
      <>
        <Destination />
        <Content flights={this.state.flights} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
