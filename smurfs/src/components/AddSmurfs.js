import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class AddSmurfs extends React.Component {
  state = {
    name: "",
    age: "",
    height: "",
    id: ""
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      id: this.props.smurfs.length + 1
    });
  }

  addSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state);
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.state);
    console.log(this.props.smurfs.length);
    return (
      <div className="bigSmurfs">
        <p>Fill in to add smurf</p>
        <form onSubmit={this.addSmurf}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="height"
            placeholder="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
          <button>Add Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  adding_smurf: state.adding_smurf,
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { addSmurf }
)(AddSmurfs);
