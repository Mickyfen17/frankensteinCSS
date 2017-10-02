import React, { Component } from 'react';
import {
  EyeWrapper,
  EyeBrows,
  Eye,
  EyeOutline,
  EyeShadow,
} from '../styles/Eye.styles';

class Eyes extends Component {
  render() {
    return (
      <EyeWrapper>
        <EyeBrows />
        <Eye right />
        <Eye left />
      </EyeWrapper>
    );
  }
}

export default Eyes;
