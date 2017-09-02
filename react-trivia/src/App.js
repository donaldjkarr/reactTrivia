import React, { Component } from 'react';
// import logo from './logo.svg';
import {Jumbotron} from './components/jumbotron';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Welcome to React</h2>
          <Jumbotron/>
      </div>
    );
  }
}

export default App;
