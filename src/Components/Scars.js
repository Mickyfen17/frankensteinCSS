import React, { Component } from 'react';
import { ScarWrapper, Scar, ScarOuter, ScarInner } from '../styles/Scar.styles';

class Scars extends Component {
  render() {
    return (
      <ScarWrapper>
        <Scar long dark />
        <ScarOuter short dark left />
        <ScarInner short light left />
        <ScarInner short light right />
        <ScarOuter short light right />
      </ScarWrapper>
    );
  }
}

export default Scars;
