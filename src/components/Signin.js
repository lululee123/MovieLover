import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/index';  
import './css/User.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      msg: "",
      forgetPasswordEmail: "",
      forget: false
    };
  }

  LogIn = () => {
    let { email, password } = this.state;
    this.props.Firebase
    .doSignInWithEmailAndPassword(email, password)
    .then((authUser) => {
        this.setState({
          msg: "Success"
        })
        localStorage.setItem('FirebaseUID', authUser.user.uid)
        this.props.getUser();
      }
    )
    .catch( error => {
      this.setState({
        msg: error.toString(error)
      })
    });
  };

  ForgetPasswordTrigger =() => {
    this.setState({
      forget: !this.state.forget
    })
  }

  SendEmail = () => {
    if (this.state.forgetPasswordEmail.trim() !== ''){
      this.props.Firebase
      .doFetchSignInMethodsForEmail(this.state.forgetPasswordEmail)
      .then( result => {
        if (result.length > 0) {
          this.props.Firebase
          .doPasswordReset(this.state.forgetPasswordEmail)
          .then(
            this.setState({
              msg: "Please Check Your Mail Box"
            })
          )
        }
      })
      .catch(
        this.setState({
          msg: "Email is not exist!"
        })
      );
    }
  }

  handleKeyDownLogin = (e) => {
    if (e.key === 'Enter') {
      this.LogIn();
    }
  } 

  handleKeyDownForget= (e) => {
    if (e.key === 'Enter') {
      this.SendEmail(this.state.forgetPasswordEmail);
    }
  } 

  render() {
    return (
      <div className="signup__box">
      <h1>登入</h1>

      {
        this.state.forget ?
        <div className="signup__box_inner">
          <div className="signup__error">{this.state.msg}</div>
          <input
            className="signup__input"
            placeholder='Email' 
            onChange={forgetPasswordEmail => this.setState({ forgetPasswordEmail: forgetPasswordEmail.target.value })}
            onKeyDown={this.handleKeyDownForget}
          />
          <div className="signup__enter" onClick={this.SendEmail}>送出</div>      
          <div className="otherBtn" onClick={this.ForgetPasswordTrigger}>返回</div>
        </div>
        : 
        <div className="signup__box_inner">
          <div className="signup__error">{this.state.msg}</div>
          <input
            className="signup__input"
            placeholder='Email' 
            onChange={email => this.setState({ email: email.target.value })}
          />
          <input
            className="signup__input"
            placeholder='密碼' 
            type="password"
            onChange={password => this.setState({ password: password.target.value })}
            onKeyDown={this.handleKeyDownLogin}
          />         
          <div className="signup__enter" onClick={this.LogIn}>登入</div>
          <div className="otherBtn" onClick={this.ForgetPasswordTrigger}>忘記密碼</div>
          <div className="otherBtn" onClick={this.props.signupStatus}>註冊</div>
        </div>
      }
      </div>
    );
  }
}

export default connect('', {getUser: getUser})(SignIn);