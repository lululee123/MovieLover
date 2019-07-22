import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/CalFolder.scss';
import CalFolderInner from './CalFolderInner';

class CalFolder extends Component{
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
  }

  toggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render(){
    return (
      <div className="cal__folder" >
        <div className={`folder ${this.state.open ? 'open' : ''}`} onClick={this.toggle}>{this.state.open ? '關閉' : '開啟分析結果'}</div>
          { this.state.open ? ( 
            <ul>
              {this.props.files.map((file) => {
                return <CalFolderInner key={file.name} name={file.name} files={file.files} />
              })}
            </ul>) : 
            null
          } 
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {cardWatch: state.SaveWatchCardReducer, cardWanted: state.SaveWantedCardReducer}
}
export default connect(mapStateToProps)(CalFolder);