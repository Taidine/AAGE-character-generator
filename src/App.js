import React, { Component } from 'react';
import './App.css';
import EditContainer from './Components/Edit.js'

class App extends Component {
  render() {
    return (
      <EditContainer store={this.props.store}/>
    );
  }
}

export default App;
