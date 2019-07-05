import React from "react";
import ReactDOM from "react-dom";
import Content from "./components/Content.jsx";
import Destination from "./components/Destination.jsx";
import "./index.scss";
import "./index.html";

class App extends React.Component {
  state = {
    flights: [],
    from: 'PRG',
    to: 'VLC',
    url: `https://api.skypicker.com/flights?flyFrom=PRG&to=VLC&dateFrom=06/07/2019&dateTo=06/07/2019&partner=picky`
  };

  componentDidMount() {
    fetch(
      this.state.url
    )
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          flights: json.data
        });
      });
  }

  handleFrom(e) {
    this.setState({
      from: e.target.value
    });
  }

  handleTo(e) {
    this.setState({
      to: e.target.value
    });
  }

  render() {
    return (
      <>
        <Destination 
          handleFrom={this.handleFrom}
          handleTo={this.handleTo}
        />
        <Content flights={this.state.flights} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
