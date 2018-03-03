import React, { Component } from 'react';
import styled from 'styled-components';

export default function loggify(Wrapped) {
  const originals = {};
  const methodsToLog = ['componentWillMount'];
  return class extends Component {
    render() {
      return (
        <LoggerContainer>
          <H2>{Wrapped.displayName} is loggified</H2>
          <Wrapped {...this.props} />

        </LoggerContainer>
      );
    }
  };
}

const LoggerContainer = styled.div`
  color:#ff8935;
  
  
  `;
LoggerContainer.displayName = 'LoggerContainer';

const H2 = styled.h2`
  color:blue;
  line-height:1.2em;
  
  `;
H2.displayName = 'H2';
