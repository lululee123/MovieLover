import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/Calculate.scss';
import CalTotal from './CalTotal';
import CalFolder from './CalFolder';

class Calculate extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: [
        {
          "name": "2018",
          "files": [
            {"name": "123", "files": []},
            {"name": "456", "files": []}
          ]
        },
        {
          "name": "2017",
          "files": [
            {"name": "987", "files": []},
            {"name": "456", "files": []}
          ]
        }
      ]
    }
  }

  total = () => {
    let time = Object.values(this.props.cardWatch).map((item) => {
      return item.time;
    });
    return <CalTotal total = {time.length} />
  }
  
  render(){
    if ( Object.values(this.props.cardWatch).length === 0 ){
      return <div className="system_calculating">系統分析中...</div>
    }
    return (
      <div >
        {
          this.total()
        }
        <CalFolder files = {this.state.data} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {cardWatch: state.SaveWatchCardReducer, cardWanted: state.SaveWantedCardReducer}
}
export default connect(mapStateToProps)(Calculate);