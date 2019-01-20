import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DeletetodoItems } from '../actions/index';


class TodoItem extends Component {
  render() {
    const eachItems = this.props.enter.map((item) => {
      return <li key={item.id} onClick = {() => this.props.DeletetodoItems(item)}>{item.text}</li>
    });

    return (
      <ul>
        {eachItems}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return { enter: state.todoItemReducer };
}
export default connect(mapStateToProps, {DeletetodoItems: DeletetodoItems})(TodoItem);
