import React, { Component } from 'react';
import Signup from './Signup';
import Signin from './Signin';
import './css/User.scss';
import { connect } from 'react-redux';
import { UserId } from '../actions/index';

class User extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSignup: false
    }
  }
  signupStatus = () => {
    this.setState({
      showSignup: !this.setState.showSignup
    })
  }

  render(){
    return (
      <div className="user_box">
        <div className="user_box__inner">          
          <Signin changeLoginStatus = {this.props.changeLoginStatus} IdUpdate = {this.props.UserId} />
          {this.state.showSignup ? <Signup changeLoginStatus = {this.props.changeLoginStatus} IdUpdate = {this.props.UserId} /> : <div className="signUpBtn" onClick = {this.signupStatus}>成為會員</div>}
        </div>
      </div>
    ) 
  }
}

const mapStateToProps = (state) => {
  return { userId: state.UserIdReducer};
}

export default connect(mapStateToProps, { UserId: UserId })(User);