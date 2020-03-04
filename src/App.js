import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage.component";
import { Route, Switch, Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'
import ShopPage from "./pages/ShopPage/ShopPage.component";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout/checkout.component"
import SignInSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const HatsPage = () => {
  return (
    <div>
      <h1>HATS</h1>
    </div>
  );
};

class App extends React.Component {

unsubscribeFromAuth =null;

componentDidMount(){
  const {setCurrentUser} = this.props

  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot =>{
        // this.setState({
        //   currentUser:{
        //     id: snapShot.id,
        //     ...snapShot.data()
        //   }
        // }, () => console.log("setssttaate", this.state));
        // console.log(this.state)

        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        })
        console.log(this.props.currentUser)

      });
    }
    setCurrentUser(userAuth);
    })
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={() => this.props.currentUser? <Homepage /> : <SignInSignUp /> } />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/hats" component={HatsPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          {/* <Route path="/signin" component = {SignInSignUp}/> } /> */}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
