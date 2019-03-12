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
  checkWatch = () => {
    var check = false;
    Object.keys(this.props.cardWatch).map((s) => { 
      if (this.props.cardWatch[s].name === this.props.item.title){ 
        check = true;
      }
    })
    
    if (!check){
      this.updateWatch('watch');
      alert('添加成功！');  
    }else{
      alert('已在清單內');
    }
  }
  checkWanted = () => {
    var check = false;
    Object.keys(this.props.cardWanted).map((s) => { 
      if (this.props.cardWanted[s].name === this.props.item.title){ 
        check = true;
      }
    })

    if (!check){
      this.updateWanted('wanted');
      alert('添加成功！');  
    }else{
      alert('已在清單內');
    }
  }
  render(){
    return (
      <div key={'movie-' + this.props.idx} className="movie__card">
        <img  className="movie__image" src={ "https://image.tmdb.org/t/p/w300" + this.props.item.poster_path} />
        <div className="movie__title"> {this.props.item.title} </div>
        <div className="movie__card_hover">
          <div className="movie__watch" onClick={this.checkWatch} >加入已觀看</div>
          <div className="movie__wanted" onClick={this.checkWanted}>加入待觀看</div>
        </div>
      </div>
    )
  }  
}
const mapStateToProps = (state) => {
  return {userId: state.UserIdReducer, cardWatch: state.SaveWatchCardReducer, cardWanted: state.SaveWantedCardReducer}
}

export default connect(mapStateToProps)(withFirebase(Home));