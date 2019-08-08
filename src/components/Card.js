import React from 'react';
import { connect } from 'react-redux';
import CardItem from './CardItem';

const Card = (props) => {
  const style = {
    display: 'flex',
    flexWrap: 'wrap'
  }
  return (
    <div>
      { props.type === 'watch' && props.list.watch ? 
        (
          <div style={style}>
            {
              Object.keys(props.list.watch).map((s) => { 
                return <CardItem Firebase={props.Firebase} detail={props.list.watch[s]}  key={s} id={s} />
              })
            }
          </div> 
        ): <div></div>
      }
      {
        props.type === 'wanted' && props.list.wanted ? 
        (
          <div style={style}>
            <div style = {style}>
            {
              Object.keys(props.list.wanted).map((s) => { 
                return <CardItem Firebase={props.Firebase} detail={props.list.wanted[s]}  key={s} id={s} />
              })
            }
          </div>
          </div> 
        ): <div></div>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    type: state.CardTypeReducer, 
    list: state.CheckLoginReducer.list
  }
}

export default connect(mapStateToProps)(Card);