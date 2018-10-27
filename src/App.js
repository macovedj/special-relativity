import React, { Component } from 'react';
import './App.css';
import Clock from './Components/Clock'


class App extends Component {
    constructor() {
        super()
        this.state = {time:new Date()}
    }

    currentTime() {
        this.setState({time: new Date()})
    }

    componentWillMount() {
        setInterval(() =>this.currentTime(), 1000)
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Special Relativity Simulator
          </p>
            <Clock text={"I\'m a standard clock"}/>
            <p>{this.state.time.toLocaleTimeString()}</p>
        </header>
      </div>
    );
  }
}

export default App;
