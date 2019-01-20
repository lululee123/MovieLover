import React, { Component } from 'react';
import NumBtn from './NumBtn.js';

class SumGame extends Component{
  constructor(){
    super();
    this.state = {
      sum: '?',
      value: ['?', '?', '?', '?', '?', '?']
    }
  }

  NumRender = () =>{
    let i;
    let j = this.state.value;
    for (i = 0; i < 6; i++){
      j[i] = Math.floor(Math.random() * 10) + 1;
    }

    this.setState({
      sum: 0,
      value: j
    })
  }

  handleNumInput = (item) => {
    let suming;

    if (this.state.sum == '?'){
      suming = item;
    }else{
      suming = parseInt(this.state.sum) + parseInt(item);
    }

    this.setState({
      sum: suming
    })
    
  }

  render(){
    return(
      <div>
        <div>{this.state.sum}</div>
        <NumBtn input = {this.handleNumInput} value = {this.state.value} />
        <button onClick = {this.NumRender}>START</button>
      </div>
    )
  }
}
export default SumGame;