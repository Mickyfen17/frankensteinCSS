import React, { Component } from 'react';
import glamorous from 'glamorous';

const BoltWrapper = glamorous.div({
  position: 'absolute',
  bottom: '180px',
  display: 'flex',
});

const BoltHead = glamorous.div(props => ({
  position: 'absolute',
  right: props.right && '70px',
  left: props.left && '70px',
  bottom: '40px',
  height: '22px',
  width: '15px',
  background: '#d0dcbc',
  borderRadius: '4px',
}));

const BoltHeadOuter = glamorous.div(props => ({
  position: 'absolute',
  height: '12px',
  width: '15px',
  top: props.bottom && '15px',
  bottom: props.top && '15px',
  background: props.bottom ? '#b2be9e' : '#e4f0d0',
  borderRadius: '4px',
}));

class Bolts extends Component {
  render() {
    return (
      <BoltWrapper id="bolt-wrapper">
        <BoltHead right>
          <BoltHeadOuter right top />
          <BoltHeadOuter right bottom />
        </BoltHead>
        <BoltHead left>
          <BoltHeadOuter left top />
          <BoltHeadOuter left bottom />
        </BoltHead>
      </BoltWrapper>
    );
  }
}

export default Bolts;
