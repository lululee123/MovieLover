import React from 'react';
import './css/CalFolderInnerItem.scss';

const CalFolderInnerItem = (props) => {
  return (
    <div className="folder__item">    
      <div className="date">
        <h3>{props.month}<br /><span>{props.day}</span></h3>
      </div>
      <div className="name">
        <p>{props.name}</p>
      </div>
    </div> 
  )
}

export default CalFolderInnerItem;