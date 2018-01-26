import React, { Component } from 'react';
import './styles.css';
import Landing from './Landing';
import AnswerButton from "./AnswerButton";
var firebase = require('firebase');

const JOINING = "JOINING";
const WAITING = "WAITING";
const PLAYING = "PLAYING";
const RESULT = "RESULT";
const END = "END";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      state: '',
      name: '',
      nameValue: '',
      isSignedIn: false,
      question: '',
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: '',
      answer: '',
      isRight: false,
      rank: 1,
    };
  }

  componentDidMount() {
    this.setState({state: JOINING});
  }

  handleSubmitName = () => {

    console.log('submit name');

    const name = this.state.nameValue;

    const ref = firebase.database().ref('/ullr/players/' + name);
    ref.set({
      name: name,
      points: 0,
      img: '',
      currentChoice: '',
      rank: 1,
    });

    this.setState({name: name, state: WAITING, isSignedIn: true});
    this.listenForState();

    const ref2 = firebase.database().ref('/ullr/players/' + this.state.name + "/rank");
    ref2.on('value', (e) => {
      if (e) {
        const rank = e.val();
        this.setState({rank: rank});
      }
    });
  };

  handleChangeName = (event) => {
    this.setState({nameValue: event.target.value});
  };

  handleChoiceClick = (choice) => {
    const ref = firebase.database().ref('/ullr/players/' + this.state.name);
    ref.update({
      currentChoice: choice
    });

    const answer = this.state.answer;
    this.setState({isRight: choice === answer})
  };

  listenForState = () => {
    const ref = firebase.database().ref('/ullr/state');
    // listen and sync with state of game
    ref.on('value', (e) => {
      console.log("New state!", e.val());
      if (e) {

        if (e.val() === PLAYING) {
          ref.parent.once("value").then(snapshot => {
            const gameData = snapshot.val();
            this.setState({state: e.val(), question: gameData.currentQuestion, answerA: gameData.currentAnswerA, answerB: gameData.currentAnswerB, answerC: gameData.currentAnswerC, answerD: gameData.currentAnswerD, answer: gameData.currentAnswer});
          })
        } else {
          this.setState({state: e.val()});
        }


      }
    });

    console.log("connected and listening to master");
  };

  render() {

    if (this.state.state === JOINING && !this.state.isSignedIn) {
      return (
          <div className="root-container">
            <Landing nameValue={this.state.nameValue} onChange={this.handleChangeName} onClick={this.handleSubmitName}/>
          </div>
      );
    } else if (this.state.state === WAITING || (this.state.state === JOINING && this.state.isSignedIn)) {
      return (<div className="root-container">
            <div className="container">
              <h1>Waiting for next question...</h1>
              <h4>{this.state.name}</h4>
            </div>
      </div>
      );
    } else if (this.state.state === PLAYING) {
      return (
          <div className="root-container">
            <div className="container">
              <h2>{this.state.question}</h2>

              <AnswerButton onClick={() => this.handleChoiceClick('a')} text={this.state.answerA}/>
              <AnswerButton onClick={() => this.handleChoiceClick('b')} text={this.state.answerB}/>
              <AnswerButton onClick={() => this.handleChoiceClick('c')} text={this.state.answerC}/>
              <AnswerButton onClick={() => this.handleChoiceClick('d')} text={this.state.answerD}/>

            </div>
          </div>
      );
    } else if (this.state.state === RESULT) {

      return (
        <div className="root-container">
          <div className="container">
            <h2>Correct Answer: {this.state.answer}</h2>
            <h3>{this.state.isRight ? "You got it right!" : "You got it wrong!"}</h3>
          </div>
        </div>
      );

    } else if (this.state.state === END) {

      let text = "";

      if (this.state.rank === 1) {
        text = "You got 1st place!";
      } else if (this.state.rank === 2) {
        text = "You got 2nd place!";
      } else if (this.state.rank === 3) {
        text = "You got 3rd place!";
      } else {
        text = "You got " + this.state.rank + "th place!";
      }

      return(
        <div className="root-container">
          <div className="container">
            <h2>{this.state.name}</h2>
            <h2>THANK YOU FOR PLAYING!</h2>
          </div>
        </div>
      );
    } else if (this.state.state === 'STARTING') {
      return (<div className="root-container">
            <div className="container">
              <h1>STARTING THE GAME!!!</h1>
            </div>
          </div>
      );
    } else {
      return null;
    }
  }
}

export default App;
