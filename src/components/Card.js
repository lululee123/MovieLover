import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardItem from './CardItem';
import { withFirebase } from './Firebase';

class Card extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const style = {
      display: 'flex',
      flexWrap: 'wrap'
    }
    return (
      <div>
        {this.props.type === 'watch' ? 
        (
          <div style = {style}>
            {
              Object.keys(this.props.cardWatch).map((s) => { 
                return <CardItem detail = {this.props.cardWatch[s]}  key={s} id ={s} />
              })
            }
          </div> ): 
        (
          <div style = {style}>
            {
              Object.keys(this.props.cardWanted).map((s) => { 
                return <CardItem detail = {this.props.cardWanted[s]}  key={s} id ={s} />
              })
            }
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {type: state.CardTypeReducer, cardWatch: state.SaveWatchCardReducer, cardWanted: state.SaveWantedCardReducer}
}

export default connect(mapStateToProps)(withFirebase(Card));
