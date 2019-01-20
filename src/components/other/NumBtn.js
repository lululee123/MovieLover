import React, { Component } from 'react';

class NumBtn extends Component{

  list = (item) => {
    return <div onClick = {() => this.props.input(item)}>{item}</div>;
  }
  render(){
    const items = this.props.value.map(this.list);
    return (
      <div>{items}</div>
    );
  }
}

export default NumBtn;