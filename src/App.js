import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        sentence:"hello",
    }
    // this.buttonClick = this.buttonClick.bind(this)
    
  }

  buttonClick = () => {
    if (this.state.sentence==="hello")
    {
      this.setState({
        sentence: "hey",
      })
  }else{
    this.setState({
      sentence: "hello",
    })
  }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.buttonClick}>press</button>
        <p>{this.state.sentence}</p>
      </div>
    );
  }
}

export default App;
