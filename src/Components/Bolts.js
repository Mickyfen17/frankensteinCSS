import React, { Component } from 'react';
import {
  BoltWrapper,
  BoltHeadWrapper,
  BoltShaftWrapper,
  BoltMiddle,
} from '../styles/Bolt.styles';

class Bolts extends Component {
  render() {
    return (
      <BoltWrapper>
        <BoltHeadWrapper left>
          <BoltMiddle head />
        </BoltHeadWrapper>
        <BoltShaftWrapper left>
          <BoltMiddle />
        </BoltShaftWrapper>
        <BoltShaftWrapper right>
          <BoltMiddle />
        </BoltShaftWrapper>
        <BoltHeadWrapper right>
          <BoltMiddle head />
        </BoltHeadWrapper>
      </BoltWrapper>
    );
  }
}

export default Bolts;
