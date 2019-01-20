import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFirebase } from './Firebase';
import moment from "moment";


class Home extends Component {
  constructor(props){
    super(props);
  }

  updateWatch = (type) => {
    this.props.firebase
      .user(this.props.userId)
      .child(type)
      .push({
        "name": this.props.item.title,
        "time": moment(new Date()).format('YYYY-MM-DD')
      });
  }
  updateWanted = (type) => {
    this.props.firebase
      .user(this.props.userId)
      .child(type)
      .push({
        "name": this.props.item.title,
        "time": moment(new Date()).format('YYYY-MM-DD')
      });
  }
  render(){
    return (
      <div key={'movie-' + this.props.idx} className="movie__card">
        <img  className="movie__image" src={ "https://image.tmdb.org/t/p/w300" + this.props.item.poster_path} />
        <div className="movie__title"> {this.props.item.title} </div>
        <div className="movie__card_hover">
          <div className="movie__watch" onClick={() => {
            this.updateWatch('watch');
            alert('添加成功！');  
          }}>加入已觀看</div>
          <div className="movie__wanted" onClick={() => {
            this.updateWanted('wanted');
            alert('添加成功！');  
          }}>加入待觀看</div>
        </div>
      </div>
    )
  }  
}
const mapStateToProps = (state) => {
  return {userId: state.UserIdReducer}
}

export default connect(mapStateToProps)(withFirebase(Home));