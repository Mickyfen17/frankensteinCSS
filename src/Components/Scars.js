import React, { Component } from 'react';
import glamorous from 'glamorous';

const ScarWarpper = glamorous.div({
  position: 'absolute',
  top: '30px',
  right: '30px',
  transform: 'rotate(-5deg)',
});

const Scar = glamorous.div(props => ({
  position: props.short && 'absolute',
  top: props.short && '0px',
  height: '6px',
  width: props.long ? '90px' : '20px',
  background: props.dark ? '#67923c' : '#7ba650',
  borderRadius: '2px',
  transform: props.short && 'rotate(-90deg)',
}));

const ScarOuter = glamorous(Scar)(props => ({
  left: props.left && '5px',
  right: props.right && '5px',
}));

const ScarInner = glamorous(Scar)(props => ({
  left: props.left && '25px',
  right: props.right && '25px',
}));

class Scars extends Component {
  render() {
    return (
      <ScarWarpper>
        <Scar long dark />
        <ScarOuter short dark left />
        <ScarInner short light left />
        <ScarInner short light right />
        <ScarOuter short light right />
      </ScarWarpper>
    );
  }
}

export default Scars;
