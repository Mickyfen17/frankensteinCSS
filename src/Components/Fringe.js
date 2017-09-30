import React, { Component } from 'react';
import glamorous from 'glamorous';
import Stitches from './Stitches';

const FringeWrapper = glamorous.div({
  position: 'absolute',
  top: '0px',
});

const Hair = glamorous.div(props => ({
  position: 'absolute',
  height: props.short ? '14px' : '18px',
  width: '8px',
  background: props.dark ? '#2c2b2d' : '#363537',
  borderBottomLeftRadius: '15px',
}));

const HairLeft = glamorous(Hair)(props => ({
  left: props.left ? '46px' : '72px',
}));

const HairRight = glamorous(Hair)(props => ({
  left: '150px',
  transform: 'scale(-1, 1)',
}));

class Fringe extends Component {
  render() {
    return (
      <FringeWrapper>
        <HairLeft dark long left />
        <HairLeft dark short />
        <HairRight light long />
        <Stitches />
      </FringeWrapper>
    )
  }
}

export default Fringe;