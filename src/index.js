import React, { Component } from 'react';
import ReactDOM from 'react-dom';
<<<<<<< Updated upstream
=======
import logo from './damion_icon.png';
>>>>>>> Stashed changes
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the main page</h1>
        </header>
        <p className="App-intro">
          To get started.
        </p>
        <a href="pageF/index.html">pageF</a>
        {/* <div>
          <a href="pageS/index.html">pageS</a>
        </div> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
