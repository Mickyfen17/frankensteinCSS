import React, { Component } from 'react';
import glamorous from 'glamorous';

const BoltWrapper = glamorous.div({
  position: 'absolute',
  bottom: '220px',
  display: 'flex',
  justifyContent: 'space-between',
  width: '200px',
});

const BoltHeadWrapper = glamorous.div(props => ({
  width: '18px',
  margin: props.right ? '0 10px 0 0' : '0 0 0 10px',
}));

const BoltShaftWrapper = glamorous.div(props => ({
  position: 'absolute',
  top: '8px',
  right: props.right && '28px',
  left: props.left && '28px',
  width: '22px',
}));

const BoltMiddle = glamorous.div(props => ({
  position: 'relative',
  height: props.head ? '20px' : '8px',
  background: '#d0dcbc',
  borderRadius: props.head ? '4px' : '0',
}));

const BoltHeadOuter = glamorous.div(props => ({
  height: '12px',
  background: props.bottom ? '#b2be9e' : '#e4f0d0',
  borderRadius: '4px',
  margin: props.top ? '0 0 -6px 0' : '-6px 0 0 0',
}));

const BoltShaftOuter = glamorous(BoltHeadOuter)(props => ({
  height: '8px',
  borderRadius: '0',
  margin: props.top ? '0 0 -4px 0' : '-4px 0 0 0',
}));

class Bolts extends Component {
  render() {
    return (
      <BoltWrapper id="bolt-wrapper">
        <BoltHeadWrapper left>
          <BoltHeadOuter top head />
          <BoltMiddle head />
          <BoltHeadOuter bottom head />
        </BoltHeadWrapper>
        <BoltShaftWrapper left>
          <BoltShaftOuter top />
          <BoltMiddle />
          <BoltShaftOuter bottom />
        </BoltShaftWrapper>
        <BoltShaftWrapper right>
          <BoltShaftOuter top />
          <BoltMiddle />
          <BoltShaftOuter bottom />
        </BoltShaftWrapper>
        <BoltHeadWrapper right>
          <BoltHeadOuter top head />
          <BoltMiddle head />
          <BoltHeadOuter bottom head />
        </BoltHeadWrapper>
      </BoltWrapper>
    );
  }
}

export default Bolts;
