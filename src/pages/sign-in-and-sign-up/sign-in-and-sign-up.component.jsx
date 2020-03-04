import React,{useEffect, useHistory} from 'react';
import {withRouter} from 'react-router';
import './sign-in-sign-up.style.scss';
import SignIn from '../../components/SignIn/SignIn.component';
import SignUp from '../../components/SignUp/SignUp.component'


const SignInSignUp = () => {

  return (
    <div className='sign-in-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInSignUp;
