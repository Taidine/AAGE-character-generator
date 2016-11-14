import React, { Component } from 'react';
import { NameInput } from './Name';
import { connect } from 'react-redux';

class Edit extends Component {
  render() {
    return (
      <div className="container">
        <div className="starter-template">
          <div className="header">
            <h2>AAGE Character Generator</h2>
          </div>
          <div className="App-body body">
            Enter your character information below.
            <br />
            <NameInput default_value={this.props.name} handleChange={(e) => this.props.dispatch({type: 'EDIT_NAME', name: e.target.value}) }/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state}
}

const EditContainer = connect(
  mapStateToProps,
  null
)(Edit)

export default EditContainer;
