import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardItem from './CardItem';

class Card extends Component{
  render(){
    const style = {
      display: 'flex',
      flexWrap: 'wrap'
    }
    return (
      <div>
        { this.props.type === 'watch' && this.props.list.watch ? 
          (
            <div style={style}>
              {
                Object.keys(this.props.list.watch).map((s) => { 
                  return <CardItem Firebase={this.props.Firebase} detail={this.props.list.watch[s]}  key={s} id={s} />
                })
              }
            </div> 
          ): <div></div>
        }
        {
          this.props.type === 'wanted' && this.props.list.wanted ? 
          (
            <div style={style}>
             <div style = {style}>
              {
                Object.keys(this.props.list.wanted).map((s) => { 
                  return <CardItem Firebase={this.props.Firebase} detail={this.props.list.wanted[s]}  key={s} id={s} />
                })
              }
            </div>
            </div> 
          ): <div></div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    type: state.CardTypeReducer, 
    list: state.CheckLoginReducer.list
  }
}

export default connect(mapStateToProps)(Card);
