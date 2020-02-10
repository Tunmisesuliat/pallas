import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage.component";
import Header from "./components/header/header.component";
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
constructor(props){
  super(props);
  this.state = {
    currentUser:null
  }
}

unsubscribeFromAuth =null;

componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot =>{
        this.setState({
          currentUser:{
            id: snapShot.id,
            ...snapShot.data()
          }
        }, () => console.log(this.state));
      });
    }
    this.setState({currentUser:userAuth})
    })
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/hats" component={HatsPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
