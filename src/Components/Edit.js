import React, { Component } from 'react';

class Edit extends Component {
  constructor() {
    super();
    this.state = {
        name: "",
        virtues: [],
        skills: [],
        powers:[]
      };
  }
  changeName(name) {
    this.setState({name: name});
  }
  render() {
    return (
      <div className="container">
        <div className="starter-template">
          <div className="header">
            <h2>AAGE Character Generator</h2>
          </div>
          <div className="App-body body">
            Stuff here.
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
