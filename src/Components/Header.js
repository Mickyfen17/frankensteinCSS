import React, { Component } from 'react';
import glamorous from 'glamorous';

const Title = glamorous.h1({
  fontFamily: 'Nosifer, cursive',
  fontSize: '2.5em',
  color: '#2c2b2d',
  marginBottom: '30px',
  '@media(max-width: 775px)': {
    fontSize: '1.8em',
  },
  '@media(max-width: 550px)': {
    fontSize: '1.2em',
  },
  '@media(max-width: 450px)': {
    fontSize: '1.0em',
  },
});

const Header = () => {
  return <Title>Frankenstein's Monster</Title>;
};

export default Header;
