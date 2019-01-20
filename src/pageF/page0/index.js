import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './food_dish.png';
import './App.css';

class Page0 extends Component {
  constructor(){
    super();
    this.state = {
      msg: "Damion takes a munch at his well deserved brunch. He eats too much, and as such, becomes a large ball of fluff.",
      msg2: "Now as he rolls over, he enters a state of slumber. In his dreams, he eats sea breams and wants more food.“Meow!” he screams!",
      msg3: "After his long hours of rest, Damion awakes depressed. His humans won’t give him grub, don’t they know that he’s a chub?",
      msg4: "All Damion can do now, is go on the prowl. He searches for crumbs, to satisfy his tum, as the night comes."
    };
  }

  handleClick(msg){
    let synt = new SpeechSynthesisUtterance(msg);
    synt.lang = 'en-GB';
    speechSynthesis.speak(synt);
  }

  handleClick2(msg2){
    let synt = new SpeechSynthesisUtterance(msg2);
    synt.lang = 'en-GB';
    speechSynthesis.speak(synt);
  }

  handleClick3(msg3){
    let synt = new SpeechSynthesisUtterance(msg3);
    synt.lang = 'en-GB';
    speechSynthesis.speak(synt);
  }

  handleClick4(msg4){
    let synt = new SpeechSynthesisUtterance(msg4);
    synt.lang = 'en-GB';
    speechSynthesis.speak(synt);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />


        <p className="story-paragraph" onClick={() => this.handleClick(this.state.msg)}> {this.state.msg}
          </p>

        <p className="story-paragraph" onClick={() => this.handleClick2(this.state.msg2)}> {this.state.msg2}
          </p>

        <p className="story-paragraph" onClick={() => this.handleClick3(this.state.msg3)}> {this.state.msg3}
          </p>

        <p className="story-paragraph" onClick={() => this.handleClick4(this.state.msg4)}> {this.state.msg4}
          </p>

          <div className="button-container">
          <button id="#pageF-choiceA"><a href="./page0/index.html">Search for crumbs in food bowl</a></button>
          <button id='#pageF-choiceB'><a href="./page1/index.html">Search for crumbs in pantry</a></button>
          <button id="#pageF-choiceC"><a href="/index.html">Go back to the beginning!</a></button>
          </div>


        </header>
				<div><a href="/index.html">to home</a></div>
				<div><a href="./../page1/index.html">to page1</a></div>
      </div>
    );
  }
}

ReactDOM.render(<Page0 />, document.getElementById('root'));
