import React, { Component } from 'react';
import { withFirebase } from './Firebase';
import './Signup.scss';


const SignInPage = (props) => (
  <div className="signup__box">
    <h1>登入</h1>
    <SignInForm changeLoginStatus = { props.changeLoginStatus } IdUpdate = { props.IdUpdate } AddCardItem = {props.AddCardItem} />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then((authUser) => {
        this.props.IdUpdate(authUser.user.uid);
        this.props.changeLoginStatus();
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

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
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="密碼"
          className="signup__input"
        />
        <button disabled={isInvalid} type="submit"  className="signup__enter">
          登入
        </button>
        <br />
        <div className="signup__error">
          {error && <p>{error.message}</p>}
        </div>
      </form>
    );
  }
}

const SignInForm = withFirebase(SignInFormBase);

export default SignInPage;

export { SignInForm };