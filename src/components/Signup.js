import React, { Component } from 'react';
import './css/User.scss';
import { connect } from 'react-redux';
import { getUser } from '../actions/index';  //action

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordCheck:"",
      msg: ""
    };
  }

  SignUp = () => {
    let { email, password, passwordCheck } = this.state;
    if (passwordCheck === password){
      this.props.Firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then((authUser) => {
          this.setState({
            msg: "Success"
          })
          localStorage.setItem('FirebaseUID', authUser.user.uid);
          this.props.getUser();
        }
      )
      .catch( error => {
        this.setState({
          msg: error.toString(error)
        })
      });
    } else{
      this.setState({
        msg: '密碼不相符'
      })
    }
  }

  handleKeyDownSignup = (e) => {
    if (e.key === 'Enter') {
      this.SignUp();
    }
  }

  render() {
    return (
      <div className="signup__box">
        <h1>註冊</h1>
        <div className="signup__box_inner">
          <div className="signup__error">{this.state.msg}</div>
          <input
            name="email"
            type="text"
            placeholder="Email"
            className="signup__input"
            onChange={email => this.setState({ email: email.target.value })}
          />
          <input
            type="password"
            placeholder="密碼"
            className="signup__input"
            onChange={password => this.setState({ password: password.target.value })}
          />
          <input
            type="password"
            placeholder="確認密碼"
            className="signup__input"
            onChange={passwordCheck => this.setState({ passwordCheck: passwordCheck.target.value })}
            onKeyDown={this.handleKeyDownSignup}
          />
          <br />
          <div className="signup__enter" onClick={this.SignUp}>註冊</div>
          <div className="otherBtn" onClick={this.props.signupStatus}>登入</div>
        </div>
      </div>
    );
  }
}


export default connect('', {getUser: getUser})(SignUp);