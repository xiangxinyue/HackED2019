import React,{Component} from 'react';
import ReactDOM from 'react-dom';
#see it online
import logo from './damion_lay_on_couch.png';
import './App.css';

class Page1 extends Component {

  constructor(){
    super();
    this.state = {
      msg: "Damion does not care, as he lays on his chair. Humans are not worth his time, at least when it’s not time to dine.",
      msg2: "Now as he rolls over, he enters a state of slumber. In his dreams, he eats sea breams and wants more food. “Meow!” he screams. After his long hours of rest, Damion awakes depressed. His humans won’t give him grub, don’t they know that he’s a chub? All Damion can do now, is go on the prowl. He searches for crumbs to satisfy his tum as the night comes."
    };
    // (BELOW) only if using es5 method (no arrow funct)
    //this.handleClick = this.handleClick.bind(this, msg);
  }

  handleClick(msg){
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
          <img src={logo} className="App-logo" alt="logo" />
          <p className="story-paragraph" onClick={() => this.handleClick(this.state.msg)}> {this.state.msg}
          </p>
          <p className="story-paragraph" onClick={() => this.handleClick(this.state.msg2)}> {this.state.msg2}
          </p>
          <div className="button-container">
          <button id="#pageF-choiceA"><a href="./page0/index.html">Search for crumbs in the food bowl.</a></button>
          <button id='#pageF-choiceB'><a href="./page1/index.html">Search for crumbs in the pantry.</a></button>
          <button id="#pageF-choiceC"><a href="/index.html">Go back to the beginning!</a></button>
          </div>
        </header>
      </div>
    );
  }
}

ReactDOM.render(<Page1 />, document.getElementById('root'));
