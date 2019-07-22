import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from "moment";

class Home extends Component {
  state = {
    more: false
  }
  updateWatch = (type) => {
    this.props.Firebase
      .user(this.props.firebaseUID)
      .child(type)
      .push({
        "name": this.props.item.title,
        "time": moment(new Date()).format('YYYY-MM-DD')
      });
  }
  updateWanted = (type) => {
    this.props.Firebase
      .user(this.props.firebaseUID)
      .child(type)
      .push({
        "name": this.props.item.title,
        "time": moment(new Date()).format('YYYY-MM-DD')
      });
  }
  checkWatch = () => {
    let check = false;
    Object.keys(this.props.list.watch).map((s) => { 
      if (this.props.list.watch[s].name === this.props.item.title){ 
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
    let check = false;
    Object.keys(this.props.list.wanted).map((s) => { 
      if (this.props.list.wanted[s].name === this.props.item.title){ 
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
      <div className="movie__card">
        <img  className="movie__image" src={ "https://image.tmdb.org/t/p/w300" + this.props.item.poster_path} alt="" />
        <div className="movie__title"> {this.props.item.title} </div>
        <div className="movie__more" onClick={() => {this.setState({more: true})}}>...</div>
        { this.state.more ?
          <div className="movie__card_hover">
            <div className="movie__close" onClick={() => {this.setState({more: false})}}>&#10060;</div>
            <div className="movie__watch" onClick={this.checkWatch} >加入已觀看</div>
            <div className="movie__wanted" onClick={this.checkWanted}>加入待觀看</div>
          </div> :
          <div></div>
        }
       
      </div>
    )
  }  
}

const mapStateToProps = (state) => {
  return { 
    firebaseUID: state.CheckLoginReducer.uid,
    list: state.CheckLoginReducer.list
  }
}

export default connect(mapStateToProps)(Home);