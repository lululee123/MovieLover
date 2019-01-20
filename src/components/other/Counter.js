import React, { Component } from 'react';
import Calc from './Calc.js'

class Counter extends Component {
  constructor(){
    super()

    this.state = {
      sum: 0
    }
  }

  addnum = () =>{
    this.setState({
      sum: parseInt(this.state.sum) + 1
    })
  }

  decreasenum = () =>{
    this.setState({
      sum: parseInt(this.state.sum) - 1
    })
  }

  resetnum = () =>{
    this.setState({
      sum: 0
    })
  }

  render() {
    return (
      <div className="Main">
        <div>{this.state.sum}</div>
        <Calc 
          sum = {this.state.sum} 
          addnum = {this.addnum} 
          decreasenum = {this.decreasenum} 
          resetnum = {this.resetnum}/>
      </div>
    );
  }
}

export default Counter;
