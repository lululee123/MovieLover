import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/index';  

class Signout extends Component {
  signOut = () => {
    let r = window.confirm("確定要登出嗎");
    if (r) {
      this.props.Firebase
      .doSignOut()
      .then(() => {
        localStorage.setItem('FirebaseUID', '');
        this.props.getUser();
        window.location.reload();
      });
    } 
  }

  render(){
    return(
      <li style = {style} onClick = { () => {
        this.signOut();
        this.props.closeSideMenu();
      }}>
        登出
      </li>
    )
  }
}

const style = {
  cursor: 'pointer'
};
  
export default connect('', {getUser: getUser})(Signout);