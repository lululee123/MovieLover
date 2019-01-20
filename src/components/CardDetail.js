import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddCard } from '../actions/index';
import DatePicker from "react-datepicker";
import moment from "moment";
import "../../node_modules/react-datepicker/dist/react-datepicker.css";
import { withFirebase } from './Firebase';
import './CardDetail.scss';

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
    this.props.firebase
      .user(this.props.userId)
      .child(this.props.type)
      .push({
        "name": this.state.item.name,
        "time": this.state.item.time
      });
  }
  updateWanted = () => {
    this.props.firebase
      .user(this.props.userId)
      .child(this.props.type)
      .push({
        "name": this.state.item.name,
        "time": this.state.item.time
      });
  }

  render(){
    return (
      <div className="edit__box">
        <div className="closeBtn" onClick={() => {this.props.AddCard(!this.props.add)}}>x</div>
        <div>
          <input placeholder="Name" onChange = { (e) => {this.setState({
            item: {
              name: e.target.value,
              time: this.state.item.time
            }
          })} }/>
          <DatePicker
            selected = {this.state.item.time}
            onChange = {(event) => this.handleChange(event)}
            dateFormat = "YYYY-MM-dd"
          />
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
  return {add: state.AddCardReducer, userId: state.UserIdReducer, type: state.CardTypeReducer}
}
export default connect(mapStateToProps, {AddCard: AddCard})(withFirebase(CardDetail));