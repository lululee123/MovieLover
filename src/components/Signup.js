import React, { Component } from 'react';
import { withFirebase } from './Firebase';
import './Signup.scss';

const INITIAL_STATE = {
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const SignUpPage = (props) => (
  <div className="signup__box">
    <h1>註冊</h1>
    <SignUpForm changeLoginStatus = {props.changeLoginStatus} IdUpdate = { props.IdUpdate } />
  </div>
);

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      ...INITIAL_STATE
      
    };

  }

  onSubmit = event => {
    const { email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.props.IdUpdate(authUser.user.uid);
        this.props.changeLoginStatus();
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });

  };

  render() {
    const {
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '';


    return (
      <form onSubmit={this.onSubmit} className="signup__box_inner">
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email"
          className="signup__input"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="密碼"
          className="signup__input"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="確認密碼"
          className="signup__input"
        />
        <br />
        <button disabled={isInvalid}  type="submit" className="signup__enter">註冊</button>
        <div className="signup__error">
          {error && <p>{error.message}</p>}
        </div>  
      </form>
    );
  }
}

const SignUpForm = withFirebase(SignUpFormBase);

export default SignUpPage;

export { SignUpForm };