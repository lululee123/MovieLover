import React, { Component } from 'react';
import './TodoList.scss';
import { connect } from 'react-redux';
import { AddtodoItems } from '../actions/index';


class TodoList extends Component {
  constructor (){
    super();
    this.state = {
      currentTodo: {id: '', text: ''}
    }
  }

  render() {
    return (
      // <div className="Main">
      //   <form onSubmit = {this.props.addItem}>
      //     <input className="inputBox" onChange = {this.props.handleInput} value = {this.props.current.item}/>
      //     <button className="enterBtn" type="submit">Click</button>
      //   </form>
      // </div>
      <div className="Main">
        <form>
          <input className="inputBox" value = {this.state.currentTodo.text} onChange = {(e) => {
            this.setState({
              currentTodo: {
                id: Date.now(),
                text: e.target.value
              }
            })
          }}/>
          <button className="enterBtn" onClick = {(e) => {
            e.preventDefault();
            this.props.AddtodoItems(this.state.currentTodo);
            this.setState({
              currentTodo: {
                id: '',
                text: ''
              }
            })
          }}>Click</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { addItem : state.todoItemReducer}
} 

export default connect(mapStateToProps, {AddtodoItems: AddtodoItems})(TodoList);
