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
  borderRadius: '4px',
});

const Eye = glamorous.div(props => ({
  position: 'absolute',
  right: props.right && '35px',
  left: props.left && '35px',
  zIndex: 2,
  height: '22px',
  width: '43px',
  background: '#d0dcbc',
  borderBottomLeftRadius: '50px',
  borderBottomRightRadius: '50px',
}));

const EyeOutline = glamorous.div(props => ({
  position: 'absolute',
  right: props.right && '32px',
  left: props.left && '32px',
  zIndex: props.inner && 1,
  height: props.inner ? '27px' : '33px',
  width: props.inner ? '49px' : '55px',
  background: props.inner ? '#4c474b' : '#383337',
  borderBottomLeftRadius: '50px',
  borderBottomRightRadius: '50px',
}));

class Eyes extends Component {
  render() {
    return (
      <EyeWrapper>
        <EyeBrows />
        <Eye right />
        <EyeOutline right inner />
        <EyeOutline right />
        <Eye left />
        <EyeOutline left inner />
        <EyeOutline left />
      </EyeWrapper>
    );
  }
}

export default Eyes;
