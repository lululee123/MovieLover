import React from 'react';
import { connect } from 'react-redux';
import { AddCard } from '../actions/index';
import CardDetail from './CardDetail';
import './css/CardAdd.scss';

const CardAdd = (props) => {
  if (props.add){
    return (
      <div>
        <div className="CardAdd__edit">
          <CardDetail Firebase={props.Firebase} />
        </div>
      </div>
    )
  }
  return (
    <div className="CardAdd" onClick={() => {props.AddCard(!props.add)}}>+</div>
  )
}

const mapStateToProps = (state) => {
  return {add: state.AddCardReducer};
}
export default connect(mapStateToProps, {AddCard: AddCard})(CardAdd);