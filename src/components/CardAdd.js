import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddCard } from '../actions/index';
import CardDetail from './CardDetail';
import './css/CardAdd.scss';

class CardAdd extends Component{
  render(){
    if (this.props.add){
      return (
        <div>
          <div className="CardAdd">+</div>
          <div className="CardAdd__edit">
            <CardDetail />
          </div>
        </div>
      )
    }
    return (
      <div className="CardAdd" onClick={() => {this.props.AddCard(!this.props.add)}}>+</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {add: state.AddCardReducer};
}
export default connect(mapStateToProps, {AddCard: AddCard})(CardAdd);