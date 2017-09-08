import React, { Component } from 'react';
// import logo from './logo.svg';
import {Jumbotron} from './components/jumbotron';
import {Podium} from './components/podium';
import {ScoreCard} from './components/scorecard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>This Is Jeopardy</h2>
          <Jumbotron/>
          <Podium/>
          <ScoreCard/>
      </div>
    );
  }
}

export default App;
