import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("Pure component");
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    );
  }
}

export default PureComp;

/*
A pure component implenents shouldComponentUpdate lifecycle method with shallow props and state comparison.

Shallow Comparision of previous state and props  with current state and props. 

If there is difference the component re-renders. otherwise never re-renders.

Performance boosts.

*/