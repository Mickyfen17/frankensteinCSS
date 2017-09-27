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

const BoltHeadMiddle = glamorous.div({
  position: 'relative',
  height: '20px',
  background: '#d0dcbc',
  borderRadius: '4px',
});

const BoltHeadOuter = glamorous.div(props => ({
  height: '12px',
  background: props.bottom ? '#b2be9e' : '#e4f0d0',
  borderRadius: '4px',
  margin: props.top ? '0 0 -6px 0' : '-6px 0 0 0',
}));

class Bolts extends Component {
  render() {
    return (
      <BoltWrapper id="bolt-wrapper">
        <BoltHeadWrapper left>
          <BoltHeadOuter top />
          <BoltHeadMiddle />
          <BoltHeadOuter bottom />
        </BoltHeadWrapper>
        <BoltHeadWrapper right>
          <BoltHeadOuter top />
          <BoltHeadMiddle />
          <BoltHeadOuter bottom />
        </BoltHeadWrapper>
      </BoltWrapper>
    );
  }
}

export default Bolts;
