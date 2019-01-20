import React, { Component } from 'react';

class Calc extends Component {
  render() {
    return (
     <div>
      <div onClick={this.props.addnum}>+</div>
      <div onClick={this.props.resetnum}>Reset</div>
      <div onClick={this.props.decreasenum}>-</div>
     </div>
    );
  }
}

export default Calc;