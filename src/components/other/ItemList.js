import React, { Component } from 'react';
import './ItemList.scss';

class ItemList extends Component{
  constructor(){
    super();
    this.state = {
      open: false
    }
  }
  toggle = () => {
    this.setState({
      open: !this.state.open
    })
  }
  render(){
    if (this.props.files){
      return (
        <div>
          <div className={`folder ${this.state.open ? 'open' : ''}`} onClick={this.toggle}>{this.props.name}</div>
          { this.state.open ? ( 
          <ul>
            {this.props.files.map((file) => {
              return <ItemList name={file.name} files={file.files} />
            })}
          </ul>) : null} 
        </div>  
      );
    }
    return <div >{this.props.name}</div>;
  }
}

export default ItemList;