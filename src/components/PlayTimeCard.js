import React from 'react';
import './css/PlayTimeCard.scss';

const PlayTimeCard = (props) =>{  
  return (
    <div className="PlayTimeCard">
      <div className="PlayTimeCard__theater">
        <a href={`https://maps.google.com/maps?q=${props.theater}`}>{props.theater}</a>
      </div>
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