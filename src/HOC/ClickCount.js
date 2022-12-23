import React, { Component } from "react";
import UpdatedComponent from "./Hoc";

class ClickCount extends Component {
  render() {
    const {count, incrementCount} = this.props
    return (
      <div>
        <button onClick={incrementCount}>Clicked {count} times</button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCount);


// call this component into app.js