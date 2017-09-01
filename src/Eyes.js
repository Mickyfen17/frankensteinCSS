import React, { Component } from 'react';
import glamorous from 'glamorous';

const EyeWrapper = glamorous.div({
  position: 'absolute',
  top: '60px',
  left: '0',
  right: '0',
});

const EyeBrows = glamorous.div({
  height: '12px',
  width: '160px',
  margin: '0 auto',
  background: 'linear-gradient(to right, #2c2b2d 50%, #363537 50%)',
  borderRadius: '10px',
});

const LeftEye = glamorous.div({
  position: 'absolute',
  left: '35px',
  height: '25px',
  width: '40px',
  background: '#FFF',
  borderBottomLeftRadius: '50px',
  borderBottomRightRadius: '50px',
});

const RightEye = glamorous.div({
  position: 'absolute',
  right: '35px',
  height: '25px',
  width: '40px',
  background: '#FFF',
  borderBottomLeftRadius: '50px',
  borderBottomRightRadius: '50px',
});

class Eyes extends Component {
  render() {
    return (
      <EyeWrapper>
        <EyeBrows />
        <LeftEye />
        <RightEye />
      </EyeWrapper>
    );
  }
}

export default Eyes;
