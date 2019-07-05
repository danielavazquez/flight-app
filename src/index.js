import React from "react";
import ReactDOM from "react-dom";
import Content from "./components/Content.jsx";
import Destination from "./components/Destination.jsx";
import "./index.scss";
import "./index.html";

class App extends React.Component {
  state = {
    flights: [],
    from: "PRG",
    to: "VLC"
  };

  updateFlights = () => {
    const { from, to } = this.state;
    fetch(
      `https://api.skypicker.com/flights?flyFrom=${from}&to=${to}&dateFrom=06/07/2019&dateTo=06/07/2019&partner=picky`
    )
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          flights: json.data
        });
      });
  };

  componentDidMount() {
    this.updateFlights();
  }

  handleSelectionChange = e => {
    if (e.target.name === "from") {
      this.setState(
        {
          from: e.target.value
        },
        this.updateFlights
      );
    }

    if (e.target.name === "to") {
      this.setState(
        {
          to: e.target.value
        },
        this.updateFlights
      );
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Kiwi Flights</h1>
        <Destination handleSelectionChange={this.handleSelectionChange} />
        <Content flights={this.state.flights} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
