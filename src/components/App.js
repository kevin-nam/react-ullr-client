import React, { Component } from 'react';
import './styles.css';
import Landing from './Landing';
import Projects from './Projects';
import Footer from "./Footer";


class App extends Component {
  render() {
    return (
      <div className="root-container">
        <Landing/>
        <Projects/>
        <Footer/>
      </div>
    );
  }
}

export default App;
