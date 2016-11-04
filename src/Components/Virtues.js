class Virtues extends Component {
  constructor() {
    super();
    this.state = {
        virtues: [{name: "Ego", max: 2, id:"v1"},
                  {name: "Hero", max: 2, id:"v2"},
                  {name: "", max: 2, id:"v3"}
        ],
        combined_max: 8
      };
  }
  handleValueChange(newValue, id) {
      const virtues = this.state.virtues.slice();
      virtues.map(v => {if (v.id = id) {v.max = newValue} });
      console.log(virtues);
      this.setState({virtues: virtues});
    };
  render () {
      return (
        <div className="Virtues">
          <h4>Virtues</h4>
          <div className="form-inline">
          {this.state.virtues.map(v => <Resource key={v.id} default_name={v.name} default_value={v.max} changeValue={this.handleValueChange}/> )}
          </div>
        </div>
      )
  }
}
