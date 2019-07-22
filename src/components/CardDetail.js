import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddCard } from '../actions/index';
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import './css/CardDetail.scss';

class CardDetail extends Component{
  constructor(){
    super();
    this.state = {
      item: {
        name: '',
        time: moment(new Date()).format('YYYY-MM-DD')
      }
    }
  }

  handleChange = (date) => {
    this.setState({
      item:{
        name: this.state.item.name,
        time: moment(date).format('YYYY-MM-DD')
      }
    });
  }
  
  updateWatch = () => {
    this.props.Firebase
      .user(this.props.firebaseUID)
      .child(this.props.type)
      .push({
        "name": this.state.item.name,
        "time": this.state.item.time
      });
  }
  updateWanted = () => {
    this.props.Firebase
      .user(this.props.firebaseUID)
      .child(this.props.type)
      .push({
        "name": this.state.item.name,
        "time": this.state.item.time
      });
  }

  render(){
    return (
      <div className="edit__box">
        <div className="closeBtn" onClick={() => {this.props.AddCard(!this.props.add)}}>&#10060;</div>
        <div>
          <input placeholder="Name" onChange = { (e) => {this.setState({
            item: {
              name: e.target.value,
              time: this.state.item.time
            }
          })} }/>
          {
            this.props.type === 'watch' ? 
            <DatePicker
            value = {this.state.item.time}
            onChange = {(event) => this.handleChange(event)}
            dateFormat = "YYYY-MM-dd"
            /> : ''
          }
        </div>
        <div className="addBtn" onClick={() => {
          if (this.props.type === 'wanted'){
            this.props.AddCard(!this.props.add);
            this.updateWanted();
          }else{
            this.props.AddCard(!this.props.add);
            this.updateWatch();
          }
        }}>Add</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    add: state.AddCardReducer, 
    type: state.CardTypeReducer,
    firebaseUID: state.CheckLoginReducer.uid
  }
}

export default connect(mapStateToProps, {AddCard: AddCard})(CardDetail);