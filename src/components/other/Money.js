import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inputSalary } from '../actions/index';

const startTime = Date.now();
class Money extends Component{
  constructor(){
    super();
    this.state = {
      time: 0
    }
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({
        time: (Date.now() - startTime) / 1000
      })
    }, 1000)
  }
  render (){
    return (
      <div>
        <input 
          value={this.props.salary} 
          onChange={ (e) => {this.props.inputSalary(e.target.value)} }>
        </input>
        <div >$/s：{(this.state.time * this.props.salary / 240 / 60 / 60).toFixed(1)}</div>
        <div>經過時間：{this.state.time.toFixed(0)}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {salary: state.salaryReducer};
};

export default connect(mapStateToProps, { inputSalary: inputSalary })(Money);