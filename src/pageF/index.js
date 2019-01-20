import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import logo from '../aArrow.png';

class PageF extends Component {

  constructor(){
    super();
    this.state = {
      msg: "Damion is a cat. He is very fat, and doesn’t know what to do about that."
    };
    // (BELOW) only if using es5 method (no arrow funct)
    //this.handleClick = this.handleClick.bind(this, msg);
  }

  handleClick(msg){
    {/*Runs built-in browser Speech Synthesis API for Text-to-Speech functionality
      whenever the story text (NOT the buttons) are clicked!
      For more documentation: see the following:
      - https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
      - https://flaviocopes.com/speech-synthesis-api/
      - https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
       */}
    if (speechSynthesis.speaking){
      speechSynthesis.cancel();
    }
    let synt = new SpeechSynthesisUtterance(msg);
    synt.lang = 'en-GB';
    speechSynthesis.speak(synt);
  }

  handleStopSpeak(){
    if (speechSynthesis.speaking){
      speechSynthesis.cancel();
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button className="stop-speak" onClick={() => this.handleStopSpeak()}> Want silence? Click here! </button>
          <div className="instructions">
          <h1 className="clickhere"> CLICK HERE TO HEAR </h1>
          <img src={logo} className="arrow" alt="" />
          </div>
          <p className="story-paragraph" onClick={() => this.handleClick(this.state.msg)}> {this.state.msg}
          </p>
          <div className="button-container">
          <button id="#pageF-choiceA"><a href="./page0/index.html">Eat more food</a></button>
          <button id='#pageF-choiceB'><a href="./page1/index.html">Scratch owner</a></button>
          <button id="#pageF-choiceC"><a href="/index.html">Go back to the beginning!</a></button>
          </div>
        </header>
      </div>
    );
  }
}

ReactDOM.render(<PageF />, document.getElementById('root'));
