import React from 'react';
import './css/PlayTimeCard.scss';

const PlayTimeCard = (props) =>{  
  return (
    <div className="PlayTimeCard">
      <div className="PlayTimeCard__theater">{props.theater}</div>
      <div className="PlayTimeCard__timebox">
        { 
          props.time.map( (item) => {
            item = item.split(' ')[1];
            return <div key={item}>{`${item.split(':')[0]}:${item.split(':')[1]}`}</div>
          })
        }
      </div>
    </div>
  );
};

export default PlayTimeCard;