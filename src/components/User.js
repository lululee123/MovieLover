import React, { Component } from 'react';
import Signup from './Signup';
import Signin from './Signin';
import './css/User.scss';

class User extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSignup: false
    }
  }
  signupStatus = () => {
    this.setState({
      showSignup: !this.state.showSignup
    })
  }

  render(){
    return (
      <div className="user_box">
        <div className="user_box__inner">          
          {this.state.showSignup ? <Signup signupStatus={this.signupStatus} Firebase={this.props.Firebase} /> : <Signin signupStatus={this.signupStatus} Firebase={this.props.Firebase} />}
        </div>
      </div>
    ) 
  }
}

export default User;