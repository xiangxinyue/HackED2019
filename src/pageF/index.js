import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//import responsiveVoice from 'responsivevoice';
import './App.css';

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
    console.log("TEST");
    let synt = new SpeechSynthesisUtterance(msg);
    synt.lang = 'en-GB';
    speechSynthesis.speak(synt);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p onClick={() => this.handleClick(this.state.msg)}> {this.state.msg}
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
