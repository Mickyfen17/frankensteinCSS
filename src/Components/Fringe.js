import React, { Component } from 'react';
import Stitches from './Stitches';
import { FringeWrapper, HairLeft, HairRight } from '../styles/Fringe.styles';

class Fringe extends Component {
  render() {
    return (
      <FringeWrapper>
        <HairLeft dark long left />
        <HairLeft dark short />
        <HairRight light long />
        <Stitches />
      </FringeWrapper>
    );
  }
}

export default Fringe;
