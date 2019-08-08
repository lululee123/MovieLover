import React, { Component } from "react";
import './css/CalFolder.scss';
import CalFolderInnerItem from './CalFolderInnerItem';
import BarChart from './BarChart';

class CalFolderInner extends Component{
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
  }

  pieDate = () => {
    let dataList = Array.from({length: 12}, (v, k) => k+1);
    let data = [];
    for (let i = 0, obj = {}, value = 0; i < dataList.length; i++){
      obj = {};
      value = 0;
      obj.date = dataList[i];
      this.props.files.forEach(item => {
        if (parseInt(dataList[i]) === parseInt(item.month)){
          value ++;
        }
      })
      obj.value = value;
      data.push(obj);
    }
    return data;
  }

  toggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render(){
    return (
      <div >
        <div className={`folder_inner ${this.state.open ? 'open' : ''}`} onClick={this.toggle}>{this.props.name}</div>
        { 
          this.state.open ? 
          ( 
            <div>
              <div id='container'>
                <BarChart data={this.pieDate()} />
              </div>
              <ul>
                {this.props.files.map((file) => {
                  return <CalFolderInnerItem key={file.name} name={file.name} month={file.month} day={file.day} /> 
                })}
              </ul>
            </div>
          )
          : 
          null
        } 
      </div>
    )
  }
}

export default CalFolderInner;