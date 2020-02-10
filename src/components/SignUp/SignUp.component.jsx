import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth } from 'firebase';
import { createUserProfileDocument } from '../../firebase/firebase.utils';

export class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:'',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword){
            alert("password doesn't match")
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user, {displayName})

            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:'',
            });
        }catch(error){
            console.error(error);
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

  render() {
      const {displayName, email, password, confirmPassword} = this.state
    return (
      <div className='sign-up'>
          <h1 className='title'> I do not have an account</h1>
          <span>Sign up with your email and password</span>
          <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <FormInput
                label = 'DisplayName'
                type = 'text'
                name = 'displayName'
                value = {displayName}
                onChange = {this.handleChange}
                required
            >
                
            </FormInput>

            <FormInput
                label= 'Email'
                type = 'text'
                name = 'email'
                value = {email}
                onChange = {this.handleChange}
                required
            >
            </FormInput>

            <FormInput
                label ='Password'
                type = 'text'
                name = 'password'
                value = {password}
                onChange = {this.handleChange}
                required
            >
            </FormInput>

            <FormInput
                label= 'Confirm Password'
                type = 'text'
                name = 'confirmPassword'
                value = {confirmPassword}
                onChange = {this.handleChange}
                required
            >

            </FormInput>

            <CustomButton type='submit' >Sign Up</CustomButton>

          </form>
        
      </div>
    )
  }
}

export default SignUp;
