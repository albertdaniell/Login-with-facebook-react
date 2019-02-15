import React, { Component } from 'react';
import Facebook from './components/Facebook'

class App extends Component {
  render() {
    return (
      <div className="App">

        <h1>Login with facebook API</h1>
        <hr/>
        <Facebook/>
        
      </div>
    );
  }
}

export default App;
