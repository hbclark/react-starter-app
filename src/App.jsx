import React, { Component } from 'react';
import loggify from './loggify';

class App extends Component {
  render() {
    // console.log(this.state);
    return <div>Hello React LifeCycle!</div>;
  }
}

App.defaultProps = {
  whatcandidoforu: []
};
App.displayName = "App";
App = loggify(App);

export default App;
