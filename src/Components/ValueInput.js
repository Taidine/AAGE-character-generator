class ValueInput extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor={"nameInput_"+ this.key} className="sr-only">Name</label>
          <input type="text" className="form-control" id={"nameInput_"+ this.key} placeholder="Name" value={this.props.default_name} onChange={() => this.props.changeName()} />
        </div>
        <div className="form-group">
          <label htmlFor={"valueInput_"+ this.key} className="sr-only">Value</label>
          <input type="number" step="1" className="form-control" id={"valueInput_"+ this.key} placeholder="Value" value={this.props.default_value} onChange={() => this.props.changeValue()}/>
        </div>
      </div>
    )
  }
}
