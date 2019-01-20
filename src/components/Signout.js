import React, { Component } from 'react';
import { withFirebase } from './Firebase';

class Signout extends Component {
  constructor(props){
    super(props);
  }
  signOut = () => {
    this.props.firebase
      .doSignOut()
      .then(() => {
        this.props.changeLoginStatus();
        localStorage.setItem('ID', null);
      })
      .catch(() => {
        console.log('logout error');
      });
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
  

export default withFirebase(Signout);