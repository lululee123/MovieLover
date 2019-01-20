import React, { Component } from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
  if (props.song == null){
    return <div>Select a song</div>;
  }else{
    return (
      <div>
        <div>{props.song.title}</div>
        <div>{props.song.duration}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);