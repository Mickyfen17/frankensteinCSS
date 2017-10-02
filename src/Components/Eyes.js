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
        <EyeOutline right inner />
        <EyeShadow right />
        <Eye left />
        <EyeOutline left inner />
        <EyeShadow left />
      </EyeWrapper>
    );
  }
}

export default Eyes;
