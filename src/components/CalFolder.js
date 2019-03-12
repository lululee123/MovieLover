import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/CalFolder.scss';
import * as d3 from "d3";

class CalFolder extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: [],
      open: false
    }
  }

  componentDidMount(){
    //get unique year List
    // let year;
    // let yearList = [];
    // year = Object.values(this.props.cardWatch).map((item) => {
    //   return item.time.split('-')[0];
    // });
    // year.map((item) => {
    //   if (yearList.indexOf(item) == -1){
    //     yearList.push(item);
    //   }
    // })

    //get movie list of each year

  }

  toggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  
  render(){
    if (this.props.files){
      return (
        <div >
          <div className={`folder ${this.state.open ? 'open' : ''}`} onClick={this.toggle}>{this.props.name}</div>
            { this.state.open ? ( 
            <ul>
              {this.props.files.map((file) => {
                console.log(file);
                return <CalFolder name={file.name} files={file.files} />
              })}
            </ul>) : null} 
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {cardWatch: state.SaveWatchCardReducer, cardWanted: state.SaveWantedCardReducer}
}
export default connect(mapStateToProps)(CalFolder);