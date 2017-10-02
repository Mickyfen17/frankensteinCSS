import React, { Component } from 'react';
import Eyes from './Eyes';
import Bolts from './Bolts';
import Scars from './Scars';
import Fringe from './Fringe';
import Header from './Header';
import Section from '../styles/Section.styles';
import Hair from '../styles/Hair.styles';
import { Face, Mouth, Neck } from '../styles/Face.styles';

class App extends Component {
  render() {
    return (
      <Section>
        <Header />
        <Hair />
        <Face>
          <Fringe />
          <Scars />
          <Eyes />
          <Mouth />
        </Face>
        <Neck />
        <Bolts />
      </Section>
    );
  }
}

export default App;
