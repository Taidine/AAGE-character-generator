import React from 'react';

export function NameInput (props) {
    var default_value = props.default_value ? props.default_value : "";
    return (
      <div className="form-inline">
        <div className="form-group">
          <label htmlFor={"characterName"}>Name </label>
          <input type="text" className="form-control" id={"characterName"} placeholder="Name"
          value={default_value} onChange={props.handleChange} />
        </div>
      </div>
    );
}
