import React, { Component } from 'react';
import CardAdd from './CardAdd';
import Card from './Card';
import { connect } from 'react-redux';
import { AddCardType } from '../actions/index';
import './css/CardCom.scss';

class CardCom extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      active: this.props.type
    }
  }

  switch_to_watch = () => {
    this.setState({
      active: 'watch'
    })
  }

  switch_to_wanted = () => {
    this.setState({
      active: 'wanted'
    })
  }

  render(){
    return (
      <div className="card__page ">
        <div className="navBtn">
          <div 
            className={`navBtn__item ${this.state.active === 'watch' ? 'active' : ''}`} 
            onClick = {() => {
            this.props.AddCardType('watch');
            this.switch_to_watch();
            }}>
            已觀看
          </div>
          <div 
            className={`navBtn__item ${this.state.active === 'wanted' ? 'active' : ''}`} 
            onClick = {() => {
            this.props.AddCardType('wanted');
            this.switch_to_wanted();
            }}>
            待觀看
          </div>
        </div>
        <div className="content" >
          <CardAdd Firebase={this.props.Firebase} />
          <Card Firebase={this.props.Firebase} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {type: state.CardTypeReducer}
}
export default connect(mapStateToProps, { AddCardType: AddCardType })(CardCom);
