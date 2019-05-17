import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { smurfMe } from "../actions/";
import AddSmurfs from "./AddSmurfs";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.smurfMe();
  }
  render() {
    console.log(this.props.smurfs);
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {this.props.smurfs.map(smurf => (
          <div key={smurf.id}>
            <p>{smurf.name}</p>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
          </div>
        ))}
        <AddSmurfs />
      </div>
    );
  }
}

const mapStateToProps = ({ smurfs, fetchingSmurfs }) => ({
  smurfs,
  fetchingSmurfs
});

export default connect(
  mapStateToProps,
  { smurfMe }
)(App);
