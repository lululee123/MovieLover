import React, { Component } from 'react';
import CardAdd from './CardAdd';
import Card from './Card';
import { connect } from 'react-redux';
import { AddCardType } from '../actions/index';

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
      <div style = {style}>
        <div style = {BtnStyle}>
          <div style = { this.state.active === 'watch' ? active : nonactive} onClick = { () => {
            this.props.AddCardType('watch' );
            this.switch_to_watch();
          } }>已觀看</div>
          <div style = { this.state.active === 'wanted' ? active : nonactive} onClick = { () => {
            this.props.AddCardType('wanted');
            this.switch_to_wanted();
          } }>待觀看</div>
        </div>
        <div style={contentStyle}>
          <CardAdd />
          <Card />
        </div>
      </div>
    )
  }
}
const style = {
  display: 'flex',
  flexDirection: 'column',
  padding: '2vw',
  paddingTop: 'calc(50px + 2vw)'
};

const BtnStyle = {
  display: 'flex',
  fontSize: '18px',
  color: 'white',
  marginBottom: '15px'
  
}

const contentStyle ={
  display: 'flex',
}

const active = {
  color: 'yellow',
  cursor: 'pointer',
  marginRight: '5px'
}

const nonactive = {
  color: 'white',
  cursor: 'pointer',
  marginRight: '5px'
}

const mapStateToProps = (state) => {
  return {type: state.CardTypeReducer}
}
export default connect(mapStateToProps, { AddCardType: AddCardType })(CardCom);
