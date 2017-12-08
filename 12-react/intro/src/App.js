import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import HelloUser from './HelloUser';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <HelloUser name="Greg" />
        <HelloUser name="Roy" />
        <HelloUser name="Groucho" />
      </div>
    );
  }
}

export default App;
