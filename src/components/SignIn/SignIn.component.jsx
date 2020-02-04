import React, { Component } from "react";
import "./SignIn.style.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <div className="title">
          <h2>I already have an account</h2>
          <span>Sign in with Email and password</span>
        </div>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="email"
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            label="password"
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="button">
            <Button type="submit" value="Submit Form">
              Sign In
            </Button>

            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
