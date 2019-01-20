import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions/index';

class SongList extends Component {
  render(){
    return this.props.songs.map((item) => { 
      return (
        <div>
          <div key={item.title}>{item.title}</div>
          <button onClick={() => this.props.selectSong(item)}>SELECT</button>
        </div>
      )
    });
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
}

export default connect( mapStateToProps, {selectSong: selectSong} )(SongList);

