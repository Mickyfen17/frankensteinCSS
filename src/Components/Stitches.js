import React, { Component } from 'react';
import glamorous from 'glamorous';

const StitchesWrapper = glamorous.div({
  display: 'block',
});

const Stitch = glamorous.div(props => ({
  position: 'absolute',
  top: '-10px',
  left: props.left ? '25px' : '170px',
  height: '20px',
  width: '10px',
  background: '#d0dcbc',
  borderRadius: '10px',
  boxShadow: '0 3px #b2be9e, 0 -3px #e4f0d0',
}));

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
