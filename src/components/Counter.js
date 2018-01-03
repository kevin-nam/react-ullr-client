import React, { Component } from 'react';
import './styles.css';
var FontAwesome = require('react-fontawesome');
var firebase = require('firebase');

class Counter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      plusOnes: [],
      indCount: 0,
      loading: true,
    };

    this.updateCounter = this.updateCounter.bind(this);

  }

  componentDidMount() {
    const ref = firebase.database().ref('/counter/');
    ref.once('value', (snapshot) => {
      if (snapshot.hasChild('count')) {
        console.log('got count');
        this.setState({count: snapshot.val().count, loading: false});
      } else {
        ref.set({count: 0});
        this.setState({loading: false});
      }
    });
    window.addEventListener('beforeunload', this.updateCounter);
  }

  componentWillUnmount() {
    this.updateCounter();
    window.removeEventListener('beforeunload', this.updateCounter);
  }

  updateCounter() {
    if (this.state.indCount > 0) {
      const newCount = {count: this.state.count};
      const ref = firebase.database().ref('/counter/');
      ref.set(newCount);
    }
  }

  onClickHandler = () => {
    let count = this.state.count;
    let indCount = this.state.indCount;
    let random = 18 - Math.random() * 10;

    const plusOne = (<div key={count} style={{right: random}} className="plus-one">+1</div>);
    this.state.plusOnes.push(plusOne);
    this.setState({count: count + 1, indCount: indCount + 1});

    setTimeout(() => {
      this.state.plusOnes.pop();
      this.setState(this.state)}, 750);
  };

  render() {

    if (!this.state.loading) {
      return (
          <div onClick={this.onClickHandler} className="counter">
            <h3>{this.state.count}</h3>
            <FontAwesome className="icon" size='2x' name='coffee'/>
            {this.state.plusOnes.map(one => (one))}
          </div>
      );
    } else {
      return (
          <div className="counter">
            <FontAwesome spin className="icon" size='2x' name='spinner'/>
          </div>
      )
    }
  }
}

export default Counter;
