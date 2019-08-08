import React, { useState } from 'react';
import Signup from './Signup';
import Signin from './Signin';
import './css/User.scss';

const User = (props) => {
  const [showSignup, setShowSignup] = useState(false);
  const signupStatus = () => {
    setShowSignup(!showSignup);
  }

  return (
    <div className="user_box">
      <div className="user_box__inner">          
        {showSignup ? <Signup signupStatus={signupStatus} Firebase={props.Firebase} /> : <Signin signupStatus={signupStatus} Firebase={props.Firebase} />}
      </div>
    </div>
  ) 
}

export default User;