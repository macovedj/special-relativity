import React, { Component } from 'react';
import './App.css';
import Clock from './Components/Clock';
import RelativisticClock from './Components/RelativisticClock';

class App extends Component {
    constructor() {
        super()
        this.state = {time:new Date()}
        this.speedOfMover = 0
        this.handleChange = this.handleChange.bind(this)
    }

    currentTime() {
        this.setState({time: new Date()})
    }

    componentWillMount() {
        setInterval(() =>this.currentTime(), 1)
    }

    handleChange(event) {
      console.log(event.target.value)
      this.setState({ speedOfMover: event.target.value })
    }

  render() {

    let stationaryTime = this.state.time.toLocaleString().replace(" PM", ":") + this.state.time.getMilliseconds();
    let relativisticTime = this.state.time.toLocaleString().replace(" PM", ":") + this.state.time.getMilliseconds();

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Special Relativity Simulator
          </p>
            <Clock time={ stationaryTime }/>
            <RelativisticClock time= { relativisticTime } changeHandler={this.handleChange} />
        </header>
      </div>
    );
  }
}

export default App;
