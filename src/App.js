import React, { Component } from 'react';
import './App.css';
import Clock from './Components/Clock'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Special Relativity Simulator
          </p>
          <Clock/>
        </header>
      </div>
    );
  }
}

export default App;
