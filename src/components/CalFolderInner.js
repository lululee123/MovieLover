import React, { useState } from "react";
import './css/CalFolder.scss';
import CalFolderInnerItem from './CalFolderInnerItem';
import BarChart from './BarChart';

const CalFolderInner = (props) => {
  const [open, setOpen] = useState(false);

  const pieDate = () => {
    let dataList = Array.from({length: 12}, (v, k) => k+1);
    let data = [];
    for (let i = 0, obj = {}, value = 0; i < dataList.length; i++){
      obj = {};
      value = 0;
      obj.date = dataList[i];
      props.files.forEach(item => {
        if (parseInt(dataList[i]) === parseInt(item.month)){
          value ++;
        }
      })
      obj.value = value;
      data.push(obj);
    }
    return data;
  }

  const toggle = () => {
    setOpen(!open);
  }

  return (
    <div >
      <div className={`folder_inner ${open ? 'open' : ''}`} onClick={toggle}>{props.name}</div>
      { 
        open ? 
        ( 
          <div>
            <div id='container'>
              <BarChart data={pieDate()} />
            </div>
            <ul>
              {props.files.map((file) => {
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

export default CalFolderInner;