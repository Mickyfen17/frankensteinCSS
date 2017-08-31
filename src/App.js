import React, { Component } from 'react';
import glamorous from 'glamorous';
import './App.css';

const Title = glamorous.h1({
  fontSize: '2em',
  color: 'red',
  textAlign: 'center',
  padding: 10,
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title>TESTING THE TITLE WITH GLAMOROUS</Title>
      </div>
    );
  }
}

export default App;
