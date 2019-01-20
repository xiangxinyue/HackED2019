import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './damion_icon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Adventure Cat Damion!</h1>

          <div className="button-container">
          <button id="#pageF"><a href="./pageF/index.html">START!</a></button>
          </div>

        </header>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
