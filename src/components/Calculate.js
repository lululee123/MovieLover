import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/Calculate.scss';
import CalTotal from './CalTotal';
import CalFolder from './CalFolder';

class Calculate extends Component{
  total = () => {
    let time = Object.values(this.props.list.watch).map((item) => {
      return item.time;
    });
    return <CalTotal total={time.length} />
  }
  
  render(){
    if (this.props.list.watch){
      return (
        <div >
          {
            this.total()
          }
          <CalFolder files={this.props.data} />
        </div>
      )
    } else {
      return (
        <div className="system_calculating">無分析資料...</div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  if (state.CheckLoginReducer.list && state.CheckLoginReducer.list.watch){
    let dataList = [];
    let data = [];
    let list = [];
    let total = []; 
    let final = [];

    let allDate = Object.values(state.CheckLoginReducer.list.watch).map(item => {
      return item.time.split('-')[0];
    }).sort();
    for (let i = 0; i < allDate.length; i++){
      if (allDate[i] !== allDate[i + 1]){
        dataList.push(allDate[i]);
      }
    }
    for (let i = 0; i < dataList.length; i++){
      for (let j = 0; j < Object.values(state.CheckLoginReducer.list.watch).length; j++ ){
        if (dataList[i] === Object.values(state.CheckLoginReducer.list.watch)[j].time.split('-')[0]){
          list.push({"name": Object.values(state.CheckLoginReducer.list.watch)[j].name, "month": Object.values(state.CheckLoginReducer.list.watch)[j].time.split('-')[1], "day": Object.values(state.CheckLoginReducer.list.watch)[j].time.split('-')[2]})
        }
      }
      total.push(list);
      list = [];
    }
    for (let i = 0; i < dataList.length; i++){
      data.name = dataList[i];
      data.files = total[i];
      final.push(data);
      data = [];
    }
    return {
      list: state.CheckLoginReducer.list,
      data: final
    }
  }
  return {
    list: state.CheckLoginReducer.list,
    data: {}
  }
}
export default connect(mapStateToProps)(Calculate);