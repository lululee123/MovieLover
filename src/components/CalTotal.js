import React, { Component } from 'react';
import './css/CalTotal.scss';

const CalTotal = (props) => {
  return (
    <div className="total_number">目前已觀看{props.total}部電影</div>
  );
};

export default CalTotal;