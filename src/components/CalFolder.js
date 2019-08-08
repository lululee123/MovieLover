import React, { useState } from 'react';
import { connect } from 'react-redux';
import './css/CalFolder.scss';
import CalFolderInner from './CalFolderInner';

const CalFolder = (props) =>{
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  }

  return (
    <div className="cal__folder" >
      <div className={`folder ${open ? 'open' : ''}`} onClick={toggle}>{open ? '關閉' : '開啟分析結果'}</div>
        { open ? ( 
          <ul>
            {props.files.map((file) => {
              return <CalFolderInner key={file.name} name={file.name} files={file.files} />
            })}
          </ul>) : 
          null
        } 
    </div>
  )
}

const mapStateToProps = (state) => {
  return {cardWatch: state.SaveWatchCardReducer, cardWanted: state.SaveWantedCardReducer}
}
export default connect(mapStateToProps)(CalFolder);