import React, { Component } from 'react';
import { StitchesWrapper, Stitch } from '../styles/Stitches.styles';

class Stitches extends Component {
  render() {
    return (
      <StitchesWrapper>
        <Stitch left />
        <Stitch right />
      </StitchesWrapper>
    );
  }
}

export default Stitches;
