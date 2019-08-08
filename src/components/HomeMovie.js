import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from "moment";

const Home = (props) => {
  const [more, setMore] = useState(false);
  const updateWatch = (type) => {
    props.Firebase
      .user(props.firebaseUID)
      .child(type)
      .push({
        "name": props.item.title,
        "time": moment(new Date()).format('YYYY-MM-DD')
      });
  }
  const updateWanted = (type) => {
    props.Firebase
      .user(props.firebaseUID)
      .child(type)
      .push({
        "name": props.item.title,
        "time": moment(new Date()).format('YYYY-MM-DD')
      });
  }
  const checkWatch = () => {
    let check = false;
    Object.keys(props.list.watch).forEach((s) => { 
      if (props.list.watch[s].name === props.item.title){ 
        check = true;
      }
    })
    
    if (!check){
      updateWatch('watch');
      alert('添加成功！');  
    }else{
      alert('已在清單內');
    }
  }
  const checkWanted = () => {
    let check = false;
    Object.keys(props.list.wanted).forEach((s) => { 
      if (props.list.wanted[s].name === props.item.title){ 
        check = true;
      }
    })

    if (!check){
      updateWanted('wanted');
      alert('添加成功！');  
    }else{
      alert('已在清單內');
    }
  }

    return (
      <div className="movie__card">
        <img  className="movie__image" src={ "https://image.tmdb.org/t/p/w300" + props.item.poster_path} alt="" />
        <div className="movie__title"> {props.item.title} </div>
        <div className="movie__more" onClick={() => {setMore(!more)}}>...</div>
        { more ?
          <div className="movie__card_hover">
            <div className="movie__close" onClick={() => {setMore(!more)}}>&#10060;</div>
            <div className="movie__watch" onClick={checkWatch} >加入已觀看</div>
            <div className="movie__wanted" onClick={checkWanted}>加入待觀看</div>
          </div> :
          <div></div>
        }
       
      </div>
    )
   
}

const mapStateToProps = (state) => {
  return { 
    firebaseUID: state.CheckLoginReducer.uid,
    list: state.CheckLoginReducer.list
  }
}

export default connect(mapStateToProps)(Home);