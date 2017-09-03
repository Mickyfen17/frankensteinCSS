import React, { Component } from 'react';
import glamorous from 'glamorous';

const BoltWrapper = glamorous.div({
  display: 'flex',
});

const BoltHead = glamorous.div(props => ({
  position: 'absolute',
  right: props.right && '320px',
  left: props.left && '320px',
  bottom: '220px',
  height: '22px',
  width: '15px',
  background: '#d0dcbc',
  borderRadius: '4px',
}));

class Bolts extends Component {
  render() {
    return (
      <BoltWrapper id="bolt-wrapper">
        <BoltHead right />
        <BoltHead left />
      </BoltWrapper>
    );
  }
}

export default Bolts;
