import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage.component";
import {Route} from 'react-router-dom';
import ShopPage from './pages/ShopPage/ShopPage.component'

const HatsPage = () => {
  return(
    <div>
      <h1>HATS</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      {/* <Homepage /> */}
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={ShopPage}/>
      <Route  path='/hats' component={HatsPage}/>
    </div>
  );
}

export default App;
