import React from 'react';
import ReactDOM from 'react-dom';
import Content from './components/Content.jsx';
import Destination from './components/Destination.jsx';
import './index.scss';
import './index.html';

class App extends React.Component {
  state = {
    dep_time: '14:00',
    arr_time: '16:00',
    origin: 'Prague',
    destination: 'Valencia',
    price: 200
  }
  render() {
    return (
      <>
        <Destination />
        <Content 
          dep_time={this.state.dep_time}
          arr_time={this.state.arr_time}
          origin={this.state.origin}
          destination={this.state.destination}
          price={this.state.price}
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));