import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log("Regular component");
    return (
      <div>
        Regular Component {this.props.name}
      </div>
    );
  }
}

export default RegComp;

/*
A regular component does not implement the shouldComponentUpdate method. It always returns true by default.
*/