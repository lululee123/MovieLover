import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardItem from './CardItem';
import { withFirebase } from './Firebase';

class Card extends Component{
  constructor(props){
    super(props);

    this.state = {
      watch: {},
      wanted: {}
    }
  }

  componentDidMount(){
    this.props.firebase.user(this.props.userId).on("value", snap => {
      if (snap.val() !==  null){
        if (snap.val().hasOwnProperty("watch")){
          this.setState({
            watch: snap.val().watch
          })
          
        }
        else{
          this.setState({
            watch: {}
          })
        }
        if (snap.val().hasOwnProperty("wanted")){
          this.setState({
            wanted: snap.val().wanted
          })
          
        }
        else{
          this.setState({
            wanted: {}
          })
        }
      }
      if (snap.val() === null){
        this.setState({
          watch: {},
          wanted: {}
        })
      }
    })
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
              Object.keys(this.state.watch).map((s) => { 
                return <CardItem detail = {this.state.watch[s]}  key={s} id ={s} />
              })
            }
          </div> ): 
        (
          <div style = {style}>
            {
              Object.keys(this.state.wanted).map((s) => { 
                return <CardItem detail = {this.state.wanted[s]}  key={s} id ={s} />
              })
            }
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {userId: state.UserIdReducer, type: state.CardTypeReducer}
}

export default connect(mapStateToProps)(withFirebase(Card));
