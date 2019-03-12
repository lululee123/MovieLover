import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFirebase } from './Firebase';
import './css/CardItem.scss';

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

  move = (e) => {
    //remove
    this.props.firebase
      .user(this.props.userId)
      .child(this.props.type)
      .child(e)
      .remove();


    //add to watch  
    this.props.firebase
      .user(this.props.userId)
      .child('watch')
      .child(e)
      .set({
        "name": this.state.item.name,
        "time": this.state.item.time
      });  
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
        {this.props.type === 'wanted' ? this.state.edit ? 
          <div className="moveBtn" onClick = {() => {
            this.setState({edit: !this.state.edit});
            this.move(this.props.id);
          }}>移至已觀看</div> : '' : ''}
        {this.state.edit ? 
          <div className="saveBtn" onClick = {() => {
            this.setState({edit: !this.state.edit});
            this.set(this.props.id);
          }}>儲存</div> : '' }    
        {this.state.edit ? 
          <div className="deleteBtn" onClick = {() => {
            this.setState({edit: !this.state.edit});
            this.delete(this.props.id);
          }}>刪除</div> : '' }      
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {userId: state.UserIdReducer, type: state.CardTypeReducer}
}
export default connect(mapStateToProps)(withFirebase(CardItem));