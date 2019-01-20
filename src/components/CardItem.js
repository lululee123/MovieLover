import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFirebase } from './Firebase';
import './CardItem.scss';

class CardItem extends Component{
  constructor(props){
    super(props)
    this.state = {
      edit: false,
      item:{
        name: this.props.detail.name,
        time: this.props.detail.time
      }
    }
  }

  set = (e) => {
    this.props.firebase
      .user(this.props.userId)
      .child(this.props.type)
      .child(e)
      .set({
        "name": this.state.item.name,
        "time": this.state.item.time
      });
  }

  delete = (e) => {
    this.props.firebase
      .user(this.props.userId)
      .child(this.props.type)
      .child(e)
      .remove();
  }

  render(){
    return (
      <div className={this.state.edit ? "cardBox__edit" : "cardBox"}>
        {this.state.edit ? '' : <div className="edit" onClick = {() => {this.setState({edit: !this.state.edit})}}></div> }
        {this.state.edit ? 
          <input onChange = {(e) => {this.setState({item:{name: e.target.value, time: this.state.item.time}})}} 
          value = {this.state.item.name} /> : 
          <div>名稱: {this.state.item.name}</div> }
        {this.props.type === 'watch' ? this.state.edit ? 
          <input onChange = {(e) => {this.setState({item:{time: e.target.value, name: this.state.item.name}})}} 
          value = {this.state.item.time} /> :
          <div>觀看時間: {this.state.item.time}</div> : '' }
        {this.state.edit ? 
          <div className="saveBtn" onClick = {() => {
            this.setState({edit: !this.state.edit});
            this.set(this.props.id);
          }}>Save</div> : '' }    
        {this.state.edit ? 
          <div className="deleteBtn" onClick = {() => {
            this.setState({edit: !this.state.edit});
            this.delete(this.props.id);
          }}>Delete</div> : '' }      
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {userId: state.UserIdReducer, type: state.CardTypeReducer}
}
export default connect(mapStateToProps)(withFirebase(CardItem));