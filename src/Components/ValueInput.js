import { connect } from 'react-redux';

class ValueInput extends Component {
  onFieldChange(field, value) {
      this.props.dispatch( {type: this.props.type,
                            id: this.props.id,
                            field: value}
      );
  },
  render() {
    var def_input = '';
    var notes_input = '';
    if (this.props.def) {
      def_input = <div className="form-group">
        <label htmlFor={"defInput_"+ this.props.id}>Default value</label>
        <input type="text" className="form-control" id={"defInput_"+ this.props.id} placeholder="" value={this.props.def} onChange={(e) => this.onFieldChange("def", e.target.value)}/>
      </div>;
    }
    if (this.props.notes) {
      notes_input = <div className="form-group">
        <label htmlFor={"notesInput_"+ this.props.id}>Default value</label>
        <input type="text" className="form-control" id={"notesInput_"+ this.props.id} placeholder="" value={this.props.notes} onChange={(e) => this.onFieldChange("notes", e.target.value)}/>
      </div>;
    }
    return (
      <div>
        <div className="form-group">
          <label htmlFor={"nameInput_"+ this.props.id} className="sr-only">Name</label>
          <input type="text" className="form-control" id={"nameInput_"+ this.props.id} placeholder="Name" value={this.props.name} onChange={() => this.onFieldChange("name", e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor={"valueInput_"+ this.props.id} className="sr-only">Value</label>
          <input type="number" step="1" className="form-control" id={"valueInput_"+ this.props.id} placeholder="Value" value={this.props.value} onChange={() => this.onFieldChange("value", e.target.value)}/>
        </div>
      </div>
    )
  }
}

const ValueInput = connect()(ValueInput);

export default ValueInput;
